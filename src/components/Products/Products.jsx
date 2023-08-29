/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import '../Products/Products.css';

const Products = ({ products }) => {
  const { buyProducts } = useContext(DataContext);

  return (
    <div className="container">
      <div className="row justify-content-center">
           {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt="Product" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary" onClick={() => buyProducts(product)}>Comprar</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
