/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../ItemListContainer/ItemListContainer.jsx';
import "./CartContent.css";
import CartItemCounter from './CartItemCounter';

const CartElement = () => {
  const { cart, setCart } = useContext(DataContext);

  const deleteProduct = (id) => {
    const foundProduct = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundProduct;
    });
    setCart(newCart);
  };

  return (
    <>
      {cart.map((product) => (
        <div className="cartContent" key={product.id}>
          <img src={product.image} alt="product-cart" />
          <h3 className='name'>{product.name}</h3>
          <CartItemCounter product={product} />
          <h4 className='price'>{product.price * product.quantity}$</h4>
          <h3 className='cart-delete-button' onClick={() => deleteProduct(product.id)}>❌</h3>
        </div>
      ))}
    </>
  );
};

export default CartElement;
