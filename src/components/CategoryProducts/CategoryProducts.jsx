/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import '../Products/Products.css';

const CategoryProducts = () => {
  const { data, buyProducts } = useContext(DataContext);

  if (data.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        {data.map(product => (
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
        ))}
      </div>
    </div>
  );
};

CategoryProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CategoryProducts;

