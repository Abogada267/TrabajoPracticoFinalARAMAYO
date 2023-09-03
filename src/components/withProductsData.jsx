import { useEffect, useState } from "react";
import { pedirDatos } from "./helpers/pedirDatos";

export const withProductsData = (Component) => {
    const WithProductsData = () => {
    const [productos, setProductos] = useState([]);
const [loading, setLoading]= useState(true)
        
        useEffect(() => {
            setLoading(true);
        
            pedirDatos()
                .then(r => setProductos(r))
                .catch(e => console.log(e))
                .finally(() => {
                    setLoading(false);
                })
              
        }, [])
        return <Component productos={productos} Loading={loading} />
    }

    return WithProductsData

    }