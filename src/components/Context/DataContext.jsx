/* eslint-disable no-unused-vars */
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.id === product.id);

        if (productrepeat) {
            setCart(cart.map((item) =>
                (item.id === product.id ? { ...product, quantity: productrepeat.quantity + 1 } : item)));
           }else {
            setCart([...cart, product ]);
        }

        
    };


  return<DataContext.Provider value={{ data, cart, setCart, buyProducts}}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default DataProvider;
