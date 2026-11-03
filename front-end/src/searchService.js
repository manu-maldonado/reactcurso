const API_URL = import.meta.env.VITE_API_URL;

export const searchService = {
  async searchTerms(terminoBusqueda) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_API_KEY
        },
        body: JSON.stringify({
          query: terminoBusqueda
        })
      });

      if (!response.ok) {
        throw new Error(
          `Error HTTP ${response.status} al consultar la API`
        );
      }

      //Esperar a que la respuesta JSON esté disponible
      const resultado = await response.json();

      console.log("Respuesta de la API:", resultado);

      //La API de clase aparentemente devuelve un arreglo.
      //También contemplamos una respuesta con propiedad data.
      const datos = Array.isArray(resultado)
        ? resultado
        : resultado?.data;

      if (!Array.isArray(datos)) {
        throw new Error(
          "La respuesta de la API no contiene un arreglo de resultados"
        );
      }

      return {
        data: datos,
        total: datos.length
      };

    } catch (error) {
      console.error("Error al procesar la búsqueda:", error);
      throw error;
    }
  }
};
