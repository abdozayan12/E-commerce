import { useCart } from './CartContext'; 
import Nav from './Nav'; // Ensure the correct import path and capitalization

function Cart() {
  const { cart, removeFromCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <div>
        <Nav />
        <div>Your cart is empty!</div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <h1>Your Cart</h1>
      {cart.map((product) => (
        <div key={product.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
          <h2>{product.name} (x{product.quantity})</h2>
          <p>{product.description}</p>
          <p><strong>${product.price * product.quantity}</strong></p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;