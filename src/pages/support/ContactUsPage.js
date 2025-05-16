import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faComment } from '@fortawesome/free-solid-svg-icons';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields');
      return;
    }
    
    // This would normally call an API to submit the contact form
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setError('');
  };
  
  return (
    <Container className="py-5">
      <h1 className="text-center mb-2">Contact Us</h1>
      <p className="text-center text-muted mb-5">
        We're here to help! Reach out to our team for assistance.
      </p>
      
      <Row>
        <Col lg={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0 rounded-lg">
            <Card.Body className="p-4">
              <h4 className="mb-4">Get In Touch</h4>
              
              <div className="contact-info mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3 fa-fw" />
                <div>
                  <h6 className="mb-1">Email Us</h6>
                  <p className="mb-0">
                    <a href="mailto:support@stylehub.com" className="text-decoration-none">support@stylehub.com</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-info mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-primary me-3 fa-fw" />
                <div>
                  <h6 className="mb-1">Call Us</h6>
                  <p className="mb-0">
                    <a href="tel:+18001234567" className="text-decoration-none">1-800-123-4567</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-info mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3 fa-fw" />
                <div>
                  <h6 className="mb-1">Visit Us</h6>
                  <p className="mb-0">
                    StyleHub Headquarters<br />
                    123 Fashion Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="contact-info mb-4">
                <FontAwesomeIcon icon={faClock} className="text-primary me-3 fa-fw" />
                <div>
                  <h6 className="mb-1">Hours</h6>
                  <p className="mb-0">
                    Monday - Friday: 9am - 8pm EST<br />
                    Saturday: 10am - 6pm EST<br />
                    Sunday: 12pm - 5pm EST
                  </p>
                </div>
              </div>
              
              <div className="contact-info">
                <FontAwesomeIcon icon={faComment} className="text-primary me-3 fa-fw" />
                <div>
                  <h6 className="mb-1">Live Chat</h6>
                  <p className="mb-0">
                    Available during business hours.<br />
                    <a href="#" className="text-decoration-none">Start a Chat</a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={8}>
          <Card className="shadow-sm border-0 rounded-lg">
            <Card.Body className="p-4">
              <h4 className="mb-4">Send Us a Message</h4>
              
              {error && <Alert variant="danger">{error}</Alert>}
              
              {!submitted ? (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Order Number (if applicable)</Form.Label>
                        <Form.Control
                          type="text"
                          name="orderNumber"
                          value={formData.orderNumber}
                          onChange={handleChange}
                          placeholder="e.g., ORD-2025-1234"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="Order Status">Order Status</option>
                          <option value="Return Request">Return Request</option>
                          <option value="Product Question">Product Question</option>
                          <option value="Shipping Question">Shipping Question</option>
                          <option value="Website Issue">Website Issue</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" className="mt-3 px-4">
                    Submit Message
                  </Button>
                </Form>
              ) : (
                <Alert variant="success">
                  <h5>Thank you for contacting us!</h5>
                  <p>
                    We've received your message and will get back to you as soon as possible, typically within 24-48 hours.
                  </p>
                  <p className="mb-0">
                    A confirmation has been sent to {formData.email}.
                  </p>
                </Alert>
              )}
            </Card.Body>
          </Card>
          
          <div className="mt-4">
            <Card className="shadow-sm border-0 rounded-lg">
              <Card.Body className="p-4">
                <h5>Frequently Asked Questions</h5>
                <p>
                  Before contacting us, you might find your answer in our comprehensive
                  <a href="/faqs" className="text-decoration-none"> FAQ section</a>.
                </p>
                <p className="mb-0">
                  For information on shipping and returns, please visit our
                  <a href="/shipping-returns" className="text-decoration-none"> Shipping & Returns page</a>.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      
      <div className="mt-5">
        <Card className="shadow-sm border-0 rounded-lg">
          <Card.Body className="p-4">
            <h4 className="mb-4">Our Location</h4>
            {/* This would be a Google Maps embed in a real implementation */}
            <div 
              className="map-container border rounded" 
              style={{
                height: '400px',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div className="text-center text-muted">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="mb-3" />
                <h5>Google Maps Integration</h5>
                <p className="mb-0">Map would be displayed here in production</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ContactUsPage;
