import React, { useState, useEffect } from 'react';
import './App.css';
import Direccion from './components/Direccion';
import Reclamos from './components/Reclamos';
import Productos from './components/Productos';
import ProductosAdicionales from './components/ProductosAdicionales';
import OrdenesTecnicas from './components/OrdenesTecnicas';
import NotasCredito from './components/NotasCredito';
import OrdenesComerciales from './components/OrdenesComerciales';
import { obtenerDatos } from './api';

function App() {
  const [direccionSeleccionada, setDireccionSeleccionada] = useState(null);
  const [datosCliente, setDatosCliente] = useState([]);
  const [error, setError] = useState(null);

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

  const cambiarDireccion = (selectedDireccion) => {
    setDireccionSeleccionada(selectedDireccion);
    console.log("Dirección seleccionada:", selectedDireccion); // Log para verificar la dirección seleccionada
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h2>Información del Cliente</h2>

      {/* Pasa cambiarDireccion a Direccion como onDireccionSeleccionada */}
      <Direccion datosCliente={datosCliente} onDireccionSeleccionada={cambiarDireccion} />

      {/* Otros componentes que dependen de la dirección seleccionada */}
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
