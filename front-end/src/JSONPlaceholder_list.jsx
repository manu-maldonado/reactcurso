import { useAsync } from "./hooks/useAsync";
import { ErrorPanel } from "./components/ErrorPanel";
import { postsService } from "./services/postsService";

export function JSONPlaceholder_list() {
  const { data, loading, error, recargar } = useAsync(
    (signal) => postsService.getAll(signal),
    []
  );

  
  if (loading) return <p>Cargando posts........................................</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;
  if (!data?.length) return <p>No hay posts.</p>;

  return (
    
    <table className="mag-table">
      <thead>
        
        <tr>
          <th>#</th>
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
  );
}