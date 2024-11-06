// src/api.js
import { API_BASE_URL } from './config';

// Función para obtener datos de direcciones
export const obtenerDatos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ms-get-direccion-proj/ms-get-direcciones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `param=8170439-2`, // Envía el parámetro en el cuerpo como x-www-form-urlencoded
    });

    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);

    const data = await response.json();

    // Verifica si "message" ya es un array o necesita ser parseado
    const parsedMessage = Array.isArray(data.message) ? data.message : JSON.parse(data.message);

    return parsedMessage;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

export const obtenerReclamos = async () => {
  try {
    console.log("Iniciando llamada a la API de reclamos...");

    const response = await fetch(`${API_BASE_URL}/ms-get-reclamo-proj/ms-get-reclamos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        rut: '8058969-7',
        cliente: 'Persona'
      })
    });

    console.log("Estado de la respuesta:", response.status, response.statusText);
    
    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    
    const data = await response.json();
    console.log("Datos JSON obtenidos de la API:", data);

    const parsedMessage = Array.isArray(data.message) ? data.message : JSON.parse(data.message);
    console.log("Mensaje parseado:", parsedMessage);

    return parsedMessage;
  } catch (error) {
    console.error("Error en obtenerReclamos:", error);
    throw error;
  }
};