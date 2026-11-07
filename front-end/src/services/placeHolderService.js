import { clients } from './clients'; // ⬅️ respeta el case exacto del archivo/** Normaliza un resultado de búsqueda al shape que consume la UI */

const normalize = (r, index) => ({
  id: r.id,
  title: r.title,
  body: r.body,
  userId: r.userId,
});

/** Acepta array directo o envoltorios comunes: { data } / { results } / { items } */
const responseUnpack = (res) => {
  //   if (Array.isArray(res)) res?.data ?? res?.results ?? res?.items ?? [];
  const data = res?.data ?? res;

  if (Array.isArray(data)) return data;

  return res ?? data?.results ?? data?.items ?? [];
};

export const placeHolderService = {
  async get(id, signal) {
    // haciendo una nueva instancia
    const resGet = await clients.jsonPlaceHolder.get(`/posts/${id}`, {});
    // const resList = await clients.jsonPlaceHolder.get('/posts', {});
    return responseUnpack(resGet);
  },

  async list(query, signal) {
    const resList = await clients.jsonPlaceHolder.get('/posts', {});
    return responseUnpack(resList).map(normalize);
  },
};
