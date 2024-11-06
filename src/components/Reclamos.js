import React from 'react';

function Reclamos({ direccionSeleccionada }) {
  const contenidoReclamos = {
    1: (
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Comentario 1</th>
            <th>Comentario 2</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12548</td>
            <td>02-03-2018</td>
            <td>03-10-2020</td>
            <td>Registro de actividades realizadas</td>
            <td>Registro cambio direccion</td>
            <td>Cerrado</td>
          </tr>
          <tr>
            <td>14587</td>
            <td>02-03-2018</td>
            <td>--</td>
            <td>Registro cambio de dirección</td>
            <td>--</td>
            <td>Abierto</td>
          </tr>
        </tbody>
      </table>
    ),
    2: (
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
            <td>57826</td>
            <td>Registro de actividades realizadas</td>
            <td>02-03-2018</td>
            <td>03-10-2020</td>
            <td>Cerrado</td>
          </tr>
          <tr>
            <td>58493</td>
            <td>Consulta sobre servicio</td>
            <td>15-04-2023</td>
            <td>--</td>
            <td>Abierto</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="section">
      <h3>Reclamos</h3>
      <div>{contenidoReclamos[direccionSeleccionada]}</div>
    </div>
  );
}

export default Reclamos;


