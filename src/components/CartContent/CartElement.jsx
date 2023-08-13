/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import "./CartContent.css";
import CartItemCounter from './CartItemCounter';

const CartElement = () => {
    const { cart } = useContext(DataContext);

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.image} alt="product-cart" />
                <h3 className='name'>{product.name}</h3>
                <CartItemCounter product={product} />
                <h4 className='price'>{product.Price * product.quanty}$</h4>
            </div>
        );
    });
};
        


export default CartElement;



  

