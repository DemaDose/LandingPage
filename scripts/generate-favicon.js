import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.resolve(__dirname, '../src/assets/TabLogo.png');
const outputPath = path.resolve(__dirname, '../public/favicon.png');

function isOrangeLike(r, g, b) {
  // Keep the mark: orange has high R, medium G, low B.
  return r > 150 && g > 90 && b < 120 && r > g && g > b;
}

function dist(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

async function main() {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  if (!width || !height) {
    throw new Error('Could not read image dimensions.');
  }

  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const channels = info.channels; // should be 4

  // Sample the "outer" rounded-square background color from a point that is
  // inside the square but outside the inner disk.
  const sampleX = Math.floor(width * 0.12);
  const sampleY = Math.floor(height * 0.12);
  const sampleIdx = (sampleY * width + sampleX) * channels;
  const bgR = data[sampleIdx];
  const bgG = data[sampleIdx + 1];
  const bgB = data[sampleIdx + 2];
  const bgA = data[sampleIdx + 3];

  const cx = (width - 1) / 2;
  const cy = (height - 1) / 2;

  // Inner disk radius tuned for this asset (512x512).
  // Slightly conservative so we remove the whole disk.
  const rInner = Math.min(width, height) * 0.44;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const d = dist(x, y, cx, cy);
      if (d > rInner) continue;

      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      if (a === 0) continue;
      if (isOrangeLike(r, g, b)) continue;

      // Replace the disk shading with the outer background color.
      data[idx] = bgR;
      data[idx + 1] = bgG;
      data[idx + 2] = bgB;
      data[idx + 3] = bgA;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Wrote ${outputPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

