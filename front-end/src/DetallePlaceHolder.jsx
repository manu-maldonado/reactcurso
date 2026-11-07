import {useParams} from 'react-router-dom';
import { useAsync } from './hooks/useAsync';
import { jsonPlaceholderService } from './services/jsonPlaceholderService';
import { ErrorPanel } from './components/ErrorPanel';

export function DetallePlaceHolder(){
    const { id } = useParams();
    
    const { data, loading, error, recargar } = useAsync(
        (signal) => jsonPlaceholderService.get(id, signal),
        [id],
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <ErrorPanel error={error} />;
    if (!data) return <p>Sin resultados</p>;

    return (
       <>
       <p>{data.id}</p>
       <p>{data.title}</p>
       <p>{data.body}</p>
       </>
    );
}