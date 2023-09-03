/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLyout/AppLyout';
import CartContent from './components/CartContent/CartContent';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import Home from './components/Home/Home';

function App() {


 

  return (
        <BrowserRouter>
      <ItemLisContainer >
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartContent />} />
            <Route path="/" element={<CategoryProducts greeting={"Todos nuestros Productos"} />} />
            <Route
  path="/category/:categoryId"
  element={({ params }) => (
    <CategoryProducts categoryId={params.categoryId} greeting={`Productos filtrados por categoría: ${params.categoryId}`} />
  )}
/>
          </Routes>
        </AppLayout>
      </ItemLisContainer>
      
    </BrowserRouter>
  );
}

export default App;


