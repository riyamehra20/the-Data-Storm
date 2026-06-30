export const products = [
  { id: 1, title: 'Minimalist Leather Watch', price: 129.99, category: 'Accessories', rating: 4.8, reviews: 312, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', badge: 'Best Seller' },
  { id: 2, title: 'Wireless Noise-Cancelling Headphones', price: 249.99, category: 'Electronics', rating: 4.9, reviews: 876, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', badge: 'New' },
  { id: 3, title: 'Premium Canvas Backpack', price: 89.99, category: 'Bags', rating: 4.6, reviews: 204, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', badge: null },
  { id: 4, title: 'Polarised Sunglasses', price: 59.99, category: 'Accessories', rating: 4.5, reviews: 158, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80', badge: 'Sale' },
  { id: 5, title: 'Mechanical Keyboard', price: 189.99, category: 'Electronics', rating: 4.7, reviews: 441, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&q=80', badge: null },
  { id: 6, title: 'Ceramic Pour-Over Coffee Set', price: 44.99, category: 'Kitchen', rating: 4.9, reviews: 93, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', badge: 'New' },
  { id: 7, title: 'Slim-fit Linen Shirt', price: 69.99, category: 'Clothing', rating: 4.4, reviews: 267, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80', badge: null },
  { id: 8, title: 'Smart Fitness Tracker', price: 99.99, category: 'Electronics', rating: 4.6, reviews: 532, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80', badge: 'Best Seller' },
]

export const categories = ['All', ...new Set(products.map(p => p.category))]