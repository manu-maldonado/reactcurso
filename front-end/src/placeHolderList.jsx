import { useAsync } from "./hooks/useAsync";
import { placeHolderListServices } from "./services/placeHolderListService";
import { ErrorPanel } from "./components/ErrorPanel";

export function PlaceHolderList() {
  

  //Consultar una lista de elementos
  const { data, loading, error, recargar} 
  = useAsync((signal) => placeHolderListServices.getList(signal),[] );


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
  return(
    <div>
      
      <h3>Lista sólo la primeras 5 publicaciones de un total de 100 </h3>
      <hr />
      {data.map((post) => (
            <div key={post.id}>
              <h3>{post.id}.{post.title}</h3>
              <p>Usuario: {post.userId}</p>
              <p>{post.body}</p>
              <hr />
            </div>
          ))}

    </div>
  );
  
}