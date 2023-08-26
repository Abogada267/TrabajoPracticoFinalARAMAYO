/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/tiposdetramites" element={<Products category="tiposdetramites" />} />
          <Route path="/productos/miscompras" element={<Products category="miscompras" />} />
          <Route path="/productos/modelo" element={<Products category="modelo" />} />
          <Route path="/productos/novedades" element={<Products category="novedades" />} />
          <Route path="/productos/ayuda" element={<Products category="ayuda" />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
         </DataProvider>
        </BrowserRouter>
  );
}

export default App;



