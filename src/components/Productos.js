import React from 'react';

function Productos({ direccionSeleccionada }) {
  const contenidoProductos = {
    1: (
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Estado</th>
            <th>Fecha de Alta</th>
            <th>Fecha de Baja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fono limitado 600 Móvil</td>
            <td>Activo</td>
            <td>24-12-2016</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Internet 100MB</td>
            <td>Activo</td>
            <td>15-01-2017</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    ),
    2: (
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Estado</th>
            <th>Fecha de Alta</th>
            <th>Fecha de Baja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fono ilimitado 500 Móvil</td>
            <td>Activo</td>
            <td>01-02-2018</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Internet 50MB</td>
            <td>Inactivo</td>
            <td>20-03-2018</td>
            <td>20-03-2022</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="section">
      <h3>Productos</h3>
      <div>{contenidoProductos[direccionSeleccionada]}</div>
    </div>
  );
}

export default Productos;
