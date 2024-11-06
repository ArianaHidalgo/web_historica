import React from 'react';

function ProductosAdicionales({ direccionSeleccionada }) {
  const contenidoProductosAdicionales = {
    1: (
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Fecha-alta</th>
            <th>Fecha-baja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paramount+</td>
            <td>Activo</td>
            <td>0</td>
            <td>15-01-2022</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Deco HD Adicional</td>
            <td>Activo</td>
            <td>$3000</td>
            <td>18-03-2021</td>
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
            <th>Precio</th>
            <th>Fecha-alta</th>
            <th>Fecha-baja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Descuento $12000 x 6 meses</td>
            <td>Activo</td>
            <td>12,000</td>
            <td>11-08-2023</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="section">
      <h3>Productos Adicionales</h3>
      <div>{contenidoProductosAdicionales[direccionSeleccionada]}</div>
    </div>
  );
}

export default ProductosAdicionales;
