import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faHeart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './Header.css';

const Header = () => {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Determine active nav items
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <Navbar 
      bg={scrolled ? "white" : "light"} 
      expand="lg" 
      className={`site-navbar ${scrolled ? 'shadow-sm' : ''}`} 
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <span>Style</span>Hub
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        >
          <FontAwesomeIcon icon={expanded ? faTimes : faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className={isActive('/') ? 'active' : ''}>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            </Nav.Item>
            
            <Nav.Item className={isActive('/products') ? 'active' : ''}>
              <Nav.Link as={Link} to="/products" onClick={() => setExpanded(false)}>Shop</Nav.Link>
            </Nav.Item>
            
            {/* Men's Dropdown */}
            <NavDropdown title="Men" id="mens-nav-dropdown">
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=men&season=summer"
                onClick={() => setExpanded(false)}
              >
                Summer Collection
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=men&season=winter"
                onClick={() => setExpanded(false)}
              >
                Winter Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=men"
                onClick={() => setExpanded(false)}
              >
                All Men's Clothing
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* Women's Dropdown */}
            <NavDropdown title="Women" id="womens-nav-dropdown">
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=women&season=summer"
                onClick={() => setExpanded(false)}
              >
                Summer Collection
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=women&season=winter"
                onClick={() => setExpanded(false)}
              >
                Winter Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=women"
                onClick={() => setExpanded(false)}
              >
                All Women's Clothing
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* Kids' Dropdown */}
            <NavDropdown title="Kids" id="kids-nav-dropdown">
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=kids&season=summer"
                onClick={() => setExpanded(false)}
              >
                Summer Collection
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=kids&season=winter"
                onClick={() => setExpanded(false)}
              >
                Winter Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                as={Link} 
                to="/products?category=kids"
                onClick={() => setExpanded(false)}
              >
                All Kids' Clothing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          {/* Search Form */}
          <form className="d-flex mx-auto search-form" onSubmit={handleSearch}>
            <input
              type="search"
              className="form-control"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          
          {/* User and Cart Icons */}
          <Nav className="ms-auto">
            <NavDropdown 
              title={<span><FontAwesomeIcon icon={faUser} /> Account</span>} 
              id="user-nav-dropdown" 
              align="end"
              className="me-2"
            >
              <NavDropdown.Item as={Link} to="/login" onClick={() => setExpanded(false)}>Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register" onClick={() => setExpanded(false)}>Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/forgot-password" onClick={() => setExpanded(false)}>Forgot Password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/profile" onClick={() => setExpanded(false)}>My Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/orders" onClick={() => setExpanded(false)}>My Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/track-order" onClick={() => setExpanded(false)}>Track Order</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wishlist" onClick={() => setExpanded(false)}>My Wishlist</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown 
              title="Help & Info" 
              id="info-nav-dropdown"
              className="me-2"
            >
              <NavDropdown.Item as={Link} to="/size-guide" onClick={() => setExpanded(false)}>Size Guide</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shipping-returns" onClick={() => setExpanded(false)}>Shipping & Returns</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faqs" onClick={() => setExpanded(false)}>FAQs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/privacy-policy" onClick={() => setExpanded(false)}>Privacy Policy</NavDropdown.Item>
            </NavDropdown>
            
            <div className="d-flex align-items-center">
              <Nav.Link 
                as={Link} 
                to="/wishlist" 
                className="icon-button"
                onClick={() => setExpanded(false)}
              >
                <FontAwesomeIcon icon={faHeart} size="lg" />
                {wishlistCount > 0 && (
                  <Badge pill bg="danger" className="icon-badge">
                    {wishlistCount}
                  </Badge>
                )}
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/cart" 
                className="icon-button"
                onClick={() => setExpanded(false)}
              >
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {totalItems > 0 && (
                  <Badge pill bg="danger" className="icon-badge">
                    {totalItems}
                  </Badge>
                )}
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
