import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col, ProgressBar, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faBox, faCheckCircle, faTruck, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Simulated order tracking data - in a real app this would come from an API
  const orderStatus = {
    number: 'ORD-2025-1234',
    date: 'May 10, 2025',
    status: 'In Transit',
    estimatedDelivery: 'May 18, 2025',
    statusCode: 2, // 0: Ordered, 1: Packed, 2: Shipped, 3: Out for delivery, 4: Delivered
    statusHistory: [
      { status: 'Order Placed', date: 'May 10, 2025, 14:35', completed: true },
      { status: 'Order Processed', date: 'May 11, 2025, 09:20', completed: true },
      { status: 'Shipped', date: 'May 12, 2025, 16:45', completed: true },
      { status: 'Out for Delivery', date: 'Expected May 17, 2025', completed: false },
      { status: 'Delivered', date: 'Expected May 18, 2025', completed: false }
    ],
    items: [
      { name: 'Men\'s Summer T-Shirt', quantity: 2, price: 19.99 },
      { name: 'Women\'s Knit Sweater', quantity: 1, price: 44.99 }
    ]
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderNumber || !email) {
      setError('Please enter both order number and email');
      return;
    }
    
    // This would normally call an API to fetch order tracking info
    console.log('Tracking order:', orderNumber, email);
    setSubmitted(true);
    setError('');
  };
  
  const getStatusIcon = (statusCode) => {
    switch(statusCode) {
      case 0: return faBox;
      case 1: return faBoxOpen;
      case 2: return faShippingFast;
      case 3: return faTruck;
      case 4: return faCheckCircle;
      default: return faBox;
    }
  };
  
  const getStatusColor = (statusCode) => {
    switch(statusCode) {
      case 0: return 'info';
      case 1: return 'primary';
      case 2: return 'primary';
      case 3: return 'warning';
      case 4: return 'success';
      default: return 'info';
    }
  };
  
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Track Your Order</h1>
      
      {!submitted ? (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0 rounded-lg">
              <Card.Body className="p-4">
                <p className="text-muted mb-4">
                  Enter your order number and the email address used for the order to track your package.
                </p>
                
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Order Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g., ORD-2025-1234"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email used for order"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" className="w-100 py-2 mt-3">
                    Track Order
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-sm border-0 rounded-lg mb-4">
              <Card.Body className="p-4">
                <Row className="align-items-center mb-4">
                  <Col md={6}>
                    <h5 className="mb-1">Order #{orderStatus.number}</h5>
                    <p className="text-muted mb-0">Placed on {orderStatus.date}</p>
                  </Col>
                  <Col md={6} className="text-md-end">
                    <Badge bg={getStatusColor(orderStatus.statusCode)} className="px-3 py-2 fs-6">
                      <FontAwesomeIcon icon={getStatusIcon(orderStatus.statusCode)} className="me-2" />
                      {orderStatus.status}
                    </Badge>
                    <p className="text-muted mt-2 mb-0">
                      Estimated Delivery: {orderStatus.estimatedDelivery}
                    </p>
                  </Col>
                </Row>
                
                <ProgressBar 
                  now={(orderStatus.statusCode + 1) * 25} 
                  variant={getStatusColor(orderStatus.statusCode)} 
                  className="mb-4" 
                  style={{ height: '10px' }}
                />
                
                <Row>
                  {orderStatus.statusHistory.map((step, index) => (
                    <Col key={index} className="text-center position-relative">
                      <div className={`step-icon ${step.completed ? 'completed' : ''}`} style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: step.completed ? '#0d6efd' : '#f8f9fa',
                        border: '2px solid #dee2e6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 10px',
                        color: step.completed ? 'white' : '#6c757d'
                      }}>
                        {index + 1}
                      </div>
                      <p className="step-title fw-bold mb-1" style={{ fontSize: '0.9rem' }}>
                        {step.status}
                      </p>
                      <p className="step-date text-muted" style={{ fontSize: '0.8rem' }}>
                        {step.date}
                      </p>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
            
            <Card className="shadow-sm border-0 rounded-lg">
              <Card.Header className="bg-light">
                <h5 className="mb-0">Order Items</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Item</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-end">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderStatus.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td className="text-end">${item.price.toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr className="table-light">
                        <td colSpan="2" className="text-end fw-bold">Total:</td>
                        <td className="text-end fw-bold">
                          ${orderStatus.items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default TrackOrderPage;
