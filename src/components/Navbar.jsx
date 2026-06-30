import { useSelector, useDispatch } from 'react-redux'
import { selectCartCount, toggleCart } from '../store/cartSlice'
import { selectFavCount } from '../store/favoritesSlice'

export default function Navbar({ activePage, setActivePage }) {
  const dispatch  = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const favCount  = useSelector(selectFavCount)

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => setActivePage('shop')}>
          <span className="brand-dot" />
          ShopFlow
        </div>
        <div className="nav-links">
          <button className={`nav-link ${activePage === 'shop' ? 'active' : ''}`} onClick={() => setActivePage('shop')}>Shop</button>
          <button className={`nav-link ${activePage === 'favorites' ? 'active' : ''}`} onClick={() => setActivePage('favorites')}>
            Wishlist {favCount > 0 && <span className="badge fav-badge">{favCount}</span>}
          </button>
        </div>
        <div className="nav-actions">
          <button className="cart-btn" onClick={() => dispatch(toggleCart())}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}
