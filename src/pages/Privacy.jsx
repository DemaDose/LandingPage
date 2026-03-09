import React from 'react';
import './Privacy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="app">
      <Header />
      <main className="privacy-main">
        <article className="privacy-article">
          <div className="privacy-container">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-effective">Effective Date: March 2026</p>

            <p className="privacy-intro">
              DemaDose (“DemaDose,” “we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you provide when using our platform and services.
            </p>
            <p className="privacy-intro">
              This Privacy Policy explains how we collect, use, store, and disclose information when you use our website, applications, and services.
            </p>
            <p className="privacy-intro">
              DemaDose is a B2B SaaS platform that allows businesses to create and manage mobile applications without writing code.
            </p>
            <p className="privacy-intro">
              By accessing or using DemaDose services, you agree to the practices described in this Privacy Policy.
            </p>

            <section className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>We collect certain information in order to operate our platform and provide our services.</p>

              <h3>1.1 Account Information</h3>
              <p>When you create an account, we may collect:</p>
              <ul>
                <li>Full name</li>
                <li>Username</li>
                <li>Email address</li>
                <li>Password</li>
              </ul>
              <p>Optional information that users may add later includes:</p>
              <ul>
                <li>Phone number</li>
                <li>Profile photo</li>
                <li>Business or company name</li>
                <li>Business contact details</li>
              </ul>
              <p>This information is used to create and manage your account on the DemaDose platform.</p>

              <h3>1.2 Business Application Data</h3>
              <p>DemaDose allows business owners to create and manage mobile applications for their businesses. As part of this functionality, the platform may store information related to:</p>
              <ul>
                <li>Product listings</li>
                <li>Product images</li>
                <li>Business logos</li>
                <li>Customer orders</li>
                <li>Order details and related analytics</li>
              </ul>
              <p>This data helps business owners operate their applications and manage their services.</p>

              <h3>1.3 User-Uploaded Content</h3>
              <p>Users may upload images and other content, including:</p>
              <ul>
                <li>Product images</li>
                <li>Profile pictures</li>
                <li>Business logos</li>
                <li>Other visual content related to their application</li>
              </ul>
              <p>Users are responsible for the content they upload to the platform and must ensure they have the rights or permissions to use that content.</p>

              <h3>1.4 System Logs and Usage Information</h3>
              <p>To maintain and improve the platform, we may collect limited technical information such as:</p>
              <ul>
                <li>Crash logs</li>
                <li>Feature usage information</li>
                <li>System performance data</li>
              </ul>
              <p>This information does not include sensitive personal customer data and is primarily used for system reliability and product improvement.</p>

              <h3>1.5 Permissions</h3>
              <p>Our mobile applications may request access to certain device features, including:</p>
              <ul>
                <li>Photos / Media Library</li>
              </ul>
              <p>This access allows users to upload images for:</p>
              <ul>
                <li>product listings</li>
                <li>profile photos</li>
                <li>business branding</li>
                <li>application design elements</li>
              </ul>
              <p>DemaDose does not access the camera directly, and only accesses media selected by the user.</p>
            </section>

            <section className="privacy-section">
              <h2>2. How We Use Information</h2>
              <p>We use the information we collect to operate, maintain, and improve the DemaDose platform. Specifically, we use information for the following purposes:</p>
              <ul>
                <li>Creating and managing user accounts</li>
                <li>Operating the platform and enabling application creation tools</li>
                <li>Allowing users to upload and manage product images and content</li>
                <li>Providing customer support and verifying account authenticity</li>
                <li>Monitoring platform security and preventing unauthorized access</li>
                <li>Improving product functionality and tracking feature usage</li>
                <li>Processing subscription payments through our payment provider</li>
                <li>Sending important system communications such as: security alerts, system updates, platform announcements, business tips and guidance</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>3. Payment Processing</h2>
              <p>DemaDose does not store or process payment card information directly. Subscription payments are handled by a third-party payment provider: RevenueCat. Payment data is processed according to the privacy policies of the respective payment provider.</p>
            </section>

            <section className="privacy-section">
              <h2>4. Third-Party Services</h2>
              <p>To operate our platform, we use trusted third-party services that may process certain information on our behalf. These services may include:</p>
              <ul>
                <li>Amazon Web Services – cloud hosting and infrastructure</li>
                <li>Supabase – database services</li>
                <li>Google Analytics – usage analytics</li>
                <li>Expo – mobile application development infrastructure</li>
                <li>RevenueCat – subscription and payment processing</li>
              </ul>
              <p>These providers may process data only as necessary to perform services for DemaDose.</p>
            </section>

            <section className="privacy-section">
              <h2>5. Data Sharing and Disclosure</h2>
              <p>DemaDose does not sell personal data. We may share information only in limited situations:</p>
              <ul>
                <li>with service providers that support our platform infrastructure</li>
                <li>when required by law or legal process</li>
                <li>to protect the rights, safety, or property of DemaDose or its users</li>
                <li>in connection with a business transfer such as a merger or acquisition</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>6. Data Retention</h2>
              <p>We retain user information until the user deletes their account. If an account is deleted:</p>
              <ul>
                <li>personal data is removed from our active systems</li>
                <li>data may remain temporarily in secure backups before permanent deletion</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>7. Account Deletion</h2>
              <p>Users may delete their accounts through the platform. When an account is deleted:</p>
              <ul>
                <li>the user loses access to the DemaDose platform</li>
                <li>backend services supporting their applications will no longer be accessible</li>
                <li>their applications may become non-functional due to loss of backend connectivity</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>8. User Rights</h2>
              <p>Users have the ability to:</p>
              <ul>
                <li>access their personal information</li>
                <li>correct their account information</li>
                <li>delete their account and associated data</li>
              </ul>
              <p>These actions can typically be performed through the platform.</p>
            </section>

            <section className="privacy-section">
              <h2>9. Security</h2>
              <p>DemaDose takes reasonable measures to protect user information, including:</p>
              <ul>
                <li>encrypted communication using HTTPS</li>
                <li>authentication and account protection systems</li>
                <li>secure cloud infrastructure</li>
              </ul>
              <p>However, no system can guarantee absolute security.</p>
            </section>

            <section className="privacy-section">
              <h2>10. Children’s Privacy</h2>
              <p>DemaDose services are not intended for children under 13 years of age. Our platform is designed for business owners and users aged 13 and older. We do not knowingly collect personal information from children under 13.</p>
            </section>

            <section className="privacy-section">
              <h2>11. International Data Transfers</h2>
              <p>DemaDose may process and store data in multiple countries depending on infrastructure and server availability. Data may be stored or processed in the United States or other countries where our service providers operate. By using the platform, users consent to such data transfers.</p>
            </section>

            <section className="privacy-section">
              <h2>12. Account Suspension or Termination</h2>
              <p>DemaDose reserves the right to suspend or terminate accounts that:</p>
              <ul>
                <li>violate our terms of service</li>
                <li>engage in illegal activity</li>
                <li>abuse or misuse the platform</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>13. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. If significant changes are made, users will be notified through email notice or platform notifications.</p>
            </section>

            <section className="privacy-section privacy-contact">
              <h2>14. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, you may contact us at:</p>
              <ul className="privacy-contact-list">
                <li><strong>Email:</strong> <a href="mailto:business.lamero@gmail.com">business.lamero@gmail.com</a></li>
                <li><strong>Location:</strong> Amman, Jordan</li>
                <li><strong>Website:</strong> <a href="https://www.demadose.com/" target="_blank" rel="noopener noreferrer">demadose.com</a></li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
