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
        cliente: tipoCliente
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

// Función para obtener órdenes técnicas con `rutCliente` y `tipoCliente`
export const obtenerOrdenesTecnicas = async (rutCliente, tipoCliente) => {
  try {
    const rut = rutCliente || obtenerRutDesdeUrl();
    if (!rut) throw new Error('rutCliente no está disponible ni en el payload ni en la URL');
    if (!tipoCliente) throw new Error('tipoCliente no está disponible para obtener las órdenes técnicas');

    console.log("Enviando solicitud a obtenerOrdenesTecnicas con:", { rut, tipoCliente });

    const response = await fetch(`${API_BASE_URL}/ms-get-orden-tecnica-proj/ms-get-ordenes-tecnicas`, {
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
    console.error("Error en obtenerOrdenesTecnicas:", error);
    throw error;
  }
};

// Función para obtener notas de crédito con `rutCliente` y `tipoCliente`
export const obtenerNotasCredito = async (rutCliente, tipoCliente) => {
  try {
    const rut = rutCliente || obtenerRutDesdeUrl();
    if (!rut) throw new Error('rutCliente no está disponible ni en el payload ni en la URL');
    if (!tipoCliente) throw new Error('tipoCliente no está disponible para obtener las notas de crédito');

    console.log("Enviando solicitud a obtenerNotasCredito con:", { rut, tipoCliente });

    const response = await fetch(`${API_BASE_URL}/ms-get-nota-credito-proj/ms-get-notas-credito`, {
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
    console.error("Error en obtenerNotasCredito:", error);
    throw error;
  }
};
