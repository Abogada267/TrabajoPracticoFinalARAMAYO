/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import "./Products.css";

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);

    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id);

        if (productRepeat) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quanty: item.quanty + 1 } : item
            );
            console.log('Updated Cart:', updatedCart); // Agregar este console.log
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quanty: 1 }]);
        }

        console.log('New Cart:', cart); // Agregar este console.log
    };

    console.log('Current Cart:', cart); // Agregar este console.log

    return (
        <div className="product-card-container">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="img-product-card" />
                    <h3>{product.name}</h3>
                    <h4>{product.price} $</h4>
                    <button onClick={() => buyProducts(product)}>Comprar</button>
                </div>
            ))}
        </div>
    );
};

export default Products;


