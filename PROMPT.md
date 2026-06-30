# ShopFlow — E-Commerce SPA with Redux Toolkit

A fully functional E-Commerce Single Page Application built with React + Redux Toolkit (RTK), demonstrating advanced global state architecture without prop drilling.

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI Library |
| Redux Toolkit (RTK) | Global State Management |
| react-redux | React bindings for Redux |
| redux-persist | State persistence across refresh |
| Vite | Build tool & dev server |


## Project Structure

```
ecommerce-rtk/
├── index.html                 
├── .env.example                
├── .gitignore                 
├── package.json                
├── vite.config.js             
└── src/
    ├── main.jsx               
    ├── App.jsx                
    ├── index.css               
    ├── store/
    │   ├── store.js            
    │   ├── cartSlice.js       
    │   └── favoritesSlice.js   
    ├── components/
    │   ├── Navbar.jsx         
    │   ├── ProductCard.jsx    
    │   └── CartDrawer.jsx      
    ├── pages/
    │   ├── ShopPage.jsx        
    │   └── FavoritesPage.jsx   
    └── data/
        └── products.js        
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173/


```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```