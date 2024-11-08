import React, { useState } from 'react';

const Direccion = ({ datosCliente, onDireccionSeleccionada }) => {
  // Estado para el índice de la fila seleccionada
  const [activeIndex, setActiveIndex] = useState(null);

  if (Array.isArray(datosCliente) && datosCliente.length > 0) {
    return (
      <div className="section">
        <h3>Direcciones</h3>
        <table>
          <thead>
            <tr>
              <th>Dirección</th>
              <th>Tipo de Cliente</th>
              <th>Plan Contratado</th>
            </tr>
          </thead>
          <tbody className={datosCliente.length > 5 ? 'scrollable' : ''}>
            {datosCliente.map((cliente, index) => (
              <tr
                key={index}
                className={`selectable ${activeIndex === index ? 'active' : ''}`}
                onClick={() => {
                  onDireccionSeleccionada(cliente);
                  setActiveIndex(index); // Actualiza el índice activo
                }}
                style={{ cursor: "pointer" }}
              >
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
    return (
      <div className="section">
        <h3>
          Cargando datos... 
        </h3>
      </div>
    );
  }
};

export default Direccion;
