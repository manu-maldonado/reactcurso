import { clients } from "./clients";

// Normaliza la respuesta para que la UI siempre reciba el mismo formato
const normalize = (r) => ({
  id: r.id ?? 0,
  userId: r.userId ?? 0,
  title: r.title ?? '',
  body: r.body ?? '',
});

export const placeHolderUpdateServices = {
  //Actualización de elementos
  async update(id, datos,signal) {
    const res = await clients.jsonplaceholder.put(
      `/posts/1`,
      datos,
      { signal }
    );
    
    return normalize(res);
  }
};