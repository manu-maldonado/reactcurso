import { clients } from "./clients";

export const placeHolderDeleteServices = {
 
  //Elimina un elemento
  async delete(id, signal) {
    const res = await clients.jsonplaceholder.delete(
      `/posts/1`,
      { signal }
    );
    return res;
  }
};
    