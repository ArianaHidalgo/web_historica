import React, { useState, useEffect } from 'react';
import { obtenerProductosAdicionales } from '../api';

function ProductosAdicionales({ direccionSeleccionada, tipoCliente }) {
  const [productosAdicionales, setProductosAdicionales] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarProductosAdicionales = async () => {
      if (!direccionSeleccionada || !tipoCliente) {
        console.log("Esperando direccionSeleccionada y tipoCliente antes de cargar productos adicionales.");
        return;
      }

      try {
        setLoading(true);
        const productosData = await obtenerProductosAdicionales(direccionSeleccionada.rut, tipoCliente);
        setProductosAdicionales(productosData);
      } catch (err) {
        console.error("Error en cargarProductosAdicionales de ProductosAdicionales.js:", err);
        setError("No se pudieron cargar los productos adicionales");
      } finally {
        setLoading(false);
      }
    };

    cargarProductosAdicionales();
  }, [direccionSeleccionada, tipoCliente]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div></div>;
  }

  if (productosAdicionales.length === 0) {
    return <div className="section">
              <h3 style={{
              paddingTop: "100px",
              paddingLeft: "160px"
              }}>No hay datos de productos adicionales</h3>
            </div>;
  }

  return (
    <div className="section">
      <h3>Productos Adicionales</h3>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Fecha de Alta</th>
            <th>Fecha de Baja</th>
          </tr>
        </thead>
        <tbody className={productosAdicionales.length > 4 ? 'scrollable' : ''}>
          {productosAdicionales.map((producto, index) => (
            <tr key={index}>
              <td>{producto.producto || "No disponible"}</td>
              <td>{producto.estado || "No disponible"}</td>
              <td>{producto.precio || "No disponible"}</td>
              <td>{producto.fechaAlta || "No disponible"}</td>
              <td>{producto.fechaBaja || "No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductosAdicionales;
