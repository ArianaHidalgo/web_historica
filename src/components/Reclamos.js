// src/components/Reclamos.js
import React, { useEffect, useState } from 'react';
import { obtenerReclamos } from '../api';

function Reclamos({ direccionSeleccionada, tipoCliente }) {
  const [datosReclamos, setDatosReclamos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarReclamos = async () => {
      if (!direccionSeleccionada || !tipoCliente) {
        console.log("Esperando direccionSeleccionada y tipoCliente antes de cargar reclamos.");
        return;
      }

      try {
        setLoading(true);
        console.log("Llamando a obtenerReclamos con:", direccionSeleccionada.rut, tipoCliente);
        const reclamos = await obtenerReclamos(direccionSeleccionada.rut, tipoCliente);
        setDatosReclamos(reclamos);
      } catch (err) {
        console.error("Error en cargarReclamos de Reclamos.js:", err);
        setError("No se pudieron cargar los reclamos");
      } finally {
        setLoading(false);
      }
    };

    cargarReclamos();
  }, [direccionSeleccionada, tipoCliente]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div></div>;
  }

  if (datosReclamos.length === 0) {
    return <div className="section">
              <h3 style={{
              paddingTop: "100px",
              paddingLeft: "160px"
              }}>No hay datos de reclamos </h3>
            </div>;
  }

  return (
    <div className="section">
      <h3>Reclamos</h3>
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Síntoma 1</th>
            <th>Síntoma 2</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody className={datosReclamos.length > 5 ? 'scrollable' : ''}>
          {datosReclamos.map((reclamo, index) => (
            <tr key={index}>
              <td>{reclamo.orden || "No disponible"}</td>
              <td>{reclamo.sintoma1 || "No disponible"}</td>
              <td>{reclamo.sintoma2 || "No disponible"}</td>
              <td>{reclamo.fechaCreacion || "No disponible"}</td>
              <td>{reclamo.fechaCierre || "No disponible"}</td>
              <td>{reclamo.estado || "No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reclamos;
