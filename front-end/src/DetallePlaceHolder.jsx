import { useParams } from "react-router-dom";
import { useAsync } from "./hooks/useAsync";
import { postsService } from "./services/postsService";
import { ErrorPanel } from "./components/ErrorPanel";


export function DetallePlaceHolder(){
    const {id} = useParams()

   
      const { data, loading, error, recargar } = useAsync(
        (signal) => postsService.obtener(id, signal),
        [id]
      );

      if (loading) return <p>=================Cargando post====================</p>;
        if (error) return <ErrorPanel error={error} onRetry={recargar} />;
      
        return (
          <article>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <small>Post ajua #{data.id} · Usuario {data.userId}</small>
          </article>
        );
}