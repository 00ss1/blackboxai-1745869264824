import React, { useState } from 'react';
import Payment from '../components/Payment';

const dummyProducts = [
  { id: 1, name: 'Product A', price: 1000, description: 'Description for Product A' },
  { id: 2, name: 'Product B', price: 2000, description: 'Description for Product B' },
  { id: 3, name: 'Product C', price: 1500, description: 'Description for Product C' },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedProduct(product)}
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="font-bold">₹{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="mt-8 p-6 border rounded bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
          <p className="mb-4">{selectedProduct.description}</p>
          <Payment amount={selectedProduct.price} productName={selectedProduct.name} />
          <button
            className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
            onClick={() => setSelectedProduct(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
