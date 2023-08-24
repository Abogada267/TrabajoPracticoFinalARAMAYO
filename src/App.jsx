/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {
  return (
    <BrowserRouter>
          <DataProvider>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} /> 
          <Route path='/products' element={<Products />} /> 
          <Route path='*' element={<Navigate to="/" />} /> 
                 </Routes>
          </DataProvider>
    </BrowserRouter>
  );
}

export default App;




