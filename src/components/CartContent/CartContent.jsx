/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext'; // Asegúrate de importar el DataContext correctamente
import NavBar from '../NavBar/NavBar';
import CartElement from "./CartElement";
import CartTotal from './CartTotal';

const CartContent = () => {
  const { cart } = useContext(DataContext); // Corrige la sintaxis aquí

  return (
    <>
      <NavBar />
      {cart.length > 0 ? (
        <>
          <CartElement />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>El carrito está vacío.</h2> 
      )}
    </>
  );
};

export default CartContent;
