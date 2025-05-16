import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: product.sizes[0], // Default to first size
      selectedColor: product.colors[0], // Default to first color
    });
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>
          <FontAwesomeIcon icon={faHeart} className="text-danger me-2" />
          My Wishlist
        </h1>
        {wishlistItems.length > 0 && (
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={clearWishlist}
          >
            Clear Wishlist
          </Button>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-5">
          <Alert variant="info">
            <h4>Your wishlist is empty</h4>
            <p className="mb-0">Browse our products and add items to your wishlist!</p>
            <div className="mt-3">
              <Button as={Link} to="/products" variant="primary">
                Continue Shopping
              </Button>
            </div>
          </Alert>
        </div>
      ) : (
        <>
          <p className="text-muted mb-4">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
          </p>
          
          <Row>
            {wishlistItems.map((item) => (
              <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 product-card shadow-sm">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      alt={item.name}
                      className="product-image"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
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
                    <Card.Title className="product-title">{item.name}</Card.Title>
                    <Card.Text className="text-muted mb-2">
                      {item.category} | {item.season}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="fw-bold">${item.price.toFixed(2)}</span>
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
                  <Card.Footer className="bg-white">
                    <small className="text-muted">
                      <Link to={`/product/${item.id}`} className="text-decoration-none">
                        View Details
                      </Link>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-4">
            <Button as={Link} to="/products" variant="outline-primary" className="me-2">
              Continue Shopping
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default WishlistPage;
