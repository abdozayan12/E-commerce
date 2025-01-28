import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 20, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 30, description: 'Description for Product 3' }
];

function Home() {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</strong></p>
            <button onClick={() => handleAddToCart(product)} style={{ marginRight: '10px' }}>
              {addedProductId === product.id ? 'Added!' : 'Add to Cart'}
            </button>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
