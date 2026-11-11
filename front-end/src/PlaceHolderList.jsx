import { useAsync } from "./hooks/useAsync";
import { PlaceHolderServicesList } from "./services/searchServicePlaceHolder";
import { ErrorPanel } from "./components/ErrorPanel";

export function PlaceHolderList() {
  const { data, loading, error, recargar } = useAsync(
    (signal) => PlaceHolderServicesList.get(signal),
    [],
  );

  if (loading) return <p>⏳ Buscando...</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;
  if (!data?.length) return <p>Sin resultados.</p>;

  return (
    <>
      {data.map((post) => (
        <div
          key={post.id}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          <p>
            <strong>ID:</strong> {post.id}
          </p>
          <p>
            <strong>Título:</strong> {post.title}
          </p>
        </div>
      ))}
    </>
  );
}
