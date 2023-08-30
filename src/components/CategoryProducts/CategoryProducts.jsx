/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import { db } from '../Firebase/Config';
import '../Products/Products.css';


const CategoryProducts = ({ categoryId }) => {
  const { data, buyProducts } = useContext(DataContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filtered = data.filter(product => product.category === categoryId);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data);
    }
  }, [data, categoryId]);

  const unsubscribe = db.collection('products')
    .where('category', '==', categoryId || '')
    .onSnapshot(snapshot => {
      const productsData = snapshot.docs.map(doc => doc.data());
      setFilteredProducts(productsData);
    });

  return (
    <div className="container">
      <h2>{`Productos filtrados por categoría: ${categoryId}`}</h2>
      <div className="row justify-content-center">
        {filteredProducts.map(product => (
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
  categoryId: PropTypes.string.isRequired,
};

export default CategoryProducts;

