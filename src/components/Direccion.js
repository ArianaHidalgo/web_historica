// src/components/Direccion.js
import React from 'react';

const Direccion = ({ datosCliente }) => {
  console.log("datosCliente recibido en Direccion:", datosCliente); // Verifica el valor en el renderizado

  // Condicional para verificar si hay datos
  if (Array.isArray(datosCliente) && datosCliente.length > 0) {
    // Renderiza la tabla si datosCliente tiene elementos
    return (
      <div>
        <h3>Direcciones</h3>
        <table>
          <thead>
            <tr>
              <th>Dirección</th>
              <th>Tipo de Cliente</th>
              <th>Plan Contratado</th>
            </tr>
          </thead>
          <tbody>
            {datosCliente.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.direccion || "No disponible"}</td>
                <td>{cliente.tipoCliente || "No disponible"}</td>
                <td>{cliente.planContratado || "No disponible"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    // Muestra el mensaje si datosCliente está vacío o no es un array
    console.log("No hay datos en datosCliente o no es un array."); // Log para confirmar la razón
    return <div>No hay datos disponibles</div>;
  }
};

export default Direccion;
