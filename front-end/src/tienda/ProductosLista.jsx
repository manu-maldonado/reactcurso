import { Link } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { ErrorPanel } from "../components/ErrorPanel";
import { productosService } from "../services/productosService";

export function ProductosLista() {
  const { data, loading, error, recargar } = useAsync(
    (signal) => productosService.getAll(signal),
    []
  );

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;

  return (
    <div>
      <h2>Productos</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <Link to={`/productos/${p.id}`}>{p.nombre}</Link>
              </td>
              <td>${p.precio}</td>
              <td>{p.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
