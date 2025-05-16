import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image, Breadcrumb, Form, Tabs, Tab, Badge } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faShippingFast, faUndo, faHeart as faHeartSolid, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import products from '../../data/products';
import { getImageWithFallback, getPlaceholderByCategory } from '../../utils/imageUtils';
import ProductList from '../../components/product/ProductList';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  // Check if product is in wishlist
  const inWishlist = isInWishlist(parseInt(id));
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));
  
  // State for product image with fallback
  const [imgSrc, setImgSrc] = useState(product ? getImageWithFallback(product.image, product.name) : '');
  
  // State for selected options
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  
  // Get related products (same category)
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];

  // Set default size and color when product loads
  useEffect(() => {
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setError('Please select size and color');
      return;
    }
    
    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor
    });
    setError('');
    
    // Show success message or redirect to cart
    navigate('/cart');
  };
  
  // Handle toggle wishlist
  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Generate star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className="text-warning" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon 
          key="half-star" 
          icon={faStarHalfAlt} 
          className="text-warning" 
        />
      );
    }

    return stars;
  };

  // If product not found
  if (!product) {
    return (
      <Container className="text-center py-5">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
        <Link to="/products">
          <Button variant="primary">Back to Products</Button>
        </Link>
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
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/products' }}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/products?category=${product.category}` }}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        {/* Product Image */}
        <Col md={6} className="mb-4">
          <Image 
            src={imgSrc} 
            alt={product.name} 
            fluid 
            className="product-detail-image shadow-sm rounded"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            onError={() => setImgSrc(getPlaceholderByCategory(product.category, product.season, 600, 600))} 
          />
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <div className="mb-2">
            <Badge bg="primary" className="me-2 px-3 py-2" pill>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Badge>
            <Badge 
              bg={product.season === 'summer' ? 'warning' : 'info'}
              className="px-3 py-2"
              pill
            >
              {product.season.charAt(0).toUpperCase() + product.season.slice(1)}
            </Badge>
          </div>
          
          <h2 className="mb-2">{product.name}</h2>
          
          <div className="mb-3 d-flex align-items-center">
            <div className="me-2">
              {renderRating(product.rating)}
            </div>
            <span className="text-muted">
              ({product.rating}) - {product.reviews} reviews
            </span>
          </div>
          
          <h3 className="mb-4 text-primary">${product.price.toFixed(2)}</h3>
          
          <p className="mb-4">{product.description}</p>
          
          {/* Size Selection */}
          <Form.Group className="mb-3">
            <Form.Label>Size</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "primary" : "outline-secondary"}
                  className="size-btn"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </Form.Group>
          
          {/* Color Selection */}
          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {product.colors.map(color => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "primary" : "outline-secondary"}
                  className="color-btn"
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </Form.Group>
          
          {/* Quantity Selection */}
          <Form.Group className="mb-4">
            <Form.Label>Quantity</Form.Label>
            <div className="d-flex align-items-center">
              <Button 
                variant="outline-secondary" 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </Button>
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="mx-2 text-center"
                style={{ width: '60px' }}
              />
              <Button 
                variant="outline-secondary" 
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </Form.Group>
          
          {/* Error Message */}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="d-flex gap-2 mb-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="flex-grow-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            
            <Button 
              variant={inWishlist ? "danger" : "outline-danger"} 
              size="lg"
              onClick={handleToggleWishlist}
            >
              <FontAwesomeIcon icon={inWishlist ? faHeartSolid : faHeartRegular} />
            </Button>
          </div>
          
          {/* Shipping Info */}
          <div className="mb-3 d-flex align-items-center">
            <FontAwesomeIcon icon={faShippingFast} className="text-success me-2" />
            <span>Free shipping on orders over $100</span>
          </div>
          
          {/* Return Policy */}
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faUndo} className="text-info me-2" />
            <span>30-day return policy</span>
          </div>
        </Col>
      </Row>

      {/* Product Details Tabs */}
      <Row className="my-5">
        <Col>
          <Tabs defaultActiveKey="details" className="mb-4">
            <Tab eventKey="details" title="Product Details">
              <div className="p-4 bg-light rounded">
                <h4>Product Specifications</h4>
                <p>{product.description}</p>
                <ul>
                  <li><strong>Category:</strong> {product.category}</li>
                  <li><strong>Season:</strong> {product.season}</li>
                  <li><strong>Available Sizes:</strong> {product.sizes.join(', ')}</li>
                  <li><strong>Available Colors:</strong> {product.colors.join(', ')}</li>
                </ul>
              </div>
            </Tab>
            <Tab eventKey="reviews" title={`Reviews (${product.reviews})`}>
              <div className="p-4 bg-light rounded">
                <h4>Customer Reviews</h4>
                <p>Average Rating: {product.rating} out of 5</p>
                <div className="mb-3">
                  {renderRating(product.rating)}
                  <span className="ms-2">Based on {product.reviews} reviews</span>
                </div>
                <div className="alert alert-info">
                  Review details would be displayed here in a real application.
                </div>
              </div>
            </Tab>
            <Tab eventKey="shipping" title="Shipping & Returns">
              <div className="p-4 bg-light rounded">
                <h4>Shipping Information</h4>
                <p>We offer the following shipping options:</p>
                <ul>
                  <li>Standard Shipping (3-5 business days): $10.00</li>
                  <li>Free shipping on orders over $100</li>
                  <li>Express Shipping (1-2 business days): $15.00</li>
                </ul>
                
                <h4 className="mt-4">Return Policy</h4>
                <p>We accept returns within 30 days of purchase. Items must be unworn and in original condition with tags attached.</p>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      {/* Related Products */}
      <div className="my-5">
        <h3 className="mb-4">You May Also Like</h3>
        <ProductList products={relatedProducts} />
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
