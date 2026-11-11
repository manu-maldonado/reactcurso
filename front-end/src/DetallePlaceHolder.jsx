import { useParams } from "react-router-dom";
import { PlaceHolderServices } from "./services/searchServicePlaceHolder";
import { useAsync } from "./hooks/useAsync";
import { ErrorPanel } from "./components/ErrorPanel";

export function DetallePlaceHolder() {
  const { id } = useParams();

  const { data, loading, error, recargar } = useAsync(
    (signal) => PlaceHolderServices.get(id, signal),
    [id],
  );

  if (loading) return <p>⏳ Buscando...</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;
  if (!data) return <p>Sin resultados.</p>;

  return (
    <>
      <p>{data.id}</p>
      <p>{data.title}</p>
    </>
  );
}
