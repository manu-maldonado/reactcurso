import { useState } from "react";
import { searchService } from "./SearchService";

export function SearchTermBox() {
  const [search, setSearch] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const response = searchService.terminoBusqueda();

  async function buscar() {
    if (!search.trim()) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await searchService.terminoBusqueda(search);

      setResultados(response.data);
    } catch (error) {
      console.error("Error en la Búsqueda:", error);
      setError("NO Fue Posible Realizar la Búsqueda.");
      setResultados([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <label>Término de Búsqueda:</label>
      <input
        id="searchTermBox"
        value={search}
        onChange={(evento) => setSearch(evento.target.value)}
      ></input>
      <button onClick={buscar} disabled={loading}>
        Buscar
      </button>
      {loading && <p>Buscando Información...</p>}
      {error && <p>{error}</p>}

      {resultados.map((x) => (
        <div key={x.url}>
          <h3>{x.title}</h3>
        </div>
      ))}
    </>
  );
}
