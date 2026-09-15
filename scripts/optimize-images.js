import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Images rendered on the homepage. Keeping this list explicit (rather than
// globbing src/assets) so the script never touches an asset by accident.
const TARGETS = [
  // App Design & Customization grid
  '../src/assets/templates/mobile-app-home-screen.png',
  '../src/assets/templates/mobile-app-menu-screen.png',
  '../src/assets/templates/mobile-app-ordering-screen.png',
  '../src/assets/templates/mobile-app-welcome-screen.png',
  // DesignShowcase carousels
  '../src/assets/templates/coffee-shop-home-screen.png',
  '../src/assets/templates/restaurant-menu-screen-dark.png',
  '../src/assets/templates/restaurant-welcome-screen.png',
  '../src/assets/templates/cafe-welcome-screen-orange.png',
  '../src/assets/templates/cafe-welcome-screen-purple.png',
  '../src/assets/templates/cafe-welcome-screen-pink.png',
  '../src/assets/templates/cafe-welcome-screen-gold.png',
  '../src/assets/templates/food-delivery-splash-screen.png',
  // Customize section phone mockup
  '../src/assets/pancakewelcome.png',
  '../src/assets/ChangeColor.png',
  '../src/assets/EditingText.png',
  '../src/assets/StatusBar.png',
];

// These screenshots were exported straight from the design tool with no
// compression, so simply re-encoding them at full colour depth cuts ~69% with
// no visible change. Note this is *visually* lossless, not bit-exact: libvips
// un/re-premultiplies alpha, which nudges semi-transparent edge pixels and
// rewrites the (invisible) RGB under fully transparent ones. Run `--verify` to
// see the per-pixel delta breakdown.
//
// `--quantize` reduces to a 256-colour palette for ~6% more. Not the default:
// these frames contain food photography, where banding would show.
function encode(image, quantize) {
  const withAlpha = image.ensureAlpha();
  return quantize
    ? withAlpha.png({ compressionLevel: 9, effort: 10, palette: true, quality: 90, dither: 1.0 })
    : withAlpha.png({ compressionLevel: 9, effort: 10, adaptiveFiltering: true });
}

function parseArgs(argv) {
  const outIndex = argv.indexOf('--out');
  return {
    quantize: argv.includes('--quantize'),
    verify: argv.includes('--verify'),
    outDir: outIndex !== -1 ? argv[outIndex + 1] : null,
  };
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

// Compares the encoder's output against the source pixel-by-pixel and buckets
// the differences, so a change to `encode()` can be sanity-checked instead of
// trusted.
async function verify(inputPath, quantize) {
  const source = sharp(inputPath).ensureAlpha();
  const { width } = await source.metadata();
  const before = await source.raw().toBuffer();
  const after = await sharp(await encode(sharp(inputPath), quantize).toBuffer())
    .ensureAlpha()
    .raw()
    .toBuffer();

  const buckets = { identical: 0, '1-2': 0, '3-15': 0, '16+': 0 };
  let visibleWorst = 0;

  for (let pixel = 0; pixel < before.length / 4; pixel++) {
    const i = pixel * 4;
    let delta = 0;
    for (let channel = 0; channel < 4; channel++) {
      delta = Math.max(delta, Math.abs(before[i + channel] - after[i + channel]));
    }

    if (delta === 0) buckets.identical++;
    else if (delta <= 2) buckets['1-2']++;
    else if (delta <= 15) buckets['3-15']++;
    else buckets['16+']++;

    // A delta only matters where the source pixel was actually visible.
    if (before[i + 3] > 8) visibleWorst = Math.max(visibleWorst, delta);
  }

  console.log(
    `  pixels: ${buckets.identical} identical, ${buckets['1-2']} off-by-1-2, ` +
    `${buckets['3-15']} off-by-3-15, ${buckets['16+']} off-by-16+ ` +
    `| worst delta on a visible pixel: ${visibleWorst} (width ${width})`
  );
}

async function main() {
  const { quantize, verify: shouldVerify, outDir } = parseArgs(process.argv.slice(2));

  if (outDir) {
    await fs.mkdir(outDir, { recursive: true });
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const target of TARGETS) {
    const inputPath = path.resolve(__dirname, target);
    const before = (await fs.stat(inputPath)).size;
    const name = path.basename(inputPath);

    // Fully resolve to a buffer before writing, so an in-place write never
    // races the read.
    const optimized = await encode(sharp(inputPath), quantize).toBuffer();

    // Never let an "optimization" make a file bigger.
    if (!outDir && optimized.length >= before) {
      console.log(`${name}: already optimal (${formatKb(before)}), skipped`);
      totalBefore += before;
      totalAfter += before;
      continue;
    }

    if (shouldVerify) {
      console.log(`${name}:`);
      await verify(inputPath, quantize);
    }

    await fs.writeFile(outDir ? path.join(outDir, name) : inputPath, optimized);

    const saved = ((1 - optimized.length / before) * 100).toFixed(1);
    console.log(`${name}: ${formatKb(before)} -> ${formatKb(optimized.length)} (-${saved}%)`);

    totalBefore += before;
    totalAfter += optimized.length;
  }

  const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`\nTotal: ${formatKb(totalBefore)} -> ${formatKb(totalAfter)} (-${totalSaved}%)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
