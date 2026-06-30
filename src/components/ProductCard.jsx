import { useDispatch, useSelector } from 'react-redux'
import { addToCart, openCart } from '../store/cartSlice'
import { toggleFavorite, selectIsFavorite } from '../store/favoritesSlice'

export default function ProductCard({ product }) {
  const dispatch    = useDispatch()
  const isFavorite  = useSelector(selectIsFavorite(product.id))

  const handleAddToCart = () => {
    dispatch(addToCart({
      id:    product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }))
    dispatch(openCart())   
  }

  const handleFavorite = (e) => {
    e.stopPropagation()
    dispatch(toggleFavorite({
      id:    product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }))
  }

  const badgeColor = {
    'Best Seller': '#f59e0b',
    'New': '#10b981',
    'Sale': '#ef4444',
  }

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.title} className="product-image" loading="lazy" />

        {product.badge && (
          <span className="product-badge" style={{ background: badgeColor[product.badge] }}>
            {product.badge}
          </span>
        )}

        <button className={`fav-btn ${isFavorite ? 'active' : ''}`} onClick={handleFavorite} aria-label="Toggle favorite">
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>

        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
          <span className="review-count">({product.reviews})</span>
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
