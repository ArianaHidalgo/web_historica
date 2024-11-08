import React, { useEffect, useState } from 'react';
import { obtenerReclamos } from '../api';

function Reclamos({ direccionSeleccionada }) {
  const [datosReclamos, setDatosReclamos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarReclamos = async () => {
      try {
        setLoading(true);
        console.log("Ejecutando cargarReclamos en Reclamos.js");

        const reclamos = await obtenerReclamos();
        console.log("Datos obtenidos en Reclamos.js:", reclamos);

        if (reclamos && Array.isArray(reclamos) && reclamos.length > 0) {
          setDatosReclamos(reclamos);
          setError(null);
        } else {
          setDatosReclamos([]);
          setError("No hay datos de reclamos disponibles");
        }
      } catch (err) {
        console.error("Error en cargarReclamos de Reclamos.js:", err);
        setError("No se pudieron cargar los reclamos");
      } finally {
        setLoading(false);
      }
    };

    if (direccionSeleccionada) {
      console.log("Dirección seleccionada detectada, llamando a cargarReclamos...");
      console.log("Direccion seleccionada:", direccionSeleccionada); // Verifica el valor de la dirección seleccionada
      cargarReclamos();
    } else {
      console.log("No hay dirección seleccionada");
      setLoading(false);
    }
  }, [direccionSeleccionada]);

  console.log("Estado final de datosReclamos en render:", datosReclamos);

  // Renderizado condicional
  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Cargando reclamos...</div>;
  }

  if (!direccionSeleccionada) {
    return <div>Seleccione una dirección para ver los reclamos.</div>;
  }

  if (datosReclamos.length === 0) {
    return <div>No hay datos de reclamos disponibles</div>;
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
        <tbody>
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
