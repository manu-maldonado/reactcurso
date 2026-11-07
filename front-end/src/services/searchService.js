import { clients } from './clients'; // ⬅️ respeta el case exacto del archivo

/** Normaliza un resultado de búsqueda al shape que consume la UI */
const normalize = (r, index) => ({
  // id: usa el del API o el url como fallback (url es único por resultado)
  id: r.id ?? r.url ?? `result-${index}`,
  title: r.title ?? '(sin título)',
  url: r.url ?? '',
  snippet: r.snippet ?? '',
  ogImage: r.og_image ?? null,
  engine: r.engine ?? 'unknown',
});

/** Acepta array directo o envoltorios comunes: { data } / { results } / { items } */
const unpack = (res) => {
  if (Array.isArray(res)) return res;
  return res?.data ?? res?.results ?? res?.items ?? [];
};

export const searchService = {
  /**
   * Búsqueda principal.
   * @param {string} query
   * @param {AbortSignal} [signal]
   */
  async search(query, signal) {
    const res = await clients.elcris.post(
      '/search',
      { query }, // body (el cliente hace JSON.stringify)
      {
        headers: { 'X-API-Key': 'diplomado-unam-26' },
        signal,
      }
    );
    return unpack(res).map(normalize);
  },

  /** Wrapper search */
  async getAll(signal) {
    return searchService.search('Hola mundo', signal);
  },

  /** Detalle por id/url  */
  async obtener(id, signal) {
    const raw = await clients.elcris.get(`/search/${id}`, { signal });
    return normalize(raw, 0);
  },
};
