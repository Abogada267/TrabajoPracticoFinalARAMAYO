/* eslint-disable no-unused-vars */
import React from 'react';
import CartElement from "./CartElement";
import CartTotal from './CartTotal';


const CartContent = () => {
  return (
    <div>
      <CartElement />
      <CartTotal />
    </div>
  );
};

export default CartContent;