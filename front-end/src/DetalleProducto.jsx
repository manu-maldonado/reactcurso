import { Link, useParams } from "react-router-dom"; //permite navegar entre páginas de React sin recargar todo el documento
import { allProducts } from "./productosMock.js";

export function DetalleProducto() {

    // Obtener el identificador de la URL
    const { id } = useParams();//useParams() devuelve los parámetros como cadenas de texto. 

  
    //Este método recorre el arreglo y devuelve el primer elemento que cumple la condición.
    //En otras palabras buscar el producto que tenga ese identificador
    const producto = allProducts.find(
        producto => String(producto.id) === id
    );

    // Si no existe el producto, mostrar un mensaje
    if (!producto) {
        return (
            <div>
                <h2>Producto no encontrado</h2>
                <p>No existe un producto con el identificador: {id}</p>
                <Link to="/catalogo">Regresar al catálogo</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Detalle del producto</h2>
            <hr />

            <h3>{producto.nombre}</h3>

            <p>Identificador: {producto.id}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Existencias: {producto.stock}</p>
            <p>Categoría: {producto.categoria}</p>

            <p>
                Estado: {
                    producto.stock > 0
                    ? "Disponible"
                    : "Agotado"
                }
            </p>

            <hr />

            <Link to="/catalogo">
                Regresar al catálogo
            </Link>
        </div>
    );
}