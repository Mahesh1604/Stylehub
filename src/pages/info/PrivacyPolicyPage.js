import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicyPage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="text-center mb-2">Privacy Policy</h1>
          <p className="text-center text-muted mb-5">
            Last Updated: May 15, 2025
          </p>

          <Card className="shadow-sm border-0 rounded-lg mb-5">
            <Card.Body className="p-4">
              <section className="mb-5">
                <h4>Introduction</h4>
                <p>
                  At StyleHub ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or make purchases from our stores.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy.
                </p>
              </section>

              <section className="mb-5">
                <h4>Information We Collect</h4>
                <p>We may collect the following types of information:</p>
                
                <h5 className="mt-4">Personal Information</h5>
                <ul>
                  <li>Name, email address, postal address, phone number</li>
                  <li>Billing information and payment details</li>
                  <li>Username and password</li>
                  <li>Order history and preferences</li>
                  <li>Date of birth (if provided)</li>
                  <li>Other information you choose to provide</li>
                </ul>
                
                <h5 className="mt-4">Technical Information</h5>
                <ul>
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Time zone and location information</li>
                  <li>Browsing actions and patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>How We Collect Information</h4>
                <p>We collect information through the following methods:</p>
                
                <h5 className="mt-4">Direct Interactions</h5>
                <p>
                  Information you provide when creating an account, placing an order, completing forms, communicating with us, or participating in surveys or promotions.
                </p>
                
                <h5 className="mt-4">Automated Technologies</h5>
                <p>
                  Information collected automatically through cookies, web beacons, and other tracking technologies when you visit our website or use our app.
                </p>
                
                <h5 className="mt-4">Third Parties</h5>
                <p>
                  Information we may receive from business partners, advertising networks, analytics providers, and social media platforms.
                </p>
              </section>

              <section className="mb-5">
                <h4>How We Use Your Information</h4>
                <p>We may use your information for the following purposes:</p>
                <ul>
                  <li>Process and fulfill your orders, including payment processing and delivery</li>
                  <li>Create and manage your account</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send transactional emails regarding your orders or other services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website, products, and services</li>
                  <li>Conduct research and analysis to understand our customers better</li>
                  <li>Prevent fraudulent transactions and monitor against theft</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>Disclosure of Your Information</h4>
                <p>We may share your information with the following parties:</p>
                <ul>
                  <li><strong>Service Providers:</strong> Third parties that perform services on our behalf, such as payment processing, shipping, data analysis, email delivery, and customer service.</li>
                  <li><strong>Business Partners:</strong> Third parties with whom we partner for joint promotional activities, co-branded offers, or marketing initiatives.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process, to protect our rights, or to protect the safety of our customers or others.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties for monetary compensation.
                </p>
              </section>

              <section className="mb-5">
                <h4>Cookies and Tracking Technologies</h4>
                <p>
                  We use cookies, web beacons, and similar technologies to enhance your experience, gather information about users and visits to our website, and improve our services. You can control cookies through your browser settings and other tools. However, if you block certain cookies, you may not be able to use some features of our website.
                </p>
              </section>

              <section className="mb-5">
                <h4>Data Security</h4>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-5">
                <h4>Your Rights</h4>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                </p>
              </section>

              <section className="mb-5">
                <h4>Children's Privacy</h4>
                <p>
                  Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-5">
                <h4>International Data Transfers</h4>
                <p>
                  Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information when transferred internationally.
                </p>
              </section>

              <section className="mb-5">
                <h4>Changes to This Privacy Policy</h4>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the updated policy on our website with a revised "Last Updated" date. We encourage you to review this policy regularly.
                </p>
              </section>

              <section>
                <h4>Contact Us</h4>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@stylehub.com<br />
                  <strong>Phone:</strong> 1-800-123-4567<br />
                  <strong>Mail:</strong> StyleHub Privacy Office, 123 Fashion Street, New York, NY 10001
                </p>
              </section>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicyPage;
