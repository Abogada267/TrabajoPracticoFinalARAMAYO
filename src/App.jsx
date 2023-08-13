/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} /> {/* Utiliza <CartContent /> como elemento */}
          <Route path='/products' element={<Products />} /> {/* Por ejemplo, muestra los productos en una vista separada */}
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;




