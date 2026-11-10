import { clients } from "./clients";

// Normaliza la respuesta para que la UI siempre reciba el mismo formato
const normalize = (r,index) => ({
  
});

const responseUnpack = (res) => {
  return res ?? {};
};

export const placeHolderServices = {
  async get(query, signal) {
    const res = await clients.jsonplaceholder.get(
      "/posts/4",
      {},
      
    );

    return res;
  },
};