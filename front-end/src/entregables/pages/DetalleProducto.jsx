import { Link, useParams } from "react-router-dom";
//import { productosIniciales } from "../data/productos";

export function DetalleProducto({ productos }) {

    // Obtener el ID del producto desde la URL
    const { id } = useParams();

    // Buscar el producto correspondiente
    const producto = productos.find(
        (producto) => producto.id === Number(id)
    );

    // Si el producto no existe
    if (!producto) {
        return (
            <div>
                <h2>Producto no encontrado</h2>
                <p>No existe una joya con el ID {id}.</p>

                <Link to="/joyeria">
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Detalle del producto</h2>

            <h3>{producto.nombre}</h3>

            <p><strong>ID:</strong> {producto.id}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Stock:</strong> {producto.stock}</p>
            <p><strong>Categoría:</strong> {producto.categoria}</p>

            <Link to="/joyeria">
                Volver al catálogo
            </Link>
        </div>
    );
}