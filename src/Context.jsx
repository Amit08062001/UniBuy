import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

export const userContext = createContext();  // Create context to manage product data

const Context = (props) => {
  // Initialize state for product data with fallback to localStorage or empty array
  const [product, setProduct] = useState(() => {
    return JSON.parse(localStorage.getItem('product')) || [];  // Use empty array as fallback
  });

  // Sync product state with localStorage whenever it changes
  useEffect(() => {
    if (product.length > 0) {  // Only store if the product array has items
      localStorage.setItem('product', JSON.stringify(product));  // Store in localStorage when product is updated
    }
  }, [product]);

  return (
    <userContext.Provider value={[product, setProduct]}>
      {props.children}  {/* Provide product data to child components */}
    </userContext.Provider>
  );
};

// Add PropTypes validation for the `children` prop
Context.propTypes = {
  children: PropTypes.node.isRequired,  // `children` should be any valid React node and is required
};

export default Context;
