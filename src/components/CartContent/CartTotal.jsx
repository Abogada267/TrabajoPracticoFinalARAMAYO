/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../ItemListContainer/ItemListContainer.jsx';
import './CartTotal.css';

const CartTotal = () => {
  const { cart } = useContext(DataContext);

  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    return total;
  };

  return (
    <div className="cartTotal">
      <h3>Total a pagar:</h3>
      <h4>$ {calculateTotal()} </h4>
    </div>
  );
};

export default CartTotal;
