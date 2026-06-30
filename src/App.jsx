
import { useState } from 'react'
import Navbar       from './components/Navbar'
import CartDrawer   from './components/CartDrawer'
import ShopPage     from './pages/ShopPage'
import FavoritesPage from './pages/FavoritesPage'

export default function App() {
  const [activePage, setActivePage] = useState('shop')

  return (
    <div className="app">
      {}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {}
      {activePage === 'shop'      && <ShopPage />}
      {activePage === 'favorites' && <FavoritesPage />}

      {}
      <CartDrawer />
    </div>
  )
}
