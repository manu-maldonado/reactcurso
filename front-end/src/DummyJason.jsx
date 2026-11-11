import { useAsync } from "./hooks/useAsync";
import { dummyJsonProductsService } from "./services/dummyJsonProductsService";
import { ErrorPanel } from "./components/ErrorPanel";

export function DummyJason() {
    const { data, loading, error, recargar } = useAsync(
        (signal) => dummyJsonProductsService.getProducts({ signal }),
        []
    );

    if (loading) return <p>⏳ Buscando...</p>;

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
    return (
        <div>
            <h2>Lista de productos de DummyJSON products</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                <img
                                    src={producto.thumbnail}
                                    alt={producto.title}
                                    width="80"
                                />
                            </td>
                            <td>{producto.title}</td>
                            <td>{producto.category}</td>
                            <td>${producto.price.toFixed(2)}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.stock > 0 ? "Disponible" : "No disponible"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

