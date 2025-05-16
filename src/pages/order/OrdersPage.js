import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Badge, Button, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileDownload, faUndoAlt, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  
  // Mock data for orders - in a real app, this would come from an API
  const orders = {
    active: [
      {
        id: 'ORD-2025-1234',
        date: 'May 10, 2025',
        total: 84.97,
        status: 'Processing',
        items: 3,
        statusCode: 'processing',
        estimatedDelivery: 'May 17, 2025'
      },
      {
        id: 'ORD-2025-1156',
        date: 'May 5, 2025',
        total: 129.98,
        status: 'Shipped',
        items: 2,
        statusCode: 'shipped',
        estimatedDelivery: 'May 12, 2025'
      }
    ],
    completed: [
      {
        id: 'ORD-2025-0987',
        date: 'April 22, 2025',
        total: 174.95,
        status: 'Delivered',
        items: 4,
        statusCode: 'delivered',
        deliveryDate: 'April 28, 2025'
      },
      {
        id: 'ORD-2025-0875',
        date: 'April 10, 2025',
        total: 59.99,
        status: 'Delivered',
        items: 1,
        statusCode: 'delivered',
        deliveryDate: 'April 17, 2025'
      },
      {
        id: 'ORD-2025-0756',
        date: 'March 28, 2025',
        total: 145.97,
        status: 'Delivered',
        items: 3,
        statusCode: 'delivered',
        deliveryDate: 'April 4, 2025'
      }
    ],
    cancelled: [
      {
        id: 'ORD-2025-0654',
        date: 'March 15, 2025',
        total: 89.99,
        status: 'Cancelled',
        items: 2,
        statusCode: 'cancelled',
        cancellationDate: 'March 16, 2025',
        reason: 'Customer request'
      }
    ]
  };

  const getStatusBadge = (statusCode) => {
    let variant;
    switch(statusCode) {
      case 'processing':
        variant = 'info';
        break;
      case 'shipped':
        variant = 'primary';
        break;
      case 'delivered':
        variant = 'success';
        break;
      case 'cancelled':
        variant = 'danger';
        break;
      default:
        variant = 'secondary';
    }
    return <Badge bg={variant} className="px-3 py-2">{statusCode.charAt(0).toUpperCase() + statusCode.slice(1)}</Badge>;
  };

  const renderOrdersTable = (ordersList) => {
    if (ordersList.length === 0) {
      return (
        <div className="text-center py-5">
          <FontAwesomeIcon icon={faBoxOpen} size="3x" className="text-muted mb-3" />
          <h5>No orders found</h5>
          <p className="text-muted">
            {activeTab === 'active' ? "You don't have any active orders." :
             activeTab === 'completed' ? "You haven't completed any orders yet." :
             "You don't have any cancelled orders."}
          </p>
          {(activeTab === 'completed' || activeTab === 'cancelled') && (
            <Link to="/products">
              <Button variant="primary">Start Shopping</Button>
            </Link>
          )}
        </div>
      );
    }

    return (
      <Table responsive className="table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th className="text-center">Items</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ordersList.map(order => (
            <tr key={order.id}>
              <td>
                <Link to={`/orders/${order.id}`} className="text-decoration-none fw-bold">
                  {order.id}
                </Link>
              </td>
              <td>{order.date}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{getStatusBadge(order.statusCode)}</td>
              <td className="text-center">{order.items}</td>
              <td>
                <div className="d-flex justify-content-end gap-2">
                  <Link to={`/orders/${order.id}`}>
                    <Button variant="outline-primary" size="sm">
                      <FontAwesomeIcon icon={faEye} /> View
                    </Button>
                  </Link>
                  
                  {order.statusCode === 'delivered' && (
                    <Button variant="outline-secondary" size="sm">
                      <FontAwesomeIcon icon={faFileDownload} /> Invoice
                    </Button>
                  )}
                  
                  {(order.statusCode === 'delivered') && (
                    <Link to={`/orders/${order.id}/return`}>
                      <Button variant="outline-danger" size="sm">
                        <FontAwesomeIcon icon={faUndoAlt} /> Return
                      </Button>
                    </Link>
                  )}
                  
                  {(order.statusCode === 'shipped' || order.statusCode === 'processing') && (
                    <Link to={`/track-order?orderId=${order.id}`}>
                      <Button variant="outline-info" size="sm">
                        Track
                      </Button>
                    </Link>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">My Orders</h1>
      
      <Card className="shadow-sm border-0 rounded-lg">
        <Card.Body className="p-0">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-0 order-tabs"
          >
            <Tab eventKey="active" title="Active Orders">
              <div className="p-4">
                <p className="text-muted mb-4">
                  Track your current orders and view estimated delivery dates.
                </p>
                {renderOrdersTable(orders.active)}
              </div>
            </Tab>
            <Tab eventKey="completed" title="Completed Orders">
              <div className="p-4">
                <p className="text-muted mb-4">
                  View your order history and download invoices for completed orders.
                </p>
                {renderOrdersTable(orders.completed)}
              </div>
            </Tab>
            <Tab eventKey="cancelled" title="Cancelled Orders">
              <div className="p-4">
                <p className="text-muted mb-4">
                  View orders that have been cancelled.
                </p>
                {renderOrdersTable(orders.cancelled)}
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
      
      <Row className="mt-5">
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm border-0 rounded-lg">
            <Card.Body className="p-4">
              <h5>Need Help With An Order?</h5>
              <p>
                Our customer service team is here to help you with any questions 
                or issues regarding your orders.
              </p>
              <Link to="/contact">
                <Button variant="outline-primary">Contact Support</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 rounded-lg">
            <Card.Body className="p-4">
              <h5>Returns & Exchanges</h5>
              <p>
                Need to return or exchange an item? View our policy and 
                start the return process.
              </p>
              <Link to="/shipping-returns">
                <Button variant="outline-primary">Return Policy</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersPage;
