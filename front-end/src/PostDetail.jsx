
import { useState } from "react";
import { useAsync } from "./hooks/useAsync";
import { jsonPlaceholderService } from "./services/jsonPlaceholderService";

export function PostDetail() {
  const [inputId, setInputId] = useState("1");
  const [postId, setPostId] = useState(1);

  const { data, loading, error, recargar } = useAsync(
    (signal) => jsonPlaceholderService.getById(postId, signal),
    [postId]
  );

  const handleBuscar = (event) => {
    event.preventDefault();

    const id = Number(inputId);

    if (!Number.isInteger(id) || id < 1 || id > 100) {
      alert("Ingresa un ID válido entre 1 y 100");
      return;
    }

    if (id === postId) {
      recargar();
    } else {
      setPostId(id);
    }
  };

  return (
    <section>
      <h2>Buscar publicación por ID</h2>

      <form onSubmit={handleBuscar}>
        <label htmlFor="postId">ID de publicación: </label>

        <input
          id="postId"
          type="number"
          min="1"
          max="100"
          value={inputId}
          onChange={(event) => setInputId(event.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Buscando publicación...</p>}

      {error && (
        <div>
          <p>Error: {error.message}</p>
          <button type="button" onClick={recargar}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && !data && (
        <p>No se encontró la publicación.</p>
      )}

      {!loading && !error && data && (
        <article>
          <h3>{data.title}</h3>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Usuario:</strong> {data.userId}</p>
          <p><strong>Contenido:</strong> {data.body}</p>
        </article>
      )}
    </section>
  );
}
