<<<<<<< HEAD
import { useState } from 'react';
import { searchService } from './searchService';

export function SearchTermBox({}) {
  const [searchService, setSearch] = useState();
  const response = searchService.searchTerms(value);

  return (
    <>
      <label>{value}</label>
      <input
        id="searchBox"
        value={value}
        onChange={(evt) => oninput(evt.target.value)}
      ></input>
      {response
        ? response.map((x) => {
            <p>{x.title}</p>;
          })
        : ''}
    </>
  );
}
=======
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
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
