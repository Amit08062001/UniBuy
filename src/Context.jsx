import axios from './utils/Axios';
import React, { useEffect, useState, createContext } from 'react';

export const userContext = createContext(); 

const Context = (props) => {
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem('product'))||null);

  // const getProduct = async () => {
  //   try {
  //     const { data } = await axios('/products');
  //     setProduct(data);
  //   } catch (error) {
  //     console.log('Error fetching products:', error);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <userContext.Provider value={[product, setProduct]}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
