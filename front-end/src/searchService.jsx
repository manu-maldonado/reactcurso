const API_URL = 'https://scraper.iguzman.com.mx/health'; // import.meta.env.VITE_API_UTL

export const searchService = {
  async searchTerms() {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'diplomado-unam-26',
        },
        body: JSON.stringify({ query: 'hola mundo' }),
      });
      //await - hasta que acabe de procesar una respuesta recupera el valor del fetch
      //fetch - manda un request hacia una URL, especificar metodos [json]
      if (!response.ok) {
        throw new Error(`Error en la llamada al request ${API_URL}`);
      }

      const resultado = response.json();

      return resultado.data;
    } catch (error) {
      console.log('Error al procesar el search', error);
      throw error;
    }
  },
};
