import React from 'react';

function OrdenesTecnicas({ direccionSeleccionada }) {
  const contenidoOrdenesTecnicas = {
    1: (
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Estado</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2524</td>
            <td>Abierta</td>
            <td>15-08-2018</td>
            <td>--</td>
          </tr>
          <tr>
            <td>2528</td>
            <td>Cerrada</td>
            <td>15-08-2018</td>
            <td>17-08-2024</td>
          </tr>
        </tbody>
      </table>
    ),
    2: (
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Estado</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2529</td>
            <td>Abierta</td>
            <td>15-08-2018</td>
            <td>--</td>
          </tr>
          <tr>
            <td>2530</td>
            <td>Abierta</td>
            <td>15-08-2018</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="section">
      <h3>Órdenes Técnicas</h3>
      <div>{contenidoOrdenesTecnicas[direccionSeleccionada]}</div>
    </div>
  );
}

export default OrdenesTecnicas;
