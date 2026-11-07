import { HttpClient } from "../HttpClient";

export const clients = {
  elcris:      new HttpClient(import.meta.env.VITE_API_URL_ELCRIS       ?? "/api"),
  placeholder: new HttpClient(import.meta.env.VITE_API_JSONPLACEHOLDER  ?? "/api"),
  auth:        new HttpClient(import.meta.env.VITE_API_AUTH             ?? "/api")
};