import axios from './utils/Axios'; // Make sure axios is properly set up
import React, { useEffect, useState, createContext } from 'react';

export const userContext = createContext();  // Create context to manage product data

const Context = (props) => {
  // Initialize state for product data with fallback to localStorage or null
  const [product, setProduct] = useState(() => {
    return JSON.parse(localStorage.getItem('product')) || null;  // Check localStorage first
  });

  // Sync product state with localStorage whenever it changes
  useEffect(() => {
    if (product !== null) {
      localStorage.setItem('product', JSON.stringify(product));  // Store in localStorage when product is updated
    }
  }, [product]);

  // Fetch product data from API (uncomment to enable fetching)
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get('/products');  // Adjust the API endpoint as necessary
        setProduct(data);  // Update the product state with fetched data
      } catch (error) {
        console.error('Error fetching products:', error);  // Handle any errors during the fetch
      }
    };

    // Uncomment to enable fetching
    getProduct();
  }, []);  // Empty dependency array to run only once on mount

  return (
    <userContext.Provider value={[product, setProduct]}>
      {props.children}  {/* Provide product data to child components */}
    </userContext.Provider>
  );
};

export default Context;
