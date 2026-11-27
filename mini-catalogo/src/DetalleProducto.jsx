import { Link, useParams } from "react-router-dom";
import { productos } from "./productosData";

export function DetalleProducto() {
    const { id } = useParams();

    // En la URL todo llega como texto ("1"), por eso comparamos con Number(id)
    const producto = productos.find((item) => item.id === Number(id));

    if (!producto) {
        return (
            <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "sans-serif", padding: "20px" }}>
                <h2>Producto no encontrado</h2>
                <p>No existe ningún producto con el ID {id}.</p>
                <Link to="/">← Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "sans-serif", padding: "20px" }}>
            <Link to="/">← Volver al catálogo</Link>
            <h2>{producto.nombre}</h2>
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p>{producto.descripcion}</p>
        </div>
    );
}