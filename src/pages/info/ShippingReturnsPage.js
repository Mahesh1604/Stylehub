import React from 'react';
import { Container, Row, Col, Card, Table, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndo, faMapMarkerAlt, faClock, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ShippingReturnsPage = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-2">Shipping & Returns</h1>
      <p className="text-center text-muted mb-5">
        Everything you need to know about our shipping policies and return process
      </p>

      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <Card className="h-100 shadow-sm border-0 rounded-lg">
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">
                <FontAwesomeIcon icon={faShippingFast} className="me-2" /> Shipping Information
              </h4>
            </Card.Header>
            <Card.Body className="p-4">
              <h5>Shipping Methods & Timeframes</h5>
              <Table responsive className="mt-3 mb-4">
                <thead className="table-light">
                  <tr>
                    <th>Method</th>
                    <th>Estimated Time</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Standard Shipping</td>
                    <td>5-7 business days</td>
                    <td>$5.99 (Free on orders over $100)</td>
                  </tr>
                  <tr>
                    <td>Express Shipping</td>
                    <td>2-3 business days</td>
                    <td>$12.99</td>
                  </tr>
                  <tr>
                    <td>Next-Day Shipping</td>
                    <td>1 business day*</td>
                    <td>$19.99</td>
                  </tr>
                  <tr>
                    <td>International Shipping</td>
                    <td>7-14 business days</td>
                    <td>$24.99+</td>
                  </tr>
                </tbody>
              </Table>
              <p className="text-muted small">*Orders must be placed before 12 PM EST for next-day delivery.</p>

              <h5 className="mt-4">Shipping Policies</h5>
              <ul className="mb-4">
                <li>Orders are processed within 1-2 business days.</li>
                <li>Shipping times begin once your order has been processed.</li>
                <li>We ship to all 50 U.S. states and most international destinations.</li>
                <li>Free standard shipping applies to U.S. orders over $100.</li>
                <li>Business days are Monday-Friday, excluding holidays.</li>
                <li>You will receive a shipping confirmation email with tracking information once your order ships.</li>
              </ul>

              <h5 className="mt-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> 
                International Shipping
              </h5>
              <p>
                We're proud to ship to customers worldwide. Please note that international orders may be subject to import duties, taxes, and customs fees, which are the responsibility of the recipient. Delivery times may vary due to customs processing.
              </p>

              <h5 className="mt-4">
                <FontAwesomeIcon icon={faClock} className="me-2" /> 
                Order Tracking
              </h5>
              <p>
                You can track your order status at any time by:
              </p>
              <ul>
                <li>Logging into your StyleHub account and viewing "My Orders"</li>
                <li>Using our <a href="/track-order">Order Tracking</a> page</li>
                <li>Clicking the tracking link in your shipping confirmation email</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={6}>
          <Card className="h-100 shadow-sm border-0 rounded-lg">
            <Card.Header className="bg-info text-white">
              <h4 className="mb-0">
                <FontAwesomeIcon icon={faUndo} className="me-2" /> Returns & Exchanges
              </h4>
            </Card.Header>
            <Card.Body className="p-4">
              <h5>Return Policy Overview</h5>
              <p>We want you to love your StyleHub purchases. If you're not completely satisfied, we offer a hassle-free return policy:</p>
              <ul className="mb-4">
                <li>30-day return window from the delivery date</li>
                <li>Items must be unworn, unwashed, and with original tags attached</li>
                <li>Original receipt or proof of purchase required</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Gift returns will be issued as store credit</li>
              </ul>

              <h5 className="mt-4">How to Return an Item</h5>
              <Accordion className="mb-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Online Returns</Accordion.Header>
                  <Accordion.Body>
                    <ol>
                      <li>Log in to your StyleHub account</li>
                      <li>Go to "My Orders" and select the order with items to return</li>
                      <li>Click "Return Items" and follow the instructions</li>
                      <li>Print the prepaid return shipping label</li>
                      <li>Package your items securely with all tags attached</li>
                      <li>Drop off the package at any authorized shipping location</li>
                    </ol>
                    <p>You can track the status of your return through your account.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Returns Without an Account</Accordion.Header>
                  <Accordion.Body>
                    <p>If you checked out as a guest:</p>
                    <ol>
                      <li>Visit our <a href="/track-order">Order Tracking</a> page</li>
                      <li>Enter your order number and email address</li>
                      <li>Select "Return Items" and follow the instructions</li>
                      <li>Print the prepaid return shipping label</li>
                      <li>Package your items securely with all tags attached</li>
                      <li>Drop off the package at any authorized shipping location</li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <h5 className="mt-4">Exchanges</h5>
              <p>
                For exchanges, we recommend returning your item for a refund and placing a new order for the desired size or color. This ensures the fastest processing time and guarantees that your preferred item is still in stock.
              </p>

              <h5 className="mt-4">Refund Processing</h5>
              <p>
                Refunds are processed within 3-5 business days after we receive your return. The time it takes for the refund to appear in your account depends on your payment method:
              </p>
              <ul>
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                <li><strong>PayPal:</strong> 2-3 business days</li>
                <li><strong>Store Credit:</strong> Immediately available</li>
              </ul>

              <div className="alert alert-warning mt-4">
                <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                <strong>Final Sale Items</strong>
                <p className="mb-0 mt-1">
                  Please note that certain items marked as "Final Sale" cannot be returned or exchanged. These items will be clearly marked on the product page.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Card className="shadow-sm border-0 rounded-lg mb-5">
        <Card.Body className="p-4">
          <h5 className="mb-3">Frequently Asked Questions</h5>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Do you offer free shipping?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer free standard shipping on all U.S. orders over $100. International orders and expedited shipping methods have additional costs as detailed in our shipping table.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What if my item arrives damaged?</Accordion.Header>
              <Accordion.Body>
                If your item arrives damaged, please contact our customer service team within 48 hours of delivery. Take photos of the damaged item and packaging and email them to support@stylehub.com. We'll provide instructions for returning the damaged item and sending a replacement.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Can I change my shipping address after placing an order?</Accordion.Header>
              <Accordion.Body>
                You can change your shipping address as long as your order hasn't entered the fulfillment process. Log in to your account, go to "My Orders," select the order you want to modify, and click "Change Shipping Address." If this option is not available, please contact our customer service team immediately.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Are return shipping costs covered?</Accordion.Header>
              <Accordion.Body>
                Yes, we provide prepaid return shipping labels for all U.S. returns. International customers are responsible for return shipping costs, except in cases of damaged or incorrect items.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>What if I received the wrong item?</Accordion.Header>
              <Accordion.Body>
                If you received an incorrect item, please contact our customer service team immediately. We'll arrange for the return of the incorrect item and expedite shipping for the correct item at no additional cost.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
      
      <div className="text-center">
        <h5>Still have questions about shipping or returns?</h5>
        <p>Our customer service team is ready to assist you!</p>
        <a href="/contact" className="btn btn-primary mt-2">Contact Us</a>
      </div>
    </Container>
  );
};

export default ShippingReturnsPage;
