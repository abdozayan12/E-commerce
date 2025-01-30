import { Route, Routes } from 'react-router-dom';
import Home from './home';          
import ProductDetail from './ProductDetail';  
import Cart from './Cart';         
import { CartProvider } from './CartContext';
import nav from './nav';
import './App.css';


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<nav />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
