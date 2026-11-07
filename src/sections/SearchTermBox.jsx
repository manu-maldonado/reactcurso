import { useAsync } from "../hooks/useAsync";
import { searchService } from "../services/searchService";
import { ErrorPanel } from "../components/ErrorPanel";

export function SearchTermBox() {
  const { data, loading, error, recargar } = useAsync(
    (signal) => searchService.getAll(signal),
    []
  );

  if (loading) return <p className="text-muted-foreground">Buscando...</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;
  if (!data?.length) return <p className="text-muted-foreground">Sin resultados</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Engine</th>
          <th>Snippet</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={r.id}>
            <td>{i + 1}</td>
            <td>
              <a href={r.url} target="_blank" rel="noopener noreferrer">
                {r.title}
              </a>
            </td>
            <td>
              <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
                {r.engine}
              </code>
            </td>
            <td>{r.snippet}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
