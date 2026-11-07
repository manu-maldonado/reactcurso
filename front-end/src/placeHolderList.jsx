import { useAsync } from './hooks/useAsync';
import { placeHolderService } from './services/placeHolderService';
import { ErrorPanel } from './components/ErrorPanel';

export function PlaceHolder() {
  const { data, loading, error, recargar } = useAsync(
    (signal) => placeHolderService.get(signal),
    []
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
