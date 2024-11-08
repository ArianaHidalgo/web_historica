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
  const [tipoCliente, setTipoCliente] = useState(null); // Estado para tipoCliente
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatosCliente = async () => {
      try {
        const clienteData = await obtenerDatos();
        setDatosCliente(clienteData);

        // Suponiendo que `tipoCliente` es un atributo de `clienteData`
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
      <h2>Información del Cliente</h2>

      {/* Pasa cambiarDireccion a Direccion como onDireccionSeleccionada */}
      <Direccion datosCliente={datosCliente} onDireccionSeleccionada={cambiarDireccion} />

      {/* Otros componentes que dependen de la dirección seleccionada */}
      <div className="row">
        {/* Pasa `tipoCliente` a Reclamos */}
        <Reclamos direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
      </div>

      <div className="row">
        {/* Pasa `tipoCliente` a Productos */}
        <Productos direccionSeleccionada={direccionSeleccionada} tipoCliente={tipoCliente} />
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
