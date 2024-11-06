import React from 'react';

function SuspensionVoluntaria({ direccionSeleccionada }) {
  const contenido = {
    1: (
      <table>
        <thead>
          <tr>
            <th>Fecha Solicitud</th>
            <th>Estado</th>
            <th>Fecha Inicio Suspensión</th>
            <th>Fecha React Servicio</th>
            <th>Observación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11/08/2024</td>
            <td>Cerrado</td>
            <td>03/07/2024</td>
            <td>15/08/2024</td>
            <td>Cerrado</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="sub">
      <h3>Suspensión Voluntaria</h3>
      <div>{contenido[direccionSeleccionada]}</div>
    </div>
  );
}

export default SuspensionVoluntaria;
