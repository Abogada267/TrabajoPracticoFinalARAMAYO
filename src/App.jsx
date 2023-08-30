/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLyout/AppLyout';
import CartContent from './components/CartContent/CartContent';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import DataProvider from './components/Context/DataContext';
import Home from './components/Home/Home';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json') 
      .then((res) => {
        setData(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <DataProvider data={data}>
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
      </DataProvider>
      
    </BrowserRouter>
  );
}

export default App;


