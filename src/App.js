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
        console.log("Datos obtenidos del API:", clienteData); // Verifica los datos obtenidos
        setDatosCliente(clienteData); // Guarda todos los datos en el estado como array
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setError(error); // Guarda el error en el estado para mostrarlo en la interfaz
      }
    };

    cargarDatosCliente();
  }, []);

  const cambiarDireccion = (selectedDireccion) => {
    setDireccionSeleccionada(selectedDireccion);
  };

  // Verifica el valor de datosCliente en cada renderizado
  console.log("Estado de datosCliente en App:", datosCliente);

  if (error) return <div>Error al cargar datos: {error.message}</div>;
  if (!Array.isArray(datosCliente) || datosCliente.length === 0) return <div>Cargando...</div>;

  return (
    <div className="container">
      <h2>Información del Cliente</h2>

      {/* Componente Direccion para mostrar la tabla de direcciones */}
      <Direccion datosCliente={datosCliente} />

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
