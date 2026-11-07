import { useState } from "react";
import { useAsync } from "./hooks/useAsync";
import { ErrorPanel } from "./components/ErrorPanel";
import { postsService } from "./services/postsService";

const usuarios = Array.from({ length: 10 }, (_, i) => i + 1);

export function JSONPlaceholder_filter() {
  const [userId, setUserId] = useState(1);

  const { data, loading, error, recargar } = useAsync(
    (signal) => postsService.porUsuario(userId, signal),
    [userId]
  );

  return (
    <div>
      <h3>Posts por usuario</h3>
      <label>
        Usuario:{" "}
        <select value={userId} onChange={(evt) => setUserId(Number(evt.target.value))}>
          {usuarios.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>

      {loading && <p>Cargando posts...</p>}
      {error && <ErrorPanel error={error} onRetry={recargar} />}

      {!loading && !error && (data?.length ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Este usuario no tiene posts.</p>
      ))}
    </div>
  );
}