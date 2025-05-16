import React from 'react';
import { Container, Row, Col, Button, Alert, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';

const CartPage = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <FontAwesomeIcon icon={faShoppingBag} size="4x" className="text-muted mb-3" />
          <h3>Your cart is empty</h3>
          <p className="mb-4">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <Row>
          {/* Cart Items */}
          <Col lg={8} className="mb-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Cart Items ({cartItems.length})</h4>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>

              {/* Cart Items List */}
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
                ))}
              </div>

              {/* Continue Shopping Button */}
              <div className="mt-4">
                <Link to="/products" className="text-decoration-none">
                  <Button variant="outline-secondary">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </Col>

          {/* Cart Summary */}
          <Col lg={4}>
            <CartSummary />
          </Col>
        </Row>
      )}

      {/* Shipping Policy */}
      <Alert variant="light" className="mt-4 border">
        <h5>Shipping Policy</h5>
        <p className="mb-0">
          Free shipping on all orders over $100. Standard shipping takes 3-5 business days.
          Express shipping options available at checkout.
        </p>
      </Alert>
    </Container>
  );
};

export default CartPage;
