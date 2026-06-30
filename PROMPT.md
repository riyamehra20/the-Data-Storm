const ADD_TO_CART = 'ADD_TO_CART'
function cartReducer(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    default:
      return state
  }
}

// Redux Toolkit (USE THIS)
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload) // Immer handles immutability
    }
  }
})

// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import favoritesReducer from './favoritesSlice'

const rootReducer = combineReducers({
  cart: cartReducer,           // state.cart
  favorites: favoritesReducer, // state.favorites
})

export const store = configureStore({
  reducer: rootReducer,
})

---

 How does Provider work and why does it wrap the whole app?

`<Provider store={store}>` uses React Context internally to make the store accessible to ANY component in the tree — without passing props manually.

```jsx
// main.jsx
<Provider store={store}>       // injects store into entire tree
  <PersistGate persistor={persistor}>  // waits for localStorage rehydration
    <App />                    // every component can now access the store
  </PersistGate>
</Provider>
```

Without Provider → `useSelector` and `useDispatch` would throw errors.

 Why does Redux state disappear on browser refresh and how do you fix it?
Redux state lives in RAM (JavaScript memory). When the browser refreshes, RAM is cleared → state is lost.

**Fix: `redux-persist`** syncs store to `localStorage` automatically.

```js
// store.js
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ reducer: persistedReducer })
export const persistor = persistStore(store)
```

```jsx
// main.jsx
<PersistGate loading={null} persistor={persistor}>
  <App />
</PersistGate>

What is Immer and why does RTK use it?
Immer is a library that allows you to write "mutating" code that actually produces immutable updates safely.

```js
// Without Immer (must spread manually — easy to forget)
addToCart: (state, action) => {
  return { ...state, items: [...state.items, action.payload] }
}

// With Immer (RTK built-in — looks like mutation but is safe)
addToCart: (state, action) => {
  state.items.push(action.payload)  // This looks like mutation but ISN'T
}
```

