import { useParams} from "react-router-dom"
import { useAsync } from "./hooks/useAsync";
import { placeHolderServices } from "./services/placeHolderService";
import { ErrorPanel } from "./components/ErrorPanel";

export function DetallePlaceHolder(){

    const {id} = useParams();

    const { data, loading, error, recargar } = useAsync(
            (signal) => placeHolderServices.get(id, signal),
            [id],
          );

     if (loading) return <p>⏳ Buscando...</p>;
      if (error)   return <ErrorPanel error={error} onRetry={recargar} />;
      if (!data) return <p>Sin resultados.</p>;

      return(
        <>
        <p>{data.id}</p>
        <p>{data.title}</p>
        </>
      );
}