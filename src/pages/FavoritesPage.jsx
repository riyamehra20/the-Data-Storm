
import { useSelector, useDispatch } from 'react-redux'
import { selectFavorites, toggleFavorite } from '../store/favoritesSlice'
import { addToCart, openCart } from '../store/cartSlice'

export default function FavoritesPage() {
  const dispatch  = useDispatch()
  const favorites = useSelector(selectFavorites)

  const handleMoveToCart = (item) => {
    dispatch(addToCart({ id: item.id, title: item.title, price: item.price, image: item.image }))
    dispatch(toggleFavorite(item))  
    dispatch(openCart())
  }

  return (
    <main className="fav-page">
      <div className="shop-hero">
        <h1 className="hero-title">Your Wishlist</h1>
        <p className="hero-sub">{favorites.length} saved item{favorites.length !== 1 ? 's' : ''}</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♡</div>
          <p>Nothing saved yet</p>
          <span>Tap the heart icon on any product to save it here</span>
        </div>
      ) : (
        <div className="product-grid">
          {favorites.map(item => (
            <div key={item.id} className="fav-card">
              <div className="fav-img-wrap">
                <img src={item.image} alt={item.title} className="product-image" />
                <button className="fav-btn active" onClick={() => dispatch(toggleFavorite(item))}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <div className="product-footer">
                  <span className="product-price">${item.price.toFixed(2)}</span>
                  <button className="add-btn" onClick={() => handleMoveToCart(item)}>Move to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
