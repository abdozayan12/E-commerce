import { Route, Routes } from 'react-router-dom';
import Home from './home';          
import ProductDetail from './ProductDetail';  
import Cart from './Cart';         
import { CartProvider } from './CartContext';
import Nav from './Nav'; // Corrected capitalization of 'Nav' component
import Footer from './footer'; // Corrected capitalization of 'Footer' component
import './App.css';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<><Nav /><Home /><Footer /></>} /> {/* Use Nav and Footer components */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;