import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const FAQsPage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="text-center mb-2">Frequently Asked Questions</h1>
          <p className="text-center text-muted mb-5">
            Find answers to the most common questions about StyleHub products and services
          </p>

          <Card className="shadow-sm border-0 rounded-lg mb-5">
            <Card.Body className="p-4">
              <h4 className="border-bottom pb-2 mb-4">Orders & Shipping</h4>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do I place an order?</Accordion.Header>
                  <Accordion.Body>
                    <p>Placing an order on StyleHub is easy:</p>
                    <ol>
                      <li>Browse our products and add items to your cart</li>
                      <li>Click on the cart icon when you're ready to checkout</li>
                      <li>Sign in to your account or continue as a guest</li>
                      <li>Enter your shipping information and select a shipping method</li>
                      <li>Enter your payment information</li>
                      <li>Review your order and click "Place Order"</li>
                    </ol>
                    <p>You'll receive an order confirmation email with your order details.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                  <Accordion.Body>
                    <p>We accept the following payment methods:</p>
                    <ul>
                      <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                      <li>PayPal</li>
                      <li>Apple Pay</li>
                      <li>Google Pay</li>
                      <li>Shop Pay</li>
                    </ul>
                    <p>All payments are processed securely through our payment partners.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How long will it take to receive my order?</Accordion.Header>
                  <Accordion.Body>
                    <p>Delivery times depend on your location and the shipping method you choose:</p>
                    <ul>
                      <li><strong>Standard Shipping:</strong> 5-7 business days</li>
                      <li><strong>Express Shipping:</strong> 2-3 business days</li>
                      <li><strong>Next-Day Shipping:</strong> 1 business day (order must be placed before 12 PM EST)</li>
                    </ul>
                    <p>International shipping typically takes 7-14 business days, depending on the destination country.</p>
                    <p>You can track your order anytime through your account or via the "Track Order" page.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Is free shipping available?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes! We offer free standard shipping on all orders over $100 within the United States. </p>
                    <p>We also run promotional periods with free shipping on all orders, regardless of order value. Sign up for our newsletter to stay informed about our promotions.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <h4 className="border-bottom pb-2 mb-4 mt-5">Returns & Exchanges</h4>
              <Accordion flush>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>What is your return policy?</Accordion.Header>
                  <Accordion.Body>
                    <p>We offer a 30-day return policy for most items. To be eligible for a return, your item must be:</p>
                    <ul>
                      <li>Unworn and unwashed</li>
                      <li>In the original packaging with tags attached</li>
                      <li>Returned within 30 days of delivery</li>
                    </ul>
                    <p>For more detailed information, please visit our <a href="/shipping-returns">Shipping & Returns</a> page.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>How do I return or exchange an item?</Accordion.Header>
                  <Accordion.Body>
                    <p>To return or exchange an item:</p>
                    <ol>
                      <li>Log in to your account and navigate to your orders</li>
                      <li>Select the order containing the item you wish to return</li>
                      <li>Click on "Return Items" and follow the instructions</li>
                      <li>Print the return label and attach it to your package</li>
                      <li>Drop off the package at your nearest shipping location</li>
                    </ol>
                    <p>For exchanges, you can select the new size or color during the return process. If you prefer, you can also return the item for a refund and place a new order for the desired item.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>How long do refunds take to process?</Accordion.Header>
                  <Accordion.Body>
                    <p>Refunds are typically processed within 3-5 business days after we receive your return. The time it takes for the refund to appear in your account depends on your payment method:</p>
                    <ul>
                      <li><strong>Credit Cards:</strong> 5-10 business days</li>
                      <li><strong>PayPal:</strong> 2-3 business days</li>
                      <li><strong>Store Credit:</strong> Immediately available</li>
                    </ul>
                    <p>You'll receive an email confirmation once your refund has been processed.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <h4 className="border-bottom pb-2 mb-4 mt-5">Products & Sizing</h4>
              <Accordion flush>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>How do I find the right size?</Accordion.Header>
                  <Accordion.Body>
                    <p>We recommend using our detailed <a href="/size-guide">Size Guide</a> to find the perfect fit. Our size guide includes measurements for all product categories, including men's, women's, and kids' clothing, as well as footwear.</p>
                    <p>If you're between sizes, we generally recommend sizing up for a more comfortable fit.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>Are your products sustainable?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, we are committed to sustainability and ethical manufacturing. Many of our products are made from sustainable materials, including:</p>
                    <ul>
                      <li>Organic cotton</li>
                      <li>Recycled polyester</li>
                      <li>Sustainably sourced wool</li>
                      <li>TENCEL™ fibers</li>
                    </ul>
                    <p>We're continuously working to expand our sustainable product lines and improve our environmental footprint.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>How should I care for my StyleHub clothing?</Accordion.Header>
                  <Accordion.Body>
                    <p>Each garment comes with specific care instructions on its label. Generally, we recommend:</p>
                    <ul>
                      <li>Machine wash in cold water with similar colors</li>
                      <li>Use mild detergent</li>
                      <li>Avoid bleach and fabric softeners</li>
                      <li>Tumble dry on low heat or lay flat to dry</li>
                      <li>Iron on low temperature when needed</li>
                    </ul>
                    <p>Following the care instructions will help extend the life of your clothing and maintain its quality.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <h4 className="border-bottom pb-2 mb-4 mt-5">Account & Technical Issues</h4>
              <Accordion flush>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>I forgot my password. How do I reset it?</Accordion.Header>
                  <Accordion.Body>
                    <p>To reset your password:</p>
                    <ol>
                      <li>Go to the <a href="/login">Login page</a></li>
                      <li>Click on "Forgot Password?"</li>
                      <li>Enter the email address associated with your account</li>
                      <li>Check your email for a password reset link</li>
                      <li>Follow the link to create a new password</li>
                    </ol>
                    <p>If you don't receive the email, please check your spam folder or contact our customer support.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>Can I change my shipping address after placing an order?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, you can change your shipping address as long as your order hasn't entered the fulfillment process yet.</p>
                    <p>To change your shipping address:</p>
                    <ol>
                      <li>Log in to your account</li>
                      <li>Go to "My Orders"</li>
                      <li>Select the order you want to modify</li>
                      <li>Click on "Change Shipping Address"</li>
                    </ol>
                    <p>If this option is not available, it means your order has already started processing. In this case, please contact our customer support team immediately for assistance.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>The website isn't working properly. What should I do?</Accordion.Header>
                  <Accordion.Body>
                    <p>If you're experiencing technical issues on our website, please try these troubleshooting steps:</p>
                    <ol>
                      <li>Clear your browser cache and cookies</li>
                      <li>Try using a different browser</li>
                      <li>Disable browser extensions that might interfere with the site</li>
                      <li>Check your internet connection</li>
                      <li>Try accessing the site from a different device</li>
                    </ol>
                    <p>If the issue persists, please contact our technical support team at <a href="mailto:techsupport@stylehub.com">techsupport@stylehub.com</a> with details about the problem you're experiencing, including screenshots if possible.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>

          <div className="bg-light p-4 rounded-lg text-center">
            <h5>Still have questions?</h5>
            <p className="mb-3">Our customer service team is here to help!</p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQsPage;
