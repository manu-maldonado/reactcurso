// src/services/httpClient.js — v1.5 (recomendada para el curso)
const BASE_URL = import.meta.env.VITE_API_URL ?? "/api";

export class HttpError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = "HttpError";
    this.status = status;   // 0 = error de red, 4xx/5xx = HTTP
    this.body = body;
  }
}

export class HttpClient {
  constructor(baseURL = BASE_URL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, { method = "GET", body, headers, signal } = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      method,
      signal,   //  useAsync pueda abortar
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    };

    let response;
    try {
      response = await fetch(url, config);
    } catch (err) {
      // distinguir red/CORS de error HTTP
      if (err.name === "AbortError") throw err;   // useAsync lo ignora
      throw new HttpError(`No se pudo conectar con ${url}`, 0, { cause: err.message });
    }

    if (response.status === 204) return null;

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      throw new HttpError(
        `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        body
      );
    }

    return response.json();
  }

  get(endpoint, options)          { return this.request(endpoint, { ...options, method: "GET" }); }
  post(endpoint, body, options)   { return this.request(endpoint, { ...options, method: "POST", body }); }
  put(endpoint, body, options)    { return this.request(endpoint, { ...options, method: "PUT", body }); }
  delete(endpoint, options)       { return this.request(endpoint, { ...options, method: "DELETE" }); }

  patch(endpoint,body,options)    { return this.request(endpoint, { ...options,method: "PATCH",body});}
}