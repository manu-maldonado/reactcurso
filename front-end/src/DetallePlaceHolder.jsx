import { useParams } from "react-router-dom";
import { useAsync } from "./hooks/useAsync";
import { getJsonPlaceService } from "./services/getJsonPlaceService";
import { ErrorPanel } from "./components/ErrorPanel";

export function DetallePlaceHolder(){
    const {id} = useParams()

    const {data,loading,error,recargar} = useAsync(
        (signal) => getJsonPlaceService.get(id,signal),
        [id],
    );
     if (loading) return <p>⏳ Buscando...</p>;
      if (error) return <ErrorPanel error={error} onRetry={recargar} />;
      if (!data) return <p>Sin resultados.</p>;

      return (
    <>
      <p>Id:{data.id}</p>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </>
  );
}