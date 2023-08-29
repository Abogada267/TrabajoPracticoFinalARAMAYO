/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import { DataContext } from '../Context/DataContext'; // Importa el contexto
import Products from '../Products/Products';

const Home = () => {
  const { data } = useContext(DataContext); 

  return (
    <>
      <Banner />
      <div className="product-cart-container">
            <Products products={data} />
      </div>
    </>
  );
};

export default Home;

