import React, { useContext } from 'react';
import { userContext } from './Context';

const ProductList = () => {
  const [product] = useContext(userContext);  // Get product data from context

  return (
    <div>
      <h1>Products</h1>
      {product ? (
        <pre>{JSON.stringify(product, null, 2)}</pre>  // Display the product data
      ) : (
        <p>No products available.</p>  // If no product data, show this message
      )}
    </div>
  );
};

export default ProductList;
