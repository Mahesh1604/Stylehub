import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faPinterest 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="text-uppercase mb-4">StyleHub</h5>
            <p>Your one-stop destination for trendy and seasonal clothing for the whole family.</p>
            <div className="d-flex gap-3 social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faPinterest} size="lg" />
              </a>
            </div>
          </Col>

          {/* Shop Links */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="text-uppercase mb-4">Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/products?category=men" className="text-white text-decoration-none">Men's Collection</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?category=women" className="text-white text-decoration-none">Women's Collection</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?category=kids" className="text-white text-decoration-none">Kids' Collection</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?season=summer" className="text-white text-decoration-none">Summer Collection</Link>
              </li>
              <li className="mb-2">
                <Link to="/products?season=winter" className="text-white text-decoration-none">Winter Collection</Link>
              </li>
            </ul>
          </Col>

          {/* Customer Service */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="text-uppercase mb-4">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/faqs" className="text-white text-decoration-none">FAQs</Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping-returns" className="text-white text-decoration-none">Shipping & Returns</Link>
              </li>
              <li className="mb-2">
                <Link to="/size-guide" className="text-white text-decoration-none">Size Guide</Link>
              </li>
              <li className="mb-2">
                <Link to="/track-order" className="text-white text-decoration-none">Track Order</Link>
              </li>
            </ul>
          </Col>

          {/* My Account */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="text-uppercase mb-4">My Account</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/login" className="text-white text-decoration-none">Login</Link>
              </li>
              <li className="mb-2">
                <Link to="/register" className="text-white text-decoration-none">Register</Link>
              </li>
              <li className="mb-2">
                <Link to="/orders" className="text-white text-decoration-none">My Orders</Link>
              </li>
              <li className="mb-2">
                <Link to="/wishlist" className="text-white text-decoration-none">My Wishlist</Link>
              </li>
              <li className="mb-2">
                <Link to="/profile" className="text-white text-decoration-none">My Profile</Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Newsletter */}
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <h5 className="text-uppercase mb-3">Newsletter</h5>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-light"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="text-uppercase mb-3">Download Our App</h5>
            <p>Shop on the go with our mobile app.</p>
            <div className="d-flex gap-2">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Google Play</a>
            </div>
          </Col>
        </Row>
        
        {/* Bottom Footer */}
        <Row className="mt-2 pt-4 border-top">
          <Col md={6} className="text-center text-md-start">
            <p className="small text-muted">
              &copy; {new Date().getFullYear()} StyleHub. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <ul className="list-inline small text-muted mb-0">
              <li className="list-inline-item">
                <Link to="/privacy-policy" className="text-muted text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="list-inline-item mx-2">|</li>
              <li className="list-inline-item">
                <Link to="/shipping-returns" className="text-muted text-decoration-none">Shipping & Returns</Link>
              </li>
              <li className="list-inline-item mx-2">|</li>
              <li className="list-inline-item">
                <Link to="/contact" className="text-muted text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
