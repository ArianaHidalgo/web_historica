// src/api.js
import { API_BASE_URL } from './config';

// Función para obtener datos
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
