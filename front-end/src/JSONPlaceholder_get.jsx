import { useAsync } from "./hooks/useAsync";
import { ErrorPanel } from "./components/ErrorPanel";
import { postsService } from "./services/postsService";

export function JSONPlaceholder_get({ id = 1 }) {
  const { data, loading, error, recargar } = useAsync(
    (signal) => postsService.obtener(id, signal),
    [id]
  );

  if (loading) return <p>=================Cargando post====================</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;

  return (
    <article>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <small>Post #{data.id} · Usuario {data.userId}</small>
    </article>
  );
}