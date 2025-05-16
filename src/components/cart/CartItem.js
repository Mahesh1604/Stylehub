import React from 'react';
import { Row, Col, Button, Form, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { id, name, price, image, quantity, size, color } = item;
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity, size, color);
    }
  };

  const handleRemove = () => {
    removeFromCart(id, size, color);
  };

  return (
    <Row className="cart-item align-items-center py-3 border-bottom">
      {/* Product Image */}
      <Col xs={3} md={2}>
        <Image src={image} alt={name} fluid rounded className="cart-item-image" />
      </Col>
      
      {/* Product Details */}
      <Col xs={9} md={4}>
        <h5 className="mb-1">{name}</h5>
        <div className="text-muted small mb-1">
          Size: {size} | Color: {color}
        </div>
        <div className="fw-bold">${price.toFixed(2)}</div>
      </Col>
      
      {/* Quantity */}
      <Col xs={6} md={3} className="mt-3 mt-md-0">
        <Form.Control
          as="select"
          value={quantity}
          onChange={handleQuantityChange}
          className="form-select-sm"
        >
          {[...Array(10).keys()].map(num => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </Form.Control>
      </Col>
      
      {/* Subtotal */}
      <Col xs={4} md={2} className="text-end mt-3 mt-md-0">
        <span className="fw-bold">
          ${(price * quantity).toFixed(2)}
        </span>
      </Col>
      
      {/* Remove Button */}
      <Col xs={2} md={1} className="text-end mt-3 mt-md-0">
        <Button 
          variant="link" 
          className="text-danger p-0" 
          onClick={handleRemove}
          aria-label="Remove item"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
