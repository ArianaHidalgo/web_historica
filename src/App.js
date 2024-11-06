import React, { useState, useEffect } from 'react';
import './App.css';
import Direccion from './components/Direccion';
import Reclamos from './components/Reclamos';
import Productos from './components/Productos';
import ProductosAdicionales from './components/ProductosAdicionales';
import OrdenesTecnicas from './components/OrdenesTecnicas';
import NotasCredito from './components/NotasCredito';
import OrdenesComerciales from './components/OrdenesComerciales';
import { obtenerDatos, obtenerReclamos } from './api';

function App() {
  const [direccionSeleccionada, setDireccionSeleccionada] = useState(null);
  const [datosCliente, setDatosCliente] = useState([]);
  const [datosReclamosPrueba, setDatosReclamosPrueba] = useState([]); // Estado para los datos de prueba de reclamos
  const [error, setError] = useState(null);

  // Carga los datos del cliente
  useEffect(() => {
    const cargarDatosCliente = async () => {
      try {
        const clienteData = await obtenerDatos();
        setDatosCliente(clienteData);
      } catch (error) {
        setError("Error al cargar datos del cliente.");
        console.error("Error al cargar datos del cliente:", error);
      }
    };

    cargarDatosCliente();
  }, []);

  // Prueba de obtenerReclamos directamente en App.js
  useEffect(() => {
    const cargarReclamosPrueba = async () => {
      try {
        console.log("Llamando a obtenerReclamos desde App.js para prueba...");
        const reclamosData = await obtenerReclamos();
        console.log("Datos obtenidos en App.js:", reclamosData); // Imprime los datos en la consola
        setDatosReclamosPrueba(reclamosData);
      } catch (error) {
        console.error("Error al cargar reclamos desde App.js:", error);
        setError("Error al cargar datos de reclamos.");
      }
    };

    cargarReclamosPrueba();
  }, []);

  const cambiarDireccion = (selectedDireccion) => {
    setDireccionSeleccionada(selectedDireccion);
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h2>Información del Cliente</h2>

      {/* Componente Direccion para mostrar la tabla de direcciones */}
      <Direccion datosCliente={datosCliente} />

      {/* Prueba: Muestra los datos de reclamos directamente en App.js */}
      <div className="section">
        <h3>Datos de Reclamos</h3>
        {datosReclamosPrueba.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Orden</th>
                <th>Fecha inicio</th>
                <th>Fecha fin </th>
                <th>Comentario 1</th>
                <th>Comentario 2</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {datosReclamosPrueba.map((reclamo, index) => (
                <tr key={index}>
                  <td>{reclamo.orden || "No disponible"}</td>
                  <td>{reclamo.sintoma1 || "No disponible"}</td>
                  <td>{reclamo.sintoma2 || "No disponible"}</td>
                  <td>{reclamo.fechaCreacion || "No disponible"}</td>
                  <td>{reclamo.fechaCierre || "No disponible"}</td>
                  <td>{reclamo.estado || "No disponible"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay datos de reclamos disponibles</p>
        )}
      </div>

      {/* Otros componentes que pueden depender de la dirección seleccionada */}
      <div className="row">
        <Reclamos direccionSeleccionada={direccionSeleccionada} />
      </div>

      <div className="row">
        <Productos direccionSeleccionada={direccionSeleccionada} />
        <ProductosAdicionales direccionSeleccionada={direccionSeleccionada} />
      </div>

      <div className="row">
        <OrdenesTecnicas direccionSeleccionada={direccionSeleccionada} />
        <NotasCredito direccionSeleccionada={direccionSeleccionada} />
      </div>

      <div className="row">
        <OrdenesComerciales direccionSeleccionada={direccionSeleccionada} />
      </div>
    </div>
  );
}

export default App;
