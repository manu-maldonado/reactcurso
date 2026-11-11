import { clients } from "./clients"; 

//GET LIST CREATE UPDATE DELTE DEL API  QUE NOS PUSO EL PROFE DE LA API JSONPLACEHOLDER 

/** Normaliza un resultado de búsqueda al shape que consume la UI */
// const normalize = (r, index) => ({});

// const responseUnpack = (res) => {
//   return res ?? {};
// };

export const PlaceHolderServices = {
  async get(signal) {
    const res = await clients.search.get(`/posts/1`, { signal });
    return res;
  },
};

export const PlaceHolderServicesList = {
 
  async get(signal) {
    const res = await clients.search.get("/posts", { signal });
    return res;
  },
};

export const PlaceHolderServicesCreate = {
  async create(nuevoPost, signal) {
    const res = await clients.search.post("/posts", nuevoPost, { signal });
    return res;
  },
};

export const PlaceHolderServicesUpdate = {
  async update(id, postData, signal) {
    const res = await clients.search.put(`/posts/${id}`, postData, { signal });
    return res;
  },
};

export const PlaceHolderServicesDelete = {
  async remove(id, signal) {
    const res = await clients.search.delete(`/posts/${id}`, { signal });
    return res;
  },
};