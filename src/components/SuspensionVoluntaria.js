import React, { useState, useEffect } from 'react';
import { obtenerSuspensiones } from '../api';

function SuspensionVoluntaria({ direccionSeleccionada }) {
  const [suspensiones, setSuspensiones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarSuspensiones = async () => {
      if (!direccionSeleccionada) {
        console.log("Esperando direccionSeleccionada antes de cargar suspensiones.");
        return;
      }

      try {
        setLoading(true);
        const suspensionesData = await obtenerSuspensiones(direccionSeleccionada.rut);
        setSuspensiones(suspensionesData);
      } catch (err) {
        console.error("Error en cargarSuspensiones de SuspensionVoluntaria.js:", err);
        setError("No se pudieron cargar las suspensiones");
      } finally {
        setLoading(false);
      }
    };

    cargarSuspensiones();
  }, [direccionSeleccionada]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div></div>;
  }

  if (suspensiones.length === 0) {
    return <div>No hay datos de suspensiones disponibles</div>;
  }

  return (
    <div className="section">
      <h3>Suspensión Voluntaria</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha Solicitud</th>
            <th>Estado</th>
            <th>Fecha Inicio Suspensión</th>
            <th>Fecha Reactivación Servicio</th>
            <th>Observación</th>
          </tr>
        </thead>
        <tbody>
          {suspensiones.map((suspension, index) => (
            <tr key={index}>
              <td>{suspension.fechaSolicitud || "No disponible"}</td>
              <td>{suspension.estado || "No disponible"}</td>
              <td>{suspension.fechaInicioSuspension || "No disponible"}</td>
              <td>{suspension.fechaReactivacionServicio || "No disponible"}</td>
              <td>{suspension.observacion || "No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SuspensionVoluntaria;
