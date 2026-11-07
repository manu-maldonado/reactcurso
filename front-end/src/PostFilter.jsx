import { useState } from "react";
import { useAsync } from "./hooks/useAsync";
import { jsonPlaceholderService } from "./services/jsonPlaceholderService";

export function PostFilter() {
  // ID que escribe el usuario.
  const [inputUserId, setInputUserId] = useState("1");

  // ID utilizado para consultar la API.
  const [userId, setUserId] = useState(1);

  // Hook para gestionar la petición.
  const { data, loading, error, recargar } = useAsync(
    (signal) =>
      jsonPlaceholderService.filterByUser(userId, signal),
    [userId]
  );

  // Evento para aplicar el filtro.
  const handleFiltrar = (event) => {
    event.preventDefault();

    const id = Number(inputUserId);

    if (!Number.isInteger(id) || id < 1 || id > 10) {
      alert("Ingresa un usuario válido entre 1 y 10");
      return;
    }

    if (id === userId) {
      recargar();
    } else {
      setUserId(id);
    }
  };

  return (
    <section>
      <h2>Filtrar publicaciones por usuario</h2>

      <form onSubmit={handleFiltrar}>
        <label htmlFor="filterUserId">
          ID del usuario:
        </label>

        <input
          id="filterUserId"
          type="number"
          min="1"
          max="10"
          required
          value={inputUserId}
          onChange={(event) =>
            setInputUserId(event.target.value)
          }
        />

        <button type="submit" disabled={loading}>
          Filtrar publicaciones
        </button>
      </form>

      {loading && <p>Cargando publicaciones...</p>}

      {error && (
        <div>
          <p role="alert">
            Error al filtrar: {error.message}
          </p>

          <button type="button" onClick={recargar}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && data?.length === 0 && (
        <p>No se encontraron publicaciones.</p>
      )}

      {!loading && !error && data?.length > 0 && (
        <div>
          <h3>Publicaciones del usuario {userId}</h3>

          <p>Total de publicaciones: {data.length}</p>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Título</th>
                <th>Contenido</th>
              </tr>
            </thead>

            <tbody>
              {data.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
