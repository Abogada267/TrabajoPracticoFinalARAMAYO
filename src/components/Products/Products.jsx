/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import "./Products.css";

const Products = () => {
    const { data,buyProducts } = useContext(DataContext);

      

    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.image} alt="img-product-card" />
                <h3>{product.name}</h3>
                <h4>$  {product.Price}</h4>
                <button onClick={() => buyProducts(product)}>Comprar</button>
            </div>
           
        );
    });
    };

export default Products;


