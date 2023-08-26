/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import '../Products/Products.css';

const Products = ({ category }) => {
  const { data, buyProducts } = useContext(DataContext);
  const filteredProducts = category ? data.filter(product => product.category === category) : data;

  return (
    <div className="container">
      <div className="row justify-content-center">
        {filteredProducts.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.Price}</p>
                <button className="btn btn-primary" onClick={() => buyProducts(product)}>Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  category: PropTypes.string,
};

export default Products;
