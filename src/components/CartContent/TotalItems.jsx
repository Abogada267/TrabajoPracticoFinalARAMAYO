/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

const TotalItems = () => {
    const { cart } = useContext(DataContext);

    const itemsQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);
    return <span className="cart-items-total"> {itemsQuantity}</span>;
};

export default TotalItems;





