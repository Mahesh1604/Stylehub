import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const ProductFilter = ({ 
  filters, 
  setFilters, 
  applyFilters,
  clearFilters
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    let newCategories = [...filters.categories];
    
    if (checked) {
      newCategories.push(value);
    } else {
      newCategories = newCategories.filter(category => category !== value);
    }
    
    setFilters({ ...filters, categories: newCategories });
  };

  const handleSeasonChange = (e) => {
    const { value, checked } = e.target;
    let newSeasons = [...filters.seasons];
    
    if (checked) {
      newSeasons.push(value);
    } else {
      newSeasons = newSeasons.filter(season => season !== value);
    }
    
    setFilters({ ...filters, seasons: newSeasons });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <Card className="mb-4">
      <Card.Header className="bg-primary text-white">
        <h5 className="mb-0">Filter Products</h5>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {/* Price Range */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Price Range</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="number"
                placeholder="Min"
                name="minPrice"
                value={filters.minPrice || ''}
                onChange={handleChange}
                min="0"
                className="me-2"
              />
              <span>to</span>
              <Form.Control
                type="number"
                placeholder="Max"
                name="maxPrice"
                value={filters.maxPrice || ''}
                onChange={handleChange}
                min="0"
                className="ms-2"
              />
            </div>
          </Form.Group>

          {/* Categories */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Categories</Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                id="category-men"
                label="Men"
                value="men"
                checked={filters.categories.includes('men')}
                onChange={handleCategoryChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="category-women"
                label="Women"
                value="women"
                checked={filters.categories.includes('women')}
                onChange={handleCategoryChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="category-kids"
                label="Kids"
                value="kids"
                checked={filters.categories.includes('kids')}
                onChange={handleCategoryChange}
              />
            </div>
          </Form.Group>

          {/* Seasons */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Seasons</Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                id="season-summer"
                label="Summer"
                value="summer"
                checked={filters.seasons.includes('summer')}
                onChange={handleSeasonChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="season-winter"
                label="Winter"
                value="winter"
                checked={filters.seasons.includes('winter')}
                onChange={handleSeasonChange}
              />
            </div>
          </Form.Group>

          {/* Sort By */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Sort By</Form.Label>
            <Form.Select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleChange}
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </Form.Select>
          </Form.Group>

          {/* Action Buttons */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Apply Filters
            </Button>
            <Button variant="outline-secondary" type="button" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProductFilter;
