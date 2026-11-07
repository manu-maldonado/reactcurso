import { clients } from "../../services/clients";

export const postsService = {
  async getById(id,signal){
    const res = await clients.placeholder.get(`/posts/${id}`, { signal });
    return res;
  },
  async getAll(signal) {
    const res = await clients.placeholder.get("/posts", { signal });
    return res;
  },

  async create(data, signal) {
    const res = await clients.placeholder.post("/posts", data, { signal });
    return res;
  },

  async delete(id, signal) {
    const res = await clients.placeholder.delete(`/posts/${id}`, { signal });
    return res;
  },
};
