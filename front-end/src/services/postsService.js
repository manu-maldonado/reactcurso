import { clients } from "./clients";

export const postsService = {
  async getAll(signal) {
    return clients.jsonplaceholder.get("/posts", { signal });
  },

  async obtener(id, signal) {
    return clients.jsonplaceholder.get(`/posts/${id}`, { signal });
  },

  async crear(post) {
    return clients.jsonplaceholder.post("/posts", post);
  },

   async actualizar(id, post) {
    return clients.jsonplaceholder.put(`/posts/${id}`, { ...post, id });
  },

  async eliminar(id) {
    return clients.jsonplaceholder.delete(`/posts/${id}`);
  },

  async porUsuario(userId, signal) {
    return clients.jsonplaceholder.get(`/posts?userId=${userId}`, { signal });
  },
};