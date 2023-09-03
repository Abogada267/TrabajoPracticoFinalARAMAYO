/* eslint-disable no-unused-vars */
import React from "react";
import ItemList from "../ItemList/ItemList";
import { useProductos } from "../hooks/useProductos";


const ItemListContainer = () => {
  const { productos, loading } = useProductos()
  console.log(loading, productos)
  
  return (
    <div>
      {
        loading
          ? (
            <>
              <h2> Cargando...</h2>
        <ItemList productos={productos} />
          </> 
  )
    
      :null
     } 
    </div>
  )
}

export default ItemListContainer;

