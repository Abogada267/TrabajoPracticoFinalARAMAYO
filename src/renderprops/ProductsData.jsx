/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { pedirDatos } from "../components/helpers/pedirDatos";

const ProductsData = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)
    

    useEffect(() => {
        setloading(true)
    
    pedirDatos()
                .then(r => setProductos(r))
                .catch(e => console.log(e))
                .finally(() => {
                    setloading(false);
                })
              
}, [])
return (
    <div>
        {children (productos, loading)}

            </div>
)
     }   
export default ProductsData