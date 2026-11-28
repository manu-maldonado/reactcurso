import { useAsync } from "./hooks/useAsync";
import { searchService } from "./services/searchService";
import { ErrorPanel } from "./components/ErrorPanel";

export function SearchTermBox() {
  const { data, loading, error, recargar } = useAsync(
    (signal) => searchService.getAll(signal),
    []
  );

  if (loading) return <p>⏳ Buscando...</p>;
  if (error)   return <ErrorPanel error={error} onRetry={recargar} />;
  if (!data?.length) return <p>Sin resultados.</p>;

  return (
    <table className="mag-table">
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
            <td><code>{r.engine}</code></td>
            <td>{r.snippet}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}