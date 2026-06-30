import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems, selectCartTotal, selectCartIsOpen,
  incrementQuantity, decrementQuantity, removeFromCart,
  clearCart, closeCart,
} from '../store/cartSlice'

export default function CartDrawer() {
  const dispatch = useDispatch()
  const items    = useSelector(selectCartItems)
  const total    = useSelector(selectCartTotal)
  const isOpen   = useSelector(selectCartIsOpen)

  return (
    <>
      {}
      <div className={`drawer-overlay ${isOpen ? 'visible' : ''}`} onClick={() => dispatch(closeCart())} />

      {}
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">Your Cart</h2>
          <button className="close-btn" onClick={() => dispatch(closeCart())}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <p>Your cart is empty</p>
            <span>Add some products to get started</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>

                    <div className="qty-controls">
                      {}
                      <button className="qty-btn" onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                      <span className="qty-num">{item.quantity}</span>
                      {}
                      <button className="qty-btn" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    </div>
                  </div>

                  {}
                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                      <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="total-amount">${total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
              {/* DISPATCH: clearCart */}
              <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
