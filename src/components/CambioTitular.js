import React from 'react';

function CambioTitular({ direccionSeleccionada }) {
  const contenido = {
    1: (
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Descripción</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>Cambio titular de Ana Torres</td>
            <td>04/10/2024</td>
            <td>12/10/2024</td>
            <td>Cerrado</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="sub">
      <h3>Cambio Titular</h3>
      <div>{contenido[direccionSeleccionada]}</div>
    </div>
  );
}

export default CambioTitular;
