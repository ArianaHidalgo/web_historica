import React, { useState, useEffect } from 'react';
import { obtenerNotasCredito } from '../api';

function NotasCredito({ direccionSeleccionada, tipoCliente }) {
  const [notasCredito, setNotasCredito] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarNotasCredito = async () => {
      if (!direccionSeleccionada || !tipoCliente) {
        console.log("Esperando direccionSeleccionada y tipoCliente antes de cargar notas de crédito.");
        return;
      }

      try {
        setLoading(true);
        const notasData = await obtenerNotasCredito(direccionSeleccionada.rut, tipoCliente);
        setNotasCredito(notasData);
      } catch (err) {
        console.error("Error en cargarNotasCredito de NotasCredito.js:", err);
        setError("No se pudieron cargar las notas de crédito");
      } finally {
        setLoading(false);
      }
    };

    cargarNotasCredito();
  }, [direccionSeleccionada, tipoCliente]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Cargando notas de crédito...</div>;
  }

  if (notasCredito.length === 0) {
    return <div>No hay datos de notas de crédito disponibles</div>;
  }

  return (
    <div className="section">
      <h3>Notas de Crédito</h3>
      <table>
        <thead>
          <tr>
            <th>Folio Ajustado</th>
            <th>Fecha</th>
            <th>Valor</th>
            <th>Motivo Ajuste</th>
          </tr>
        </thead>
        <tbody>
          {notasCredito.map((nota, index) => (
            <tr key={index}>
              <td>{nota.folioAjustado || "No disponible"}</td>
              <td>{nota.fecha || "No disponible"}</td>
              <td>{nota.valor || "No disponible"}</td>
              <td>{nota.motivoAjuste || "No disponible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotasCredito;
