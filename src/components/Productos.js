import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../api';

function Productos({ direccionSeleccionada, tipoCliente }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarProductos = async () => {
      if (!direccionSeleccionada || !tipoCliente) {
        console.log("Esperando direccionSeleccionada y tipoCliente antes de cargar productos.");
        return;
      }

      try {
        setLoading(true);
        const productosData = await obtenerProductos(direccionSeleccionada.rut, tipoCliente);
        setProductos(productosData);
      } catch (err) {
        console.error("Error en cargarProductos de Productos.js:", err);
        setError("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, [direccionSeleccionada, tipoCliente]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div></div>;
  }

  if (productos.length === 0) {
    return <div className="section">
              <h3 style={{
              paddingTop: "100px",
              paddingLeft: "160px"
              }}>No hay datos de notas de credito </h3>
            </div>;
  }

  return (
    <div className="section">
      <h3>Productos</h3>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Estado</th>
            <th>Fecha de Alta</th>
            <th>Fecha de Baja</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.producto || "No disponible"}</td>
              <td>{producto.estado || "No disponible"}</td>
              <td>{producto.fechaAlta || "No disponible"}</td>
              <td>{producto.fechaBaja || "No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
