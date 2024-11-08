import React, { useState, useEffect } from 'react';
import './App.css';
import Direccion from './components/Direccion';
import Reclamos from './components/Reclamos';
import Productos from './components/Productos';
import ProductosAdicionales from './components/ProductosAdicionales';
import OrdenesTecnicas from './components/OrdenesTecnicas';
import NotasCredito from './components/NotasCredito';
import OrdenesComerciales from './components/OrdenesComerciales';
import SuspensionVoluntaria from './components/SuspensionVoluntaria';
import { obtenerDatos } from './api';

function App() {
  const [direccionSeleccionada, setDireccionSeleccionada] = useState(null);
  const [datosCliente, setDatosCliente] = useState([]);
  const [tipoCliente, setTipoCliente] = useState(null); // Estado para tipoCliente
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatosCliente = async () => {
      try {
        const clienteData = await obtenerDatos();
        setDatosCliente(clienteData);
        setTipoCliente(clienteData[0]?.tipoCliente || null);
      } catch (error) {
        setError("Error al cargar datos del cliente.");
        console.error("Error al cargar datos del cliente:", error);
      }
    };

    cargarDatosCliente();
  }, []);

  const cambiarDireccion = (selectedDireccion) => {
    setDireccionSeleccionada(selectedDireccion);
    setTipoCliente(selectedDireccion.tipoCliente); // Actualiza `tipoCliente` basado en la dirección seleccionada
    console.log("Dirección seleccionada:", selectedDireccion);
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h2>Información del Cliente Rut: 19.123.345-k <span>(Fecha de Migración: 01-10-2023)</span></h2>
      <Direccion datosCliente={datosCliente} onDireccionSeleccionada={cambiarDireccion} />
      <div className="row">
        <Reclamos direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
      </div>
      <div className="row">
        <Productos direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
        <ProductosAdicionales direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
      </div>
      <div className="row">
        <OrdenesTecnicas direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
        <NotasCredito direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
      </div>
      <div className="row">
        <OrdenesComerciales direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
        <SuspensionVoluntaria direccionSeleccionada={direccionSeleccionada} />
      </div>
    </div>
  );
}

export default App;
