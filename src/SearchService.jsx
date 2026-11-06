const API_URL = "https://scraper.iguzman.com.mx/search"; //import.meta.env.VITE_API_URL

export const SearchService = {
  async searchTerms() {
    try {
      const respone = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "diplomado-unam-26",
        },
        body: JSON.stringify({ query: "Hola Mundo" }),
      });

      if (!response.ok) {
        throw new Error("Error en la llamada");
      }

      const resultado = await response.json();
      return { data: resultado.data, total: resultado.data - length };
    } catch (error) {
      console.log("Error al procesar el search", error);
      throw error;
    }
  },
};
