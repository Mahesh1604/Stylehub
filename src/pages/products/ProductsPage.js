import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import ProductList from '../../components/product/ProductList';
import ProductFilter from '../../components/product/ProductFilter';
import allProducts from '../../data/products';

const ProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Get initial filter values from URL params
  const initialCategory = queryParams.get('category') || '';
  const initialSeason = queryParams.get('season') || '';
  const initialSearch = queryParams.get('search') || '';

  // Set up filters state
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    seasons: initialSeason ? [initialSeason] : [],
    minPrice: '',
    maxPrice: '',
    sortBy: 'default',
    searchQuery: initialSearch
  });

  // Set up filtered products state
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Apply filters function
  const applyFilters = () => {
    let result = [...allProducts];

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Filter by seasons
    if (filters.seasons.length > 0) {
      result = result.filter(product => 
        filters.seasons.includes(product.season)
      );
    }

    // Filter by price range
    if (filters.minPrice) {
      result = result.filter(product => 
        product.price >= parseFloat(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      result = result.filter(product => 
        product.price <= parseFloat(filters.maxPrice)
      );
    }

    // Filter by search query
    if (filters.searchQuery) {
      const searchLower = filters.searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.season.toLowerCase().includes(searchLower)
      );
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For demo purposes, we'll just reverse the array
        // In a real app, you'd sort by date
        result.reverse();
        break;
      default:
        // Default sorting (by id)
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredProducts(result);
  };

  // Clear filters function
  const clearFilters = () => {
    setFilters({
      categories: [],
      seasons: [],
      minPrice: '',
      maxPrice: '',
      sortBy: 'default',
      searchQuery: ''
    });
  };

  // Apply filters when component mounts or filters change
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get page title based on filters
  const getPageTitle = () => {
    if (filters.searchQuery) {
      return `Search Results for "${filters.searchQuery}"`;
    }
    
    if (filters.categories.length === 1) {
      const category = filters.categories[0];
      if (filters.seasons.length === 1) {
        return `${filters.seasons[0].charAt(0).toUpperCase() + filters.seasons[0].slice(1)} ${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection`;
      }
      return `${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection`;
    }
    
    if (filters.seasons.length === 1) {
      return `${filters.seasons[0].charAt(0).toUpperCase() + filters.seasons[0].slice(1)} Collection`;
    }
    
    return 'All Products';
  };

  return (
    <Container>
      {/* Breadcrumb */}
      <Breadcrumb className="my-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Products</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="mb-4">{getPageTitle()}</h1>

      <Row>
        {/* Sidebar with filters */}
        <Col lg={3} className="mb-4">
          <ProductFilter 
            filters={filters} 
            setFilters={setFilters} 
            applyFilters={applyFilters}
            clearFilters={clearFilters}
          />
        </Col>

        {/* Product listing */}
        <Col lg={9}>
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <p className="mb-0">
              Showing {filteredProducts.length} products
            </p>
          </div>
          <ProductList products={filteredProducts} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
