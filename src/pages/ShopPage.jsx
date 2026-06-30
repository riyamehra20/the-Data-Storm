import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = products.filter(p => {
    const matchCat  = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="shop-page">
      <div className="shop-hero">
        <h1 className="hero-title">Curated for You</h1>
        <p className="hero-sub">Discover premium products, hand-picked for modern living.</p>
      </div>

      <div className="shop-controls">
        <div className="search-wrap">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-pills">
          {categories.map(cat => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

      {filtered.length === 0 ? (
        <div className="no-results">
          <p>No products found for "{searchQuery}"</p>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}
