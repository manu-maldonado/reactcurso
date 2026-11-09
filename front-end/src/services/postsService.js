import { clients } from "./clients";

export const postsService = {

    // GET: Obtener una publicación por ID
    async get(id, signal) {
        return await clients.jsonplaceholder.get(
            `/posts/${id}`,
            { signal }
        );
    },

    // LIST: Obtener todas las publicaciones
    async list(signal) {
        return await clients.jsonplaceholder.get(
            "/posts",
            { signal }
        );
    },

    // CREATE: Crear una publicación
    async create(post) {
        return await clients.jsonplaceholder.post(
            "/posts",
            post
        );
    },

    // UPDATE: Actualizar una publicación
    async update(id, post) {
        return await clients.jsonplaceholder.put(
            `/posts/${id}`,
            post
        );
    },

    // DELETE: Eliminar una publicación
    async delete(id) {
        return await clients.jsonplaceholder.delete(
            `/posts/${id}`
        );
    },

    // FILTER: Filtrar publicaciones por usuario
    async filter(userId, signal) {
        return await clients.jsonplaceholder.get(
            `/posts?userId=${encodeURIComponent(userId)}`,
            { signal }
        );
    }

};