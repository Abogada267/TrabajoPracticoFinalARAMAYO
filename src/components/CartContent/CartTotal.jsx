/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import "./CartTotal.css";

const CartTotal = () => {
    const { cart } = useContext(DataContext);

    
    const CartTotal = () => {
        const { cart } = useContext(DataContext);
        
        const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
        return (
        <div className="cartTotal">
    <h3>Total a pagar: {total} $ </h3>
             </div>
    )};
};

export default CartTotal;

