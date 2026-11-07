import { clients } from "./clients";

/** Normaliza un resultado de búsqueda al shape que consume la UI
 * payload - normalize
 */
const normalize = (r, index) => ({

});

const responseUnpack = (res) => {
    return res ?? {};
};

export const placeHolderServices = {
    async get(id, signal) {
        const res = await clients.jsonplaceholder.get(
            `/posts/${id}`,
            {}
        );

        return res;
    }
};