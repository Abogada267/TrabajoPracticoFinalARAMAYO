/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(DataContext);

  const decrease = () => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat.quanty !== 1) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quanty: item.quanty - 1 } : item
        )
      );
    }
  };

  return (
    <>
      <p className="counter-button" onClick={decrease}>
        -
      </p>
      <p>{product.quanty}</p>
      <p className="counter-button" onClick={() => buyProducts(product)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;
