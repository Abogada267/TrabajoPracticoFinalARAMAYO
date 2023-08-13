/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import "./Products.css";

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);

    const buyProducts = (product) => {
        console.log(product);
        setCart([...cart, product])
    };

   

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
