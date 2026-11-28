import { data } from "react-router-dom";
import { clients } from "./clients";

// const dataNormalizada = json.products.map(
// (item) => ({
// id: String(item.id),
// nombre: item.title,
// precio: item.price,
// categoria: item.category,
// stock: item.stock
// })
// );

export const dummyJsonService = {
  async getAll(query, signal) {
    const json = await clients.dummy.get(
      "/products",
      { signal }
    );
    const dataNormalizada = json.products.map(
    (item) => ({
      id: String(item.id),
      nombre: item.title,
      precio: item.price,
      categoria: item.category,
      stock: item.stock
    })
  );

    return dataNormalizada;
  },

  // Consultar un producto por ID
  async getById(id, signal) {
    return await clients.dummy.get(`/products/${id}`, { signal });
  },

  // Buscar productos
  async search(query, signal) {
    const res = await clients.dummy.get(
      `/products/search?q=${encodeURIComponent(query)}`,
      { signal }
    );

    return res.products;
  },

  // Consultar categorías
  async getCategories(signal) {
    return await clients.dummy.get("/products/categories", { signal });
  },

  // Consultar productos por categoría
  async getByCategory(category, signal) {
    const res = await clients.dummy.get(
      `/products/category/${encodeURIComponent(category)}`,
      { signal }
    );

    return res.products;
  },
};
