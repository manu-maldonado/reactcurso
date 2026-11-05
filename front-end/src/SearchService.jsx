const API_URL = "https://scraper.iguzman.com.mx/health"//import.meta.env.VITE_API_URL;

export const SearchService =  {
    async searchTerms() {
        try {
            const response = await fetch(`${API_URL}/search`, {
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                    'X-API-KEY': 'diplomado-unam-26',
                },
                body: JSON.stringify({ 'query': "Hola mundo" })
            })

            if(!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const resultado = response.json();
        return resultado.data
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            throw error;
        }
    }
}
