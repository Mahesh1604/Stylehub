import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Alert, Breadcrumb } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { useCart } from '../../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Form states
  const [validated, setValidated] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  // Calculate shipping cost (free over $100)
  const shippingCost = totalAmount > 100 ? 0 : 10;
  
  // Calculate tax (assumed 8%)
  const taxRate = 0.08;
  const taxAmount = totalAmount * taxRate;
  
  // Calculate order total
  const orderTotal = totalAmount + shippingCost + taxAmount;

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      
      // Redirect to confirmation page after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  // If cart is empty, redirect to cart page
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <Container className="py-5 text-center">
        <h2>Your cart is empty</h2>
        <p>Please add some items to your cart before proceeding to checkout.</p>
        <Link to="/products">
          <Button variant="primary">Continue Shopping</Button>
        </Link>
      </Container>
    );
  }

  // If order is placed successfully
  if (orderPlaced) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="success" className="p-5">
          <h2 className="mb-4">Order Placed Successfully!</h2>
          <p className="mb-4">Thank you for your purchase. Your order has been received and is being processed.</p>
          <p>You will be redirected to the homepage shortly...</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/cart' }}>
          Cart
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="mb-4">Checkout</h1>

      <Row>
        {/* Checkout Form */}
        <Col lg={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Contact Information */}
            <Card className="mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0">Contact Information</h5>
              </Card.Header>
              <Card.Body>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="(123) 456-7890"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Shipping Address */}
            <Card className="mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0">Shipping Address</h5>
              </Card.Header>
              <Card.Body>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="John"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Doe"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1234 Main St"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address2">
                  <Form.Label>Address 2 (Optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apartment, studio, or floor"
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={5}>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a state.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="zip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder="Zip" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a zip code.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Payment Information */}
            <Card className="mb-4">
              <Card.Header className="bg-light">
                <h5 className="mb-0">Payment Method</h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="credit-card"
                    label={
                      <span>
                        <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                        Credit Card
                      </span>
                    }
                    name="paymentMethod"
                    value="credit-card"
                    checked={paymentMethod === 'credit-card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="paypal"
                    label={
                      <span>
                        <FontAwesomeIcon icon={faPaypal} className="me-2" />
                        PayPal
                      </span>
                    }
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="cash"
                    label={
                      <span>
                        <FontAwesomeIcon icon={faMoneyBill} className="me-2" />
                        Cash on Delivery
                      </span>
                    }
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </div>

                {paymentMethod === 'credit-card' && (
                  <div>
                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="cardName">
                          <Form.Label>Name on Card</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="John Doe"
                            required={paymentMethod === 'credit-card'}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide the name on card.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="cardNumber">
                          <Form.Label>Card Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            required={paymentMethod === 'credit-card'}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a card number.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="expiryDate">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="MM/YY"
                            required={paymentMethod === 'credit-card'}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide an expiry date.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="cvv">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="123"
                            required={paymentMethod === 'credit-card'}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a CVV.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}
              </Card.Body>
            </Card>

            {/* Submit Button */}
            <div className="d-grid mb-4">
              <Button variant="primary" size="lg" type="submit">
                <FontAwesomeIcon icon={faLock} className="me-2" />
                Place Order
              </Button>
            </div>
          </Form>
        </Col>

        {/* Order Summary */}
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header className="bg-light">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={`${item.id}-${item.size}-${item.color}`} className="d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">
                        {item.size} | {item.color} | Qty: {item.quantity}
                      </small>
                    </div>
                    <span className="text-muted">${(item.price * item.quantity).toFixed(2)}</span>
                  </ListGroup.Item>
                ))}
                
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Shipping</span>
                  {shippingCost === 0 ? (
                    <span className="text-success">Free</span>
                  ) : (
                    <span>${shippingCost.toFixed(2)}</span>
                  )}
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Tax (8%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Alert variant="info">
            <small>
              By placing your order, you agree to StyleHub's privacy notice and conditions of use.
            </small>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
