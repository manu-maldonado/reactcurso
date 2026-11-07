import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { postsService } from "../JSONPlaceholder/services/postsService";
import { ErrorPanel } from "../components/ErrorPanel";

export function DetallePlaceHolder() {
  const { id } = useParams();

  const { data, loading, error, recargar } = useAsync(
    (signal) => postsService.getById(id, signal),
    [id]
  );

  if (loading) return <p className="text-muted-foreground">Buscando...</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;
  if (!data) return <p className="text-muted-foreground">Sin resultados</p>;

  return (
    <div>
      <p>{data.id}</p>
      <h1>{data.title}</h1>
    </div>
  );
}
