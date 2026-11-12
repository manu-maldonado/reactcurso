import { Link, useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { ErrorPanel } from "../components/ErrorPanel";
import { productosService } from "../services/productosService";
import { NoEncontrado } from "../NoEncontrado.jsx";

export function ProductoDetalle() {
  const { id } = useParams();

  const { data, loading, error, recargar } = useAsync(
    (signal) => productosService.obtener(id, signal),
    [id]
  );

  if (loading) return <p>Cargando producto...</p>;
  if (error?.status === 404 || error?.status === 400) return <NoEncontrado />;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;

  return (
    <div>
      <Link to="/productos">Volver a productos</Link>
      <h2>{data.nombre}</h2>
      {data.imagen && <img src={data.imagen} alt={data.nombre} width="200" />}
      <p>{data.descripcion}</p>
      <table>
        <tbody>
          <tr>
            <th>Precio</th>
            <td>${data.precio}</td>
          </tr>
          <tr>
            <th>Categoría</th>
            <td>{data.categoria}</td>
          </tr>
          <tr>
            <th>Stock</th>
            <td>{data.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
