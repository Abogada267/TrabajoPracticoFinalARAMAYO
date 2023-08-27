/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from "../Banner/Banner";
import Products from '../Products/Products';

const Home = () => {
       return (
        <> 
        <Banner/>
<div className="product-cart-container">
                <Products/>
            </div>
             </>
    );
};

export default Home;
