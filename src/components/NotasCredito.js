import React from 'react';

function NotasCredito({ direccionSeleccionada }) {
  const contenidoNotasCredito = {
    1: (
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
          <tr>
            <td>235688</td>
            <td>06-06-2021</td>
            <td>$6,500</td>
            <td>COBRÓ DÍAS SIN SERVICIO</td>
          </tr>
          <tr>
            <td>568741</td>
            <td>11-08-2021</td>
            <td>$25,000</td>
            <td>COBRÓ DÍAS SIN SERVICIO</td>
          </tr>
        </tbody>
      </table>
    ),
    2: (
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
          <tr>
            <td>123456</td>
            <td>05-01-2023</td>
            <td>$45,520</td>
            <td>COBRÓ DÍAS SIN SERVICIO</td>
          </tr>
          <tr>
            <td>789123</td>
            <td>08-11-2021</td>
            <td>$50,000</td>
            <td>COBRÓ DÍAS SIN SERVICIO</td>
          </tr>
          <tr>
            <td>852368</td>
            <td>15-02-2020</td>
            <td>$45,520</td>
            <td>COBRÓ DÍAS SIN SERVICIO</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="section">
      <h3>Notas de Crédito</h3>
      <div>{contenidoNotasCredito[direccionSeleccionada]}</div>
    </div>
  );
}

export default NotasCredito;
