import { useAsync } from "./hooks/useAsync";
import { placeHolderListServices } from "./services/placeHolderListService";
import { ErrorPanel } from "./components/ErrorPanel";

export function PlaceHolderList() {
  //Consultar una lista de elementos
  const { data, loading, error, recargar }
    = useAsync((signal) => placeHolderListServices.getList(signal), []);


  if (loading) return <p>⏳ Buscando publicaciones...</p>;

  if (error) {
    return (
      <ErrorPanel
        error={error}
        onRetry={recargar}
      />
    );
  }

  if (!data || data.length === 0) {
    return <p>Sin resultados.</p>;
  }
  return (
    <div>

      <h3>Lista sólo la primeras 5 publicaciones de un total de 100 </h3>
      <table border="1" cellPadding="10">
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
      <hr />
    </div>
  )
}