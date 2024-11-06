import React from 'react';

function OrdenesComerciales({ direccionSeleccionada }) {
  const contenidoOrdenesComerciales = {
    1: (
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Canal Venta</th>
            <th>Tipo Orden</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25689</td>
            <td>Online</td>
            <td>Contratación servicio</td>
            <td>11-08-2017</td>
            <td>12-09-2017</td>
          </tr>
        </tbody>
      </table>
    ),
    2: (
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Canal Venta</th>
            <th>Tipo Orden</th>
            <th>Fecha Creación</th>
            <th>Fecha Cierre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25468</td>
            <td>Sucursal</td>
            <td>Consulta</td>
            <td>17-10-2028</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    )
  };

  const contenidoSuspensionVoluntaria = {
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
    2: (
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
            <td>23/10/2024</td>
            <td>Abierta</td>
            <td>03/10/2024</td>
            <td>---</td>
            <td>Cuenta Pendiente</td>
          </tr>
        </tbody>
      </table>
    )
  };

  const contenidoCambioTitular = {
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
            <td>789</td>
            <td>Cambio titular de José López</td>
            <td>05/11/2023</td>
            <td>12/11/2023</td>
            <td>Cerrado</td>
          </tr>
        </tbody>
      </table>
    )
  };

  return (
    <div className="section">
      <h3>Órdenes Comerciales</h3>
      <div>{contenidoOrdenesComerciales[direccionSeleccionada]}</div>

      <div className="sub">
        <h3>Suspensión Voluntaria</h3>
        <div>{contenidoSuspensionVoluntaria[direccionSeleccionada]}</div>
      </div>

      <div className="sub">
        <h3>Cambio Titular</h3>
        <div>{contenidoCambioTitular[direccionSeleccionada]}</div>
      </div>
    </div>
  );
}

export default OrdenesComerciales;
