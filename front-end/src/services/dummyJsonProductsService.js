
import { clients } from "./clients";

// Servicio para consultar productos de DummyJSON
export const dummyJsonProductsService = {

    // Obtener la lista de productos
    getProducts: async ({ limit = 10, skip = 0, signal } = {}) => {
        const data = await clients.dummyjson.get(
            `/products?limit=${limit}&skip=${skip}`,
            { signal }
        );
        return data.products;
    },

    // Obtener un producto por su identificador
    getProductById: async (id, { signal } = {}) => {

        return await clients.dummyjson.get(
            `/products/${id}`,
            { signal }
        );
    }
};
