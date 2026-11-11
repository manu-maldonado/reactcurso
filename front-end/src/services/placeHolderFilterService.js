import { clients } from "./clients";

// Normaliza la respuesta para que la UI siempre reciba el mismo formato
const normalize = (r,index) => ({
  id: r.id ?? index +1,
  userId: r.userId ?? 0,
  title: r.title ?? '',
  body: r.body ?? '',
});

const responseUnpack = (res) => {
  return Array.isArray(res) ? res : [];
};

export const placeHolderFilterServices = {
 
  //Consulta una lista de elementos
  async getListFiltered(signal) {
    const res = await clients.jsonplaceholder.get(
      "/posts?_limit=10",
      { signal }
    );
    const data = responseUnpack(res);
    return data.map((item, index) => 
        normalize(item, index)
    )
  }
};