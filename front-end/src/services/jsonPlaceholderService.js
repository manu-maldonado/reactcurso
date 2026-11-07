import { clients } from "./clients";

// Normaliza los datos que devuelve JSONPlaceholder.
const normalize = (post) => ({
  userId: post.userId,
  id: post.id,
  title: post.title,
  body: post.body,
});

// Devuelve la respuesta o un valor predeterminado.
const responseUnpack = (res) => res ?? {};

export const jsonPlaceholderService = {
  // GET: obtener una publicación por ID.
  async getById(id, signal) {
    const res = await clients.jsonPlaceholder.get(
      `/posts/${id}`,
      { signal }
    );
    return res ? normalize(res) : null;
  },

  // LIST: obtener todas las publicaciones.
  async getAll(signal) {
    const res = await clients.jsonPlaceholder.get(
      "/posts",
      { signal }
    );
    return res ? res.map(normalize) : [];
  },

  // CREATE: crear una publicación.
  async create(payload) {
    const res = await clients.jsonPlaceholder.post(
      "/posts",
      payload
    );
    return res ? normalize(res) : null;
  },

  // UPDATE: actualizar una publicación.
  async update(id, payload) {
    const res = await clients.jsonPlaceholder.put(
      `/posts/${id}`,
      payload
    );
    return res ? normalize(res) : null;
  },

  // DELETE: eliminar una publicación.
  async remove(id) {
    return clients.jsonPlaceholder.delete(`/posts/${id}`);
  },

  // FILTER: filtrar publicaciones por usuario.
  async filterByUser(userId, signal) {
    const res = await clients.jsonPlaceholder.get(
      `/posts?userId=${encodeURIComponent(userId)}`,
      { signal }
    );
    return res.map(normalize);
  },

  async get(id, signal) {
        const res = await clients.jsonPlaceholder.get(
          `/posts/${id}`,
          { signal }
        );
        return res ? normalize(res) : null;
    }
};
