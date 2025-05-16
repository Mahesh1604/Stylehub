import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsOfServicePage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="text-center mb-2">Terms of Service</h1>
          <p className="text-center text-muted mb-5">
            Last Updated: May 15, 2025
          </p>

          <Card className="shadow-sm border-0 rounded-lg mb-5">
            <Card.Body className="p-4">
              <section className="mb-5">
                <h4>Introduction</h4>
                <p>
                  Welcome to StyleHub. These Terms of Service ("Terms") govern your use of our website, mobile application, 
                  and services (collectively, the "Services") operated by StyleHub ("we," "us," or "our").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of 
                  the Terms, you may not access the Services.
                </p>
              </section>

              <section className="mb-5">
                <h4>1. Account Registration</h4>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information at all times. 
                  Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p>
                  You are responsible for safeguarding the password used to access the Services and for any activities or actions 
                  under your password. We encourage you to use a "strong" password (a password that uses a combination of upper and 
                  lower case letters, numbers, and symbols) with your account.
                </p>
              </section>

              <section className="mb-5">
                <h4>2. Products and Pricing</h4>
                <p>
                  All product descriptions, including prices, are subject to change at any time without notice, at our sole discretion. 
                  We reserve the right to discontinue any product at any time.
                </p>
                <p>
                  Prices for our products are subject to change without notice. We shall not be liable to you or to any third party for 
                  any modification, price change, or discontinuance of any product.
                </p>
                <p>
                  We do our best to display as accurately as possible the colors, features, specifications, and details of the products 
                  available on our Services. However, we do not guarantee that the colors, features, specifications, and details will be 
                  accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect 
                  the actual colors and details of the products.
                </p>
              </section>

              <section className="mb-5">
                <h4>3. Ordering and Payment</h4>
                <p>
                  We reserve the right to refuse any order placed through our Services. We may, in our sole discretion, limit or cancel 
                  quantities purchased per person, per household, or per order. These restrictions may include orders placed by the same 
                  customer account, the same credit card, and/or orders that use the same billing and/or shipping address.
                </p>
                <p>
                  We accept the following payment methods:
                </p>
                <ul>
                  <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                  <li>PayPal</li>
                  <li>Apple Pay</li>
                  <li>Google Pay</li>
                </ul>
                <p>
                  All payments are processed securely through our payment partners. We do not store your full credit card information on 
                  our servers.
                </p>
              </section>

              <section className="mb-5">
                <h4>4. Shipping and Delivery</h4>
                <p>
                  We ship to addresses within the United States and to select international destinations. Delivery times may vary depending 
                  on the delivery location and the chosen shipping method. We are not responsible for delays caused by customs, weather, or 
                  other circumstances beyond our control.
                </p>
                <p>
                  For detailed information about shipping methods, costs, and delivery times, please refer to our 
                  <a href="/shipping-returns"> Shipping & Returns</a> page.
                </p>
              </section>

              <section className="mb-5">
                <h4>5. Returns and Refunds</h4>
                <p>
                  We offer a 30-day return policy for most items. To be eligible for a return, your item must be unworn, unwashed, in the original 
                  packaging with tags attached, and returned within 30 days of delivery.
                </p>
                <p>
                  For complete information about our return process and eligibility requirements, please visit our 
                  <a href="/shipping-returns"> Shipping & Returns</a> page.
                </p>
              </section>

              <section className="mb-5">
                <h4>6. Intellectual Property</h4>
                <p>
                  The Services and their original content, features, and functionality are and will remain the exclusive property of StyleHub and 
                  its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of StyleHub.
                </p>
              </section>

              <section className="mb-5">
                <h4>7. User Content</h4>
                <p>
                  Our Services may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, 
                  or other material ("User Content"). You are responsible for the User Content that you post on or through the Services, including 
                  its legality, reliability, and appropriateness.
                </p>
                <p>
                  By posting User Content on or through the Services, you grant us the right to use, modify, publicly perform, publicly display, 
                  reproduce, and distribute such content on and through the Services. You retain any and all of your rights to any User Content 
                  you submit, post, or display on or through the Services and you are responsible for protecting those rights.
                </p>
              </section>

              <section className="mb-5">
                <h4>8. Prohibited Uses</h4>
                <p>
                  You agree not to use the Services:
                </p>
                <ul>
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To impersonate or attempt to impersonate StyleHub, a StyleHub employee, another user, or any other person or entity</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                  <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services</li>
                  <li>To use any robot, spider, or other automatic device, process, or means to access the Services for any purpose</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>9. Termination</h4>
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including 
                  without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply 
                  discontinue using the Services or contact us to request account deletion.
                </p>
              </section>

              <section className="mb-5">
                <h4>10. Limitation of Liability</h4>
                <p>
                  In no event shall StyleHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
                  other intangible losses, resulting from your access to or use of or inability to access or use the Services.
                </p>
              </section>

              <section className="mb-5">
                <h4>11. Disclaimer</h4>
                <p>
                  Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis. The Services are 
                  provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of 
                  merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                </p>
              </section>

              <section className="mb-5">
                <h4>12. Governing Law</h4>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of 
                  law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision 
                  of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </section>

              <section>
                <h4>13. Changes to Terms</h4>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will 
                  try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p>
                  By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms. 
                  If you do not agree to the new terms, please stop using the Services.
                </p>
                <p>
                  If you have any questions about these Terms, please contact us at <a href="mailto:legal@stylehub.com">legal@stylehub.com</a>.
                </p>
              </section>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfServicePage;
