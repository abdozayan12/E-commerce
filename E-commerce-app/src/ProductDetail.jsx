import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 20, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 30, description: 'Description for Product 3' }
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {products.map((product) => (
      <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600 font-bold">${product.price}</p>
        <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 mt-2 rounded">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
  
  );
}

export default ProductDetail;
