/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from '../NavBar/NavBar';

const AppLyout = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <main>{children}</main>
      {/* Puedes agregar elementos de pie de página aquí */}
    </div>
  );
};

export default AppLyout;
