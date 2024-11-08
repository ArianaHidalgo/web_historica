import React, { useState, useEffect } from 'react';
import { obtenerOrdenesTecnicas } from '../api';

function OrdenesTecnicas({ direccionSeleccionada, tipoCliente }) {
  const [ordenesTecnicas, setOrdenesTecnicas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarOrdenesTecnicas = async () => {
      if (!direccionSeleccionada || !tipoCliente) {
        console.log("Esperando direccionSeleccionada y tipoCliente antes de cargar órdenes técnicas.");
        return;
      }

      try {
        setLoading(true);
        const ordenesData = await obtenerOrdenesTecnicas(direccionSeleccionada.rut, tipoCliente);
        setOrdenesTecnicas(ordenesData);
      } catch (err) {
        console.error("Error en cargarOrdenesTecnicas de OrdenesTecnicas.js:", err);
        setError("No se pudieron cargar las órdenes técnicas");
      } finally {
        setLoading(false);
      }
    };

    cargarOrdenesTecnicas();
  }, [direccionSeleccionada, tipoCliente]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div></div>;
  }

  if (ordenesTecnicas.length === 0) {
    return (
      <div className="section">
        <h3>Órdenes Técnicas</h3>
            <h3 style={{
              marginTop: "10%",
            marginLeft: "30%"
            }}>No hay datos de ordenes técnicas.</h3>
      </div>
    );
  }

  return (
    <div className="section">
      <h3>Órdenes Técnicas</h3>
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Estado</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
          </tr>
        </thead>
        <tbody className={ordenesTecnicas.length > 4 ? 'scrollable' : ''}>
          {ordenesTecnicas.map((orden, index) => (
            <tr key={index}>
              <td>{orden.orden || "No disponible"}</td>
              <td>{orden.estado || "No disponible"}</td>
              <td>{orden.fechaCreacion || "No disponible"}</td>
              <td>{orden.fechaCierre || "No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdenesTecnicas;
