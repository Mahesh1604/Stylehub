import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faHeart as faHeartSolid, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { getImageWithFallback, getPlaceholderByCategory } from '../../utils/imageUtils';

const ProductCard = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(getImageWithFallback(product.image, product.name));
  const { id, name, price, image, rating, category, season } = product;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const inWishlist = isInWishlist(id);
  
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: product.sizes[0], // Default to first size
      selectedColor: product.colors[0], // Default to first color
    });
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

  return (
    <Card className="h-100 product-card shadow hover-effect" style={{ borderRadius: '12px', transition: 'all 0.3s ease' }}>
      <div className="position-relative">
        <Link to={`/product/${id}`}>
          <Card.Img 
            variant="top" 
            src={imgSrc} 
            alt={name}
            className="product-image"
            style={{ height: '250px', objectFit: 'cover' }}
            onError={() => setImgSrc(getPlaceholderByCategory(category, 'product', 300, 400))} 
          />
        </Link>
        <div className="position-absolute top-0 start-0 m-2">
          <div className="d-flex flex-column gap-1">
            <Badge bg="primary" pill className="px-3 py-2 text-white">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
            <Badge 
              bg={season === 'summer' ? 'warning' : 'info'} 
              pill 
              className="px-3 py-2 text-white">
              {season.charAt(0).toUpperCase() + season.slice(1)}
            </Badge>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 m-2">
          <Button 
            variant="light" 
            size="sm" 
            className="rounded-circle p-2 shadow-sm"
            onClick={handleWishlistToggle}
          >
            <FontAwesomeIcon 
              icon={inWishlist ? faHeartSolid : faHeartRegular} 
              className={inWishlist ? 'text-danger' : ''} 
            />
          </Button>
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h5" className="mb-1">
          <Link 
            to={`/product/${id}`}
            className="text-decoration-none text-dark product-title"
          >
            {name}
          </Link>
        </Card.Title>
        
        <div className="mb-2">
          {renderRating(rating)}
          <small className="ms-1 text-muted">({rating})</small>
        </div>
        
        <Card.Text className="fw-bold mb-3 fs-5">
          ${price.toFixed(2)}
        </Card.Text>
        
        <div className="mt-auto d-flex gap-2">
          <Link to={`/product/${id}`} className="text-decoration-none flex-grow-1">
            <Button variant="outline-primary" className="w-100">
              View Details
            </Button>
          </Link>
          <Button 
            variant="primary" 
            className="flex-shrink-0"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
