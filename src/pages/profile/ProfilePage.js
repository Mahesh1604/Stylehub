import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faHeart, faAddressCard, faKey, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

const ProfilePage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  // Mock user data - in a real app, this would come from an API or context
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to an API
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Handle adding to cart from wishlist
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: product.sizes[0], // Default to first size
      selectedColor: product.colors[0], // Default to first color
    });
  };

  // Mock order data
  const orders = [
    { id: '1001', date: '2025-05-10', status: 'Delivered', total: 125.99 },
    { id: '1002', date: '2025-05-01', status: 'Shipped', total: 89.50 },
    { id: '1003', date: '2025-04-22', status: 'Processing', total: 210.75 }
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">My Account</h1>
      
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Your profile has been updated successfully!
        </Alert>
      )}
      
      <Tab.Container id="profile-tabs" defaultActiveKey="profile">
        <Row>
          <Col md={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <div className="text-center mb-4">
                  <div className="rounded-circle bg-light d-inline-flex p-3 mb-3">
                    <FontAwesomeIcon icon={faUser} size="2x" />
                  </div>
                  <h5>{userData.firstName} {userData.lastName}</h5>
                  <p className="text-muted small">{userData.email}</p>
                </div>
                
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="profile">
                      <FontAwesomeIcon icon={faUser} className="me-2" /> Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders">
                      <FontAwesomeIcon icon={faShoppingBag} className="me-2" /> Orders
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="wishlist">
                      <FontAwesomeIcon icon={faHeart} className="me-2" /> Wishlist
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="address">
                      <FontAwesomeIcon icon={faAddressCard} className="me-2" /> Address
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="password">
                      <FontAwesomeIcon icon={faKey} className="me-2" /> Change Password
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={9}>
            <Card className="shadow-sm">
              <Card.Body>
                <Tab.Content>
                  {/* Profile Tab */}
                  <Tab.Pane eventKey="profile">
                    <h4 className="mb-4">Personal Information</h4>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={userData.firstName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={userData.lastName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={userData.email}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={userData.phone}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button variant="primary" type="submit">
                          Save Changes
                        </Button>
                      </div>
                    </Form>
                  </Tab.Pane>
                  
                  {/* Orders Tab */}
                  <Tab.Pane eventKey="orders">
                    <h4 className="mb-4">My Orders</h4>
                    {orders.length > 0 ? (
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Order #</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map(order => (
                              <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>
                                  <span className={`badge bg-${
                                    order.status === 'Delivered' ? 'success' : 
                                    order.status === 'Shipped' ? 'info' : 'warning'
                                  }`}>
                                    {order.status}
                                  </span>
                                </td>
                                <td>${order.total.toFixed(2)}</td>
                                <td>
                                  <Button variant="outline-primary" size="sm">View</Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <Alert variant="info">
                        You haven't placed any orders yet.
                      </Alert>
                    )}
                  </Tab.Pane>
                  
                  {/* Wishlist Tab */}
                  <Tab.Pane eventKey="wishlist">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4>
                        <FontAwesomeIcon icon={faHeart} className="text-danger me-2" />
                        My Wishlist
                      </h4>
                      <Link to="/wishlist" className="btn btn-outline-primary btn-sm">
                        View Full Wishlist
                      </Link>
                    </div>
                    
                    {wishlistItems.length > 0 ? (
                      <Row>
                        {wishlistItems.map(item => (
                          <Col md={4} className="mb-4" key={item.id}>
                            <Card className="h-100 shadow-sm">
                              <div className="position-relative">
                                <Link to={`/product/${item.id}`}>
                                  <Card.Img 
                                    variant="top" 
                                    src={item.image} 
                                    alt={item.name}
                                    style={{ height: '180px', objectFit: 'cover' }}
                                  />
                                </Link>
                                <Button
                                  variant="light"
                                  size="sm"
                                  className="position-absolute top-0 end-0 m-2"
                                  onClick={() => removeFromWishlist(item.id)}
                                >
                                  <FontAwesomeIcon icon={faTrash} className="text-danger" />
                                </Button>
                              </div>
                              <Card.Body className="d-flex flex-column">
                                <Link to={`/product/${item.id}`} className="text-decoration-none">
                                  <Card.Title className="h6">{item.name}</Card.Title>
                                </Link>
                                <Card.Text className="text-muted small mb-2">
                                  {item.category} | {item.season}
                                </Card.Text>
                                <Card.Text className="fw-bold mb-3">
                                  ${item.price.toFixed(2)}
                                </Card.Text>
                                <div className="mt-auto d-grid">
                                  <Button 
                                    variant="primary" 
                                    size="sm"
                                    onClick={() => handleAddToCart(item)}
                                  >
                                    <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                                    Add to Cart
                                  </Button>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      <Alert variant="info">
                        <p className="mb-0">Your wishlist is empty. Browse our products and add items to your wishlist!</p>
                        <div className="mt-3">
                          <Button as={Link} to="/products" variant="primary">
                            Browse Products
                          </Button>
                        </div>
                      </Alert>
                    )}
                  </Tab.Pane>
                  
                  {/* Address Tab */}
                  <Tab.Pane eventKey="address">
                    <h4 className="mb-4">My Address</h4>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={userData.address}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              name="city"
                              value={userData.city}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              type="text"
                              name="state"
                              value={userData.state}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                              type="text"
                              name="zipCode"
                              value={userData.zipCode}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                              type="text"
                              name="country"
                              value={userData.country}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button variant="primary" type="submit">
                          Save Address
                        </Button>
                      </div>
                    </Form>
                  </Tab.Pane>
                  
                  {/* Change Password Tab */}
                  <Tab.Pane eventKey="password">
                    <h4 className="mb-4">Change Password</h4>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="currentPassword"
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="newPassword"
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                        />
                      </Form.Group>
                      
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button variant="primary" type="submit">
                          Update Password
                        </Button>
                      </div>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ProfilePage;
