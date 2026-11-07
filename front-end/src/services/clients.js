import { HttpClient } from "../HttpClient";

/**
 * Registro central de clientes HTTP.
 * Un cliente por microservicio. Cada uno con su baseURL.
 * Los services importan de aquí, nunca crean clientes.
 */
export const clients = {
  elcris:     new HttpClient(import.meta.env.VITE_API_URL_ELCRIS    ?? "/api"),
  search:   new HttpClient(import.meta.env.VITE_API_JSONPLACEHOLDER   ?? "/api"),
  auth:     new HttpClient(import.meta.env.VITE_API_AUTH     ?? "/api"),
  jsonplaceholder: new HttpClient(import.meta.env.VITE_API_URL_JSONPLACEHOLDER ?? "https://jsonplaceholder.typicode.com")
};