import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartSummary = () => {
  const { totalAmount, totalItems } = useCart();
  
  // Calculate shipping cost (free over $100)
  const shippingCost = totalAmount > 100 ? 0 : 10;
  
  // Calculate tax (assumed 8%)
  const taxRate = 0.08;
  const taxAmount = totalAmount * taxRate;
  
  // Calculate order total
  const orderTotal = totalAmount + shippingCost + taxAmount;

  return (
    <Card className="cart-summary">
      <Card.Header className="bg-primary text-white">
        <h5 className="mb-0">Order Summary</h5>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Subtotal ({totalItems} items)</span>
            <span>${totalAmount.toFixed(2)}</span>
          </ListGroup.Item>
          
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Shipping</span>
            {shippingCost === 0 ? (
              <span className="text-success">Free</span>
            ) : (
              <span>${shippingCost.toFixed(2)}</span>
            )}
          </ListGroup.Item>
          
          <ListGroup.Item className="d-flex justify-content-between">
            <span>Tax (8%)</span>
            <span>${taxAmount.toFixed(2)}</span>
          </ListGroup.Item>
          
          <ListGroup.Item className="d-flex justify-content-between fw-bold">
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </ListGroup.Item>
        </ListGroup>
        
        {totalItems > 0 ? (
          <div className="d-grid gap-2 mt-3">
            <Link to="/checkout" className="text-decoration-none">
              <Button variant="primary" size="lg" className="w-100">
                Proceed to Checkout
              </Button>
            </Link>
            <Link to="/products" className="text-decoration-none">
              <Button variant="outline-secondary" className="w-100">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="d-grid gap-2 mt-3">
            <Link to="/products" className="text-decoration-none">
              <Button variant="primary" className="w-100">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
        
        {totalAmount > 0 && totalAmount < 100 && (
          <div className="mt-3 p-2 bg-light rounded text-center">
            <small>
              Add ${(100 - totalAmount).toFixed(2)} more to qualify for free shipping!
            </small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CartSummary;
