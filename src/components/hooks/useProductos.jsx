/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';


export const useProductos = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
      setLoading(true)

      pedirDatos()
        .then(r => setProductos (r))
          .catch(e => console.log(e))
          .fimally(() => {
          setLoading(false)
          })
              
          }, [])

  return {productos,loading}
}

