/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
import ItemCard from "./ItemCard";

const ItemList2 = ({ productos, Loading }) => {
  return (
    <div className="container">
      <h2>Productos</h2>
      <hr />
      <div className="row">
        {Loading ? (
          <h2> Cargando...</h2>
        ) : (
          productos &&
          productos.map((prod) => <ItemCard key={prod.id} item={prod} />)
        )}
      </div>
    </div>
  );
};

ItemList2.propTypes = {
  productos: PropTypes.array.isRequired, 
  Loading: PropTypes.bool.isRequired,
};

export default WithProductsData(ItemList2);

export const Contacto2 = ({ productos, Loading }) => {
  console.log(productos, Loading);

  return (
    <div>
      Contacto2
    </div>
  );
};
