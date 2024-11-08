import React, { useState, useEffect } from 'react';
import { obtenerOrdenesComerciales } from '../api';

function OrdenesComerciales({ direccionSeleccionada, tipoCliente }) {
  const [ordenesComerciales, setOrdenesComerciales] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarOrdenesComerciales = async () => {
      if (!direccionSeleccionada || !tipoCliente) {
        console.log("Esperando direccionSeleccionada y tipoCliente antes de cargar órdenes comerciales.");
        return;
      }

      try {
        setLoading(true);
        const ordenesData = await obtenerOrdenesComerciales(direccionSeleccionada.rut, tipoCliente);
        setOrdenesComerciales(ordenesData);
      } catch (err) {
        console.error("Error en cargarOrdenesComerciales de OrdenesComerciales.js:", err);
        setError("No se pudieron cargar las órdenes comerciales");
      } finally {
        setLoading(false);
      }
    };

    cargarOrdenesComerciales();
  }, [direccionSeleccionada, tipoCliente]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div></div>;
  }

  if (ordenesComerciales.length === 0) {
    return <div className="section">
      <h3>Órdenes Comerciales</h3>
            <h3 style={{
              marginTop: "5%",
            marginLeft: "35%"
            }}>No hay datos de órdenes comerciales</h3>
          </div>;
  }

  return (
    <div className="section">
      <h3>Órdenes Comerciales</h3>
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Canal de Venta</th>
            <th>Tipo de Orden</th>
            <th>Descripción</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
          </tr>
        </thead>
        <tbody className={ordenesComerciales.length > 5 ? 'scrollable' : ''}>
          {ordenesComerciales.map((orden, index) => (
            <tr key={index}>
              <td>{orden.orden || "No disponible"}</td>
              <td>{orden.canalVenta || "No disponible"}</td>
              <td>{orden.tipoOrden || "No disponible"}</td>
              <td>{orden.descripcion || "No disponible"}</td>
              <td>{orden.fechaCreacion || "No disponible"}</td>
              <td>{orden.fechaCierre || "No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdenesComerciales;
