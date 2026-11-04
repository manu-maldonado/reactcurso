const API_URL = "https://scraper.iguzman.com.mx/search";

export const searchService = {
  async terminoBusqueda(termino) {
    try {
      const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "diplomado-unam-26",
        },
        body: JSON.stringify({ query: termino }),
      });
      if (!respuesta.ok) {
        throw new Error(
          `Error HTTP ${respuesta.status}: ${respuesta.statusText}`,
        );
      }

      // Revisar la Respuesta Real de la API
      //console.log("Respuesta completa de la API:", resultado);

      const resultado = await respuesta.json();

      // La API devuelve directamente un arreglo
      const data = Array.isArray(resultado) ? resultado : [];

      return {
        data,
        total: data.length,
      };
    } catch (error) {
      console.log("Error al Procesar el Search", error);
      throw error;
    }
  },
};
