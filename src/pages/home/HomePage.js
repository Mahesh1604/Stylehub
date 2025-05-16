import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndo, faHeadset, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import ProductList from '../../components/product/ProductList';
import products from '../../data/products';
import { getImageWithFallback, getPlaceholderByCategory } from '../../utils/imageUtils';

const HomePage = () => {
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);

  return (
    <Container>
      {/* Hero Carousel */}
      <Carousel className="mb-5 rounded shadow" style={{ height: '500px', overflow: 'hidden', borderRadius: '15px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/1200/500?random=1`}
            alt="Summer Collection"
            style={{ height: '500px', objectFit: 'cover', width: '100%' }}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://picsum.photos/1200/500?random=10";
            }}
          />
          <Carousel.Caption className="text-left bg-dark bg-opacity-50 rounded p-3">
            <h2>Summer Collection 2025</h2>
            <p>Beat the heat with our latest summer styles.</p>
            <Link to="/products?season=summer">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/1200/500?random=2`}
            alt="Winter Collection"
            style={{ height: '500px', objectFit: 'cover', width: '100%' }}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://picsum.photos/1200/500?random=20";
            }}
          />
          <Carousel.Caption className="text-left bg-dark bg-opacity-50 rounded p-3">
            <h2>Winter Collection 2025</h2>
            <p>Stay warm and stylish with our winter collection.</p>
            <Link to="/products?season=winter">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/1200/500?random=3`}
            alt="Kids Collection"
            style={{ height: '500px', objectFit: 'cover', width: '100%' }}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://picsum.photos/1200/500?random=30";
            }}
          />
          <Carousel.Caption className="text-left bg-dark bg-opacity-50 rounded p-3">
            <h2>Kids Collection</h2>
            <p>Adorable and comfortable styles for your little ones.</p>
            <Link to="/products?category=kids">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Category Cards */}
      <h2 className="text-center mb-4">Shop By Category</h2>
      <Row className="mb-5 g-4">
        <Col md={4}>
          <Card className="h-100 shadow category-card">
            <Card.Img 
              variant="top" 
              src={`https://picsum.photos/400/300?random=4`}
              alt="Men's Collection"
              style={{ height: '200px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getPlaceholderByCategory('men', 'collection', 400, 300);
              }}
            />
            <Card.Body className="text-center">
              <Card.Title>Men's Collection</Card.Title>
              <Card.Text>
                Explore our range of men's clothing for all seasons.
              </Card.Text>
              <Link to="/products?category=men">
                <Button variant="outline-primary">Shop Men</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow category-card">
            <Card.Img 
              variant="top" 
              src={`https://picsum.photos/400/300?random=5`}
              alt="Women's Collection"
              style={{ height: '200px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getPlaceholderByCategory('women', 'collection', 400, 300);
              }}
            />
            <Card.Body className="text-center">
              <Card.Title>Women's Collection</Card.Title>
              <Card.Text>
                Discover trendy styles for women in our collection.
              </Card.Text>
              <Link to="/products?category=women">
                <Button variant="outline-primary">Shop Women</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow category-card">
            <Card.Img 
              variant="top" 
              src={`https://picsum.photos/400/300?random=6`}
              alt="Kids' Collection"
              style={{ height: '200px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getPlaceholderByCategory('kids', 'collection', 400, 300);
              }}
            />
            <Card.Body className="text-center">
              <Card.Title>Kids' Collection</Card.Title>
              <Card.Text>
                Cute and comfortable clothing for kids of all ages.
              </Card.Text>
              <Link to="/products?category=kids">
                <Button variant="outline-primary">Shop Kids</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Season Cards */}
      <h2 className="text-center mb-4">Shop By Season</h2>
      <Row className="mb-5 g-4">
        <Col md={6}>
          <Card className="shadow season-card">
            <Card.Img 
              variant="top" 
              src={`https://picsum.photos/600/300?random=7`}
              alt="Summer Collection"
              style={{ height: '250px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getPlaceholderByCategory('summer', 'season', 600, 300);
              }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="bg-light bg-opacity-75 p-3 rounded">
                <Card.Title>Summer Collection</Card.Title>
                <Card.Text>
                  Light and breathable clothing for hot summer days.
                </Card.Text>
                <Link to="/products?season=summer">
                  <Button variant="primary">Shop Summer</Button>
                </Link>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow season-card">
            <Card.Img 
              variant="top" 
              src={`https://picsum.photos/600/300?random=8`}
              alt="Winter Collection"
              style={{ height: '250px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getPlaceholderByCategory('winter', 'season', 600, 300);
              }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="bg-light bg-opacity-75 p-3 rounded">
                <Card.Title>Winter Collection</Card.Title>
                <Card.Text>
                  Warm and cozy clothing for cold winter months.
                </Card.Text>
                <Link to="/products?season=winter">
                  <Button variant="primary">Shop Winter</Button>
                </Link>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Featured Products */}
      <h2 className="text-center mb-4">Featured Products</h2>
      <ProductList products={featuredProducts} />

      {/* Features Section */}
      <Row className="my-5 py-4 text-center features-section">
        <Col md={3} sm={6} className="mb-4">
          <div className="feature-icon mb-3">
            <FontAwesomeIcon icon={faShippingFast} size="2x" className="text-primary" />
          </div>
          <h5>Free Shipping</h5>
          <p className="text-muted">On orders over $100</p>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <div className="feature-icon mb-3">
            <FontAwesomeIcon icon={faUndo} size="2x" className="text-primary" />
          </div>
          <h5>Easy Returns</h5>
          <p className="text-muted">30 days return policy</p>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <div className="feature-icon mb-3">
            <FontAwesomeIcon icon={faHeadset} size="2x" className="text-primary" />
          </div>
          <h5>24/7 Support</h5>
          <p className="text-muted">Customer support</p>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <div className="feature-icon mb-3">
            <FontAwesomeIcon icon={faCreditCard} size="2x" className="text-primary" />
          </div>
          <h5>Secure Payment</h5>
          <p className="text-muted">100% secure checkout</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
