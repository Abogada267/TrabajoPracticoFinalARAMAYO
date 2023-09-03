/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
  const { data } = useProducts(data.json); 
  return (
    <>
      <Banner />
      <div className="product-cart-container">
        <Products products={data.json} />
      </div>
    </>
  );
};

export default Home;


