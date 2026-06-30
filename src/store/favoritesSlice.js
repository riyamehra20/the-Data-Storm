import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
    clearFavorites: (state) => {
      state.items = []
    },
  },
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions

export const selectFavorites    = state => state.favorites.items
export const selectFavoriteIds  = state => state.favorites.items.map(i => i.id)
export const selectFavCount     = state => state.favorites.items.length
export const selectIsFavorite   = id => state =>
  state.favorites.items.some(item => item.id === id)

export default favoritesSlice.reducer
