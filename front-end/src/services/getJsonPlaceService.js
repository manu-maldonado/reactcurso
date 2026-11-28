import { clients } from "./clients";   // ⬅️ respeta el case exacto del archivo

/** Normaliza un resultado de búsqueda al shape que consume la UI */
const normalize = (r, index) => ({
  // id: usa el del API o el url como fallback (url es único por resultado)
  //userId:r.id ?? r.url ?? `result-${index}`,
  userId: r.userId ?? r.id ?? `result-${index}`,
  id: r.id ?? r.url ?? `result-${index}`,
  title: r.title ?? "(sin título)",
  body: r.body ?? "(Sin body)",
});

const normalizeComment = (comment) => ({
  id: comment.id,
  postId: comment.postId,
  name: comment.name ?? "(sin nombre)",
  email: comment.email ?? "(sin correo)",
  body: comment.body ?? "(sin comentario)",
});

/** Acepta array directo o envoltorios comunes: { data } / { results } / { items } */
const unpack = (res) => {
  if (Array.isArray(res)) return res;
  return res?.data ?? res?.results ?? res?.items ?? [];
};

export const getJsonPlaceService = {

   async get(id, signal){
        const res = await clients.search.get(
            `/posts/${id}`,
            {}
        )  
        return res
    },    
 
  async search(query, signal) {
    const res = await clients.search.get(
      `/posts/1`,
      { }    
      //  const res = await clients.search.get(
      // `/posts/${id}`,
      // { }                                // body (el cliente hace JSON.stringify)
    );
    //return unpack(res).map(normalize);
    return res
  },

  async list(query,signal) { 
    const res = await clients.search.get(
      "/posts",
      {}
    );
    return unpack(res).map(normalize);
    
  },

  async create(objeto, signal) {
  const res = await clients.search.post(
    "/posts",
    objeto,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      signal,
    }
  );

  return normalize(res);
},

async update(id, objeto, signal) {
  const res = await clients.search.put(
    `/posts/${id}`,
    objeto,
    { signal }
  );

  return normalize(res);
},

async patch(id, cambios, objetoOriginal, signal) {
  const res = await clients.search.patch(
    `/posts/${id}`,
    cambios,
    { signal }
  );

  return normalize(
    { ...objetoOriginal, ...res },
    0
  );
},

async delete(id, signal) {
  const res = await clients.search.delete(
    `/posts/${id}`,
    { signal }
  );

  return res;
},

async filter(filtros, signal) {
  const parametros = new URLSearchParams(filtros).toString();

  const res = await clients.search.get(
    `/posts?${parametros}`,
    { signal }
  );

  return unpack(res).map(normalize);
},

async commentsByPost(id, signal) {
  const res = await clients.search.get(
    `/posts/${id}/comments`,
    { signal }
  );

  return unpack(res).map(normalizeComment);
},

  /** Wrapper search */
  async getAll(signal) {
    return getJsonPlace.search(signal);
  },
  
};