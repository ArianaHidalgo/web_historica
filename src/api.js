// src/api.js
import { API_BASE_URL } from './config';

// Función para obtener `rutCliente` desde los parámetros de la URL
const obtenerRutDesdeUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('rutCliente'); // Busca el parámetro `rutCliente` en la URL
};

// Función para obtener datos de direcciones con lógica para `rutCliente`
export const obtenerDatos = async (rutCliente) => {
  try {
    // Usa `rutCliente` proporcionado, o intenta obtenerlo desde la URL
    const rut = rutCliente || obtenerRutDesdeUrl();

    if (!rut) throw new Error('rutCliente no está disponible ni en el payload ni en la URL');

    const response = await fetch(`${API_BASE_URL}/ms-get-direccion-proj/ms-get-direcciones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ param: rut })
    });

    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);

    const data = await response.json();

    const parsedMessage = Array.isArray(data.message) ? data.message : JSON.parse(data.message);

    return parsedMessage;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

// Función para obtener datos de reclamos con `tipoCliente`
export const obtenerReclamos = async (rutCliente, tipoCliente) => {
  try {
    // Usa `rutCliente` proporcionado, o intenta obtenerlo desde la URL
    const rut = rutCliente || obtenerRutDesdeUrl();

    if (!rut) throw new Error('rutCliente no está disponible ni en el payload ni en la URL');
    if (!tipoCliente) throw new Error('tipoCliente no está disponible para obtener los reclamos');

    console.log("Enviando solicitud a obtenerReclamos con:", { rut, tipoCliente });

    const response = await fetch(`${API_BASE_URL}/ms-get-reclamo-proj/ms-get-reclamos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        rut: rut,
        cliente: tipoCliente // Usa `tipoCliente` recibido como argumento
      })
    });

    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);

    const data = await response.json();
    const parsedMessage = Array.isArray(data.message) ? data.message : JSON.parse(data.message);

    return parsedMessage;
  } catch (error) {
    console.error("Error en obtenerReclamos:", error);
    throw error;
  }
};

// Función para obtener productos con `rutCliente` y `tipoCliente`
export const obtenerProductos = async (rutCliente, tipoCliente) => {
  try {
    // Usa `rutCliente` proporcionado, o intenta obtenerlo desde la URL
    const rut = rutCliente || obtenerRutDesdeUrl();

    if (!rut) throw new Error('rutCliente no está disponible ni en el payload ni en la URL');
    if (!tipoCliente) throw new Error('tipoCliente no está disponible para obtener los productos');

    console.log("Enviando solicitud a obtenerProductos con:", { rut, tipoCliente });

    const response = await fetch(`${API_BASE_URL}/ms-get-producto-proj/ms-get-productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        rut: rut,
        cliente: tipoCliente
      }),
    });

    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);

    const data = await response.json();
    const parsedMessage = Array.isArray(data.message) ? data.message : JSON.parse(data.message);

    return parsedMessage;
  } catch (error) {
    console.error("Error en obtenerProductos:", error);
    throw error;
  }
};

// Función para obtener productos adicionales con `rutCliente` y `tipoCliente`
export const obtenerProductosAdicionales = async (rutCliente, tipoCliente) => {
  try {
    // Usa `rutCliente` proporcionado, o intenta obtenerlo desde la URL
    const rut = rutCliente || obtenerRutDesdeUrl();

    if (!rut) throw new Error('rutCliente no está disponible ni en el payload ni en la URL');
    if (!tipoCliente) throw new Error('tipoCliente no está disponible para obtener los productos adicionales');

    console.log("Enviando solicitud a obtenerProductosAdicionales con:", { rut, tipoCliente });

    const response = await fetch(`${API_BASE_URL}/ms-get-prod-adicional-proj/ms-get-productos-adicionales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        rut: rut,
        cliente: tipoCliente
      }),
    });

    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);

    const data = await response.json();
    const parsedMessage = Array.isArray(data.message) ? data.message : JSON.parse(data.message);

    return parsedMessage;
  } catch (error) {
    console.error("Error en obtenerProductosAdicionales:", error);
    throw error;
  }
};
