import { clients } from "./clients";

export const jsonPlaceholderService = {

  // Obtener todos los posts (LIST)
  getAll: (signal) =>
    clients.jsonPlaceholder.get("/posts", { signal }),

  // Obtener un post por ID (GET)
  getById: (id, signal) =>
    clients.jsonPlaceholder.get(`/posts/${id}`, { signal }),

  // Crear un post (CREATE)
  create: (payload) =>
    clients.jsonPlaceholder.post("/posts", payload),

  // Actualizar un post (UPDATE)
  update: (id, payload) =>
    clients.jsonPlaceholder.put(`/posts/${id}`, payload),

  // Eliminar un post (DELETE)
  remove: (id) =>
    clients.jsonPlaceholder.delete(`/posts/${id}`),

  // Filtrar posts por usuario (FILTER)
  filterByUser: (userId, signal) =>
    clients.jsonPlaceholder.get(
      `/posts?userId=${encodeURIComponent(userId)}`,
      { signal }
    ),

};