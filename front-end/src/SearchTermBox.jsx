import { useState } from "react";
import { searchService } from "./searchService.js";

export function SearchTermBox() {

  //Estado del término de búsqueda
  const [search, setSearch] = useState("");

  //Estado de los resultados recibidos
  const [resultados, setResultados] = useState([]);

  //Estado de carga
  const [isLoading, setLoading] = useState(false);

  //Estado para errores
  const [error, setError] = useState("");

  //Saber si ya se realizó una búsqueda
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  //Ejecutar la búsqueda
  async function manejarBusqueda(event) {
    event.preventDefault();

    if (!search.trim() || isLoading) return;

    setLoading(true);
    setError("");
    setResultados([]);
    setBusquedaRealizada(false);

    try {
      const response = await searchService.searchTerms(
        search.trim()
      );

      setResultados(response.data);
      setBusquedaRealizada(true);

      console.log("Total de resultados:", response.total);

    } catch (error) {
      setError("No fue posible realizar la búsqueda.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h2>Búsqueda mediante API REST</h2>

      <form onSubmit={manejarBusqueda}>
        <label htmlFor="searchTerm">
          Término de búsqueda:
        </label>

        <input
          id="searchTerm"
          type="text"
          placeholder="Escribe tu búsqueda"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button
          type="submit"
          disabled={isLoading || !search.trim()}
        >
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {isLoading && <p>Consultando la API...</p>}

      {error && <p role="alert">{error}</p>}

      {!isLoading && !error && busquedaRealizada && (
        <div>
          <h3>Resultados encontrados: {resultados.length}</h3>

          {resultados.length > 0 ? (
            <ul>
              {resultados.map((resultado, index) => (
                <li key={resultado.id ?? resultado.url ?? index}>
                  {resultado.title ??
                   resultado.nombre ??
                   JSON.stringify(resultado)}
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      )}
    </section>
  );
}
