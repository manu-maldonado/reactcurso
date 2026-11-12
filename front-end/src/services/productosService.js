import { clients } from "./clients";
import { HttpError } from "../HttpClient";
import { allProducts } from "../productosMock.js";

const USAR_API = true;

const normalizar = (p) => ({
  id: String(p.id),
  nombre: p.title ?? p.nombre ?? "(sin nombre)",
  precio: p.price ?? p.precio ?? 0,
  stock: p.stock ?? 0,
  categoria: p.category ?? p.categoria ?? "",
  descripcion: p.description ?? p.descripcion ?? "",
  imagen: p.thumbnail ?? p.imagen ?? null,
});

const desdeApi = {
  async getAll(signal) {
    const res = await clients.dummyjson.get("/products?limit=30", { signal });
    return (res?.products ?? []).map(normalizar);
  },

  async obtener(id, signal) {
    const res = await clients.dummyjson.get(`/products/${id}`, { signal });
    return normalizar(res);
  },
};

const desdeMock = {
  async getAll() {
    return allProducts.map(normalizar);
  },

  async obtener(id) {
    const producto = allProducts.find((p) => String(p.id) === String(id));
    if (!producto) throw new HttpError("Producto no encontrado", 404);
    return normalizar(producto);
  },
};

export const productosService = USAR_API ? desdeApi : desdeMock;
