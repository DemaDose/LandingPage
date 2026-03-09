import React from 'react';
import './Terms.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="app">
      <Header />
      <main className="terms-main">
        <article className="terms-article">
          <div className="terms-container">
            <h1 className="terms-title">Terms of Service</h1>
            <p className="terms-effective">Effective Date: March 2026</p>

            <p className="terms-intro">
              These Terms of Service (“Terms”) govern your access to and use of the DemaDose platform, mobile applications, and related services (collectively, the “Service”).
            </p>
            <p className="terms-intro">
              DemaDose (“DemaDose,” “we,” “our,” or “us”) provides a platform that allows businesses to create and manage mobile applications without writing code.
            </p>
            <p className="terms-intro">
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree with these Terms, you may not use the Service.
            </p>

            <section className="terms-section">
              <h2>1. Eligibility</h2>
              <p>You must be at least 13 years old to use the Service. By using DemaDose, you represent and warrant that:</p>
              <ul>
                <li>you meet the minimum age requirement</li>
                <li>you have the legal capacity to enter into these Terms</li>
                <li>the information you provide is accurate and truthful</li>
              </ul>
              <p>The Service is primarily intended for business owners and organizations that wish to create and manage mobile applications.</p>
            </section>

            <section className="terms-section">
              <h2>2. Description of the Service</h2>
              <p>DemaDose is a B2B SaaS platform that enables users to create, customize, and manage mobile applications for their businesses. The Service currently supports mobile platforms including iOS and Android, and may expand to web-based services in the future.</p>
              <p>DemaDose provides tools that allow users to:</p>
              <ul>
                <li>design mobile applications</li>
                <li>upload product listings and images</li>
                <li>manage business content</li>
                <li>manage customer orders and analytics</li>
                <li>build and deploy mobile applications</li>
              </ul>
              <p>DemaDose provides the platform and tools, but users are responsible for the content and functionality of the applications they create.</p>
            </section>

            <section className="terms-section">
              <h2>3. User Accounts</h2>
              <p>To use certain features of the Service, you must create an account. When creating an account, you may be required to provide information including:</p>
              <ul>
                <li>full name</li>
                <li>username</li>
                <li>email address</li>
                <li>password</li>
              </ul>
              <p>Users may optionally provide additional information such as:</p>
              <ul>
                <li>phone number</li>
                <li>profile photo</li>
                <li>business name</li>
                <li>business contact details</li>
              </ul>
              <p>You agree to:</p>
              <ul>
                <li>maintain the accuracy of your account information</li>
                <li>keep your login credentials secure</li>
                <li>notify us of any unauthorized use of your account</li>
              </ul>
              <p>You are responsible for all activities that occur under your account.</p>
            </section>

            <section className="terms-section">
              <h2>4. User Content</h2>
              <p>The Service allows users to upload and manage content including but not limited to:</p>
              <ul>
                <li>product images</li>
                <li>business logos</li>
                <li>profile photos</li>
                <li>application design elements</li>
                <li>product listings and descriptions</li>
              </ul>
              <p>You retain ownership of the content you upload. However, by uploading content to the platform, you grant DemaDose a non-exclusive, worldwide license to store, display, and process that content solely for the purpose of operating and improving the Service.</p>
              <p>You represent and warrant that:</p>
              <ul>
                <li>you own the content you upload, or</li>
                <li>you have the necessary rights and permissions to use it.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>5. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>engage in illegal activities</li>
                <li>conduct fraud, scams, or deceptive practices</li>
                <li>upload copyrighted content without authorization</li>
                <li>distribute malware or malicious code</li>
                <li>attempt to hack, exploit, or disrupt the platform</li>
                <li>interfere with the operation of the Service</li>
                <li>harass, abuse, or harm other users</li>
              </ul>
              <p>DemaDose reserves the right to remove content or suspend accounts that violate these rules.</p>
            </section>

            <section className="terms-section">
              <h2>6. Applications Created by Users</h2>
              <p>DemaDose provides tools that allow users to create their own mobile applications. Users are solely responsible for:</p>
              <ul>
                <li>the content of the applications they create</li>
                <li>the legality of their applications</li>
                <li>compliance with applicable laws and regulations</li>
                <li>how their applications interact with their own customers</li>
              </ul>
              <p>DemaDose does not review, endorse, or guarantee the legality or functionality of applications created using the platform.</p>
            </section>

            <section className="terms-section">
              <h2>7. Subscriptions and Payments</h2>
              <p>Creating and designing applications on the platform may be available for free. However, certain features such as building and deploying applications require a paid subscription.</p>
              <p>Subscription plans may include:</p>
              <ul>
                <li>monthly billing</li>
                <li>quarterly billing</li>
                <li>yearly billing</li>
              </ul>
              <p>Payments are processed through third-party payment services including RevenueCat. DemaDose does not store or process payment card information directly.</p>
              <p>All payments are non-refundable, unless required by applicable law. DemaDose reserves the right to modify pricing or subscription plans at any time.</p>
            </section>

            <section className="terms-section">
              <h2>8. Third-Party Services</h2>
              <p>The Service relies on third-party infrastructure and tools, including but not limited to:</p>
              <ul>
                <li>Amazon Web Services</li>
                <li>Supabase</li>
                <li>Google Analytics</li>
                <li>Expo</li>
                <li>RevenueCat</li>
              </ul>
              <p>These services may process certain information as necessary to support the operation of DemaDose. Use of these services may also be governed by their respective policies.</p>
            </section>

            <section className="terms-section">
              <h2>9. Intellectual Property</h2>
              <p>All rights, title, and interest in the DemaDose platform, including but not limited to:</p>
              <ul>
                <li>software</li>
                <li>source code</li>
                <li>platform architecture</li>
                <li>design</li>
                <li>trademarks</li>
                <li>branding</li>
                <li>documentation</li>
              </ul>
              <p>are owned by DemaDose or its licensors.</p>
              <p>Users may not:</p>
              <ul>
                <li>copy</li>
                <li>reproduce</li>
                <li>reverse engineer</li>
                <li>distribute</li>
                <li>resell</li>
              </ul>
              <p>any part of the platform without prior written permission.</p>
            </section>

            <section className="terms-section">
              <h2>10. Service Availability</h2>
              <p>DemaDose strives to provide reliable service but does not guarantee uninterrupted availability. The Service may occasionally be unavailable due to:</p>
              <ul>
                <li>maintenance</li>
                <li>updates</li>
                <li>infrastructure issues</li>
                <li>technical failures</li>
                <li>third-party service outages</li>
              </ul>
              <p>DemaDose may modify or discontinue parts of the Service at any time.</p>
            </section>

            <section className="terms-section">
              <h2>11. Account Suspension or Termination</h2>
              <p>DemaDose reserves the right to suspend or terminate accounts that:</p>
              <ul>
                <li>violate these Terms</li>
                <li>engage in illegal activities</li>
                <li>abuse the platform</li>
                <li>attempt to compromise platform security</li>
              </ul>
              <p>In cases of serious violations, accounts may be terminated without prior notice. Users may also delete their accounts at any time through the platform.</p>
              <p>Upon account deletion:</p>
              <ul>
                <li>access to the platform will be removed</li>
                <li>backend services supporting created applications may become unavailable.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>12. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, DemaDose shall not be liable for any indirect, incidental, or consequential damages arising from the use of the Service. This includes but is not limited to:</p>
              <ul>
                <li>loss of business revenue</li>
                <li>loss of data</li>
                <li>loss of customers</li>
                <li>service interruptions</li>
                <li>issues related to applications created using the platform.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>13. Indemnification</h2>
              <p>You agree to indemnify and hold harmless DemaDose and its affiliates from any claims, damages, liabilities, or expenses arising from:</p>
              <ul>
                <li>your use of the Service</li>
                <li>your violation of these Terms</li>
                <li>content you upload to the platform</li>
                <li>applications you create using the platform.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>14. Dispute Resolution</h2>
              <p>Any dispute arising from or relating to these Terms or the Service shall be resolved through binding arbitration, rather than court litigation. Arbitration will be conducted on an individual basis.</p>
              <p>You agree that:</p>
              <ul>
                <li>disputes will not be resolved through class actions</li>
                <li>you waive the right to participate in class-action lawsuits against DemaDose.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>15. Governing Law</h2>
              <p>These Terms shall be governed by and interpreted in accordance with the laws of the State of Delaware, United States, without regard to conflict-of-law principles.</p>
            </section>

            <section className="terms-section">
              <h2>16. Changes to These Terms</h2>
              <p>DemaDose may update these Terms from time to time. If significant changes are made, users may be notified through:</p>
              <ul>
                <li>email notifications</li>
                <li>platform notifications</li>
                <li>updates posted on our website.</li>
              </ul>
              <p>Continued use of the Service after updates constitutes acceptance of the revised Terms.</p>
            </section>

            <section className="terms-section terms-contact">
              <h2>17. Contact Information</h2>
              <p>If you have questions about these Terms, you may contact us at:</p>
              <ul className="terms-contact-list">
                <li><strong>Email:</strong> <a href="mailto:business.lamero@gmail.com">business.lamero@gmail.com</a></li>
                <li><strong>Website:</strong> <a href="https://www.demadose.com/" target="_blank" rel="noopener noreferrer">demadose.com</a></li>
                <li><strong>Location:</strong> Amman, Jordan</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
