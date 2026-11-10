import { clients } from "./clients";

// Normaliza la respuesta para que la UI siempre reciba el mismo formato
const normalize = (r) => ({
  id: r.id ?? 0,
  userId: r.userId ?? 0,
  title: r.title ?? '',
  body: r.body ?? '',
});

export const placeHolderCreateServices = {
    async create(datos, signal) {
    const res = await clients.jsonplaceholder.post("/posts", datos, { signal }); 
    
    return normalize(res);
  }
};