
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
    isOpen: false,
  },

  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.quantity += 1
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(i => i.id !== action.payload)
        } else {
          item.quantity -= 1
        }
      }
    },

    clearCart: (state) => {
      state.items = []
    },

    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },

    openCart: (state) => { state.isOpen = true },
    closeCart: (state) => { state.isOpen = false },
  },
})

export const {
  addToCart, removeFromCart, incrementQuantity,
  decrementQuantity, clearCart, toggleCart, openCart, closeCart,
} = cartSlice.actions

export const selectCartItems  = state => state.cart.items
export const selectCartIsOpen = state => state.cart.isOpen
export const selectCartCount  = state =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectCartTotal  = state =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

export default cartSlice.reducer
