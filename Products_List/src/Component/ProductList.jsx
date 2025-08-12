import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from './ProductCard';

function ProductList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('');
  
  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.title}`);
  };

  const filteredProducts = productsData
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === 'All' || p.category === category)
    .sort((a, b) => {
      if (sort === 'priceLowHigh') return a.price - b.price;
      if (sort === 'priceHighLow') return b.price - a.price;
      if (sort === 'ratingHighLow') return b.rating - a.discount;
      return 0;
    });

  return (
    <div className="container">
      {/* Search & Filters */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Search product..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="ratingHighLow">Rating: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {filteredProducts.map(product => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
