/* eslint-disable no-unused-vars */
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const buyProducts = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    axios("./data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { categoryId } = useParams();

  const filteredData = categoryId
    ? data.filter(prod => prod.category === categoryId)
    : data;

  return (
    <DataContext.Provider value={{ data: filteredData, cart, setCart, buyProducts }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
