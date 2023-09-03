/* eslint-disable no-undef */
import { addDoc, collection, doc, documentId, getDocs, query, writeBatch } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { CartContext } from "../Context/Cart.Context";

const Checkout = () => {
  const { cart, totalCompra, vaciarcarrito } = useContext(CartContext);

  const [loading, setloading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);

        const orden = {
            cliente: values,
            items: cart.map((item) => ({
                id: item.id,
                precio: item.precio,
                cantidad: item.cantidad,
                nombre: item.nombre,
            })),
            total: totalCompra(),
            fyh: new Date(),
        };

        console.log(orden);
        console.log(cart.map((item) => item.id));

        const batch = writeBatch(db);
        const ordersRef = collection(db, "orders");
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where(documentId(), "in", cart.map((item) => doc(item.id))));


    const productos = await getDocs(q)
    const outOfStock = []

    productos.docs.forEach((doc) => {
      const item = cart.find((prod) => prod.id === doc.id);
      const stock = doc.data().stock;

      if (stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: stock - item.cantidad,
        });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      try {
        await batch.commit();
        const orderDoc = await addDoc(ordersRef, orden);

        vaciarcarrito();
        setOrderId(orderDoc.id);
      } catch (error) {
        console.error("Error al actualizar el stock o agregar la orden:", error);
      }
    } else {
      alert("Hay productos sin stock");
      console.log(outOfStock);
      setloading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2 className="text-4xl">Tu compra se registró exitosamente</h2>
        <hr />
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={values.nombre}
          type="text"
          className="form-control my-2"
          placeholder="Nombre"
          name="nombre"
        />

        <input
          onChange={handleInputChange}
          value={values.direccion}
          type="text"
          className="form-control my-2"
          placeholder="Direccion"
          name="direccion"
        />

        <input
          onChange={handleInputChange}
          value={values.email}
          type="text"
          className="form-control my-2"
          placeholder="Tu email"
          name="email"
        />

        <button disabled={loading} className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
