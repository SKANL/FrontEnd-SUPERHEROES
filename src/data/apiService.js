// Servicio para consumir la API (fetch genérico)
import { ENDPOINTS } from '../core/apiEndpoints.js';

export async function getProductos() {
  const res = await fetch(ENDPOINTS.productos);
  if (!res.ok) throw new Error('Error al obtener productos');
  return await res.json();
}
// Puedes agregar más funciones para otros endpoints
