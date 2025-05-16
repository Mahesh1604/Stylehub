import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/utility/ScrollToTop';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import ProductDetailsPage from './pages/product-details/ProductDetailsPage';
import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ProfilePage from './pages/profile/ProfilePage';
import WishlistPage from './pages/wishlist/WishlistPage';

// Order & Account Pages
import OrdersPage from './pages/order/OrdersPage';
import TrackOrderPage from './pages/order/TrackOrderPage';

// Info Pages
import SizeGuidePage from './pages/info/SizeGuidePage';
import FAQsPage from './pages/info/FAQsPage';
import ShippingReturnsPage from './pages/info/ShippingReturnsPage';
import PrivacyPolicyPage from './pages/info/PrivacyPolicyPage';
import TermsOfServicePage from './pages/info/TermsOfServicePage';

// Support Pages
import ContactUsPage from './pages/support/ContactUsPage';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <WishlistProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              
              {/* Auth Routes */}
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              
              {/* Order Routes */}
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/track-order" element={<TrackOrderPage />} />
              
              {/* Info Routes */}
              <Route path="/size-guide" element={<SizeGuidePage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              
              {/* Support Routes */}
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </Layout>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
