/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Products from '../Products/Products';

const Home = () => {
       return (
        <> 
    <NavBar />
     <Banner/>
<div className="product-cart-container">
                <Products/>
            </div>
             </>
    );
};

export default Home;
