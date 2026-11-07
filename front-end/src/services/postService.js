
import { clients } from "./clients";

export const postService = {

  // GET: Obtener una publicación por ID
  async obtenerPosts(id = 1) {
    const respuesta = await clients.search.get(`/posts/${id}`);
    return [respuesta];
  },

  // LIST: Obtener todas las publicaciones
  listarPosts() {
    return clients.search.get("/posts");
  },

  // POST: Crear publicación
  crearPost(datos) {
    return clients.search.post("/posts", datos);
  },

};