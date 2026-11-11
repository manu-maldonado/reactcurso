import { Link } from "react-router-dom"; //permite navegar entre páginas de React sin recargar todo el documento
import { allProducts } from "./productosMock.js";

export function ListaProductos() {

    return (
        <div>
            <h2>Catálogo de productos</h2>
            <hr />
            {/*  .map Iterar sobre la lista de productos y renderizar cada uno*/}
            {allProducts.map(producto => (
                <div key={producto.id}>

                    <h3>{producto.nombre}</h3>

                    <p>Precio: ${producto.precio}</p>

                    <p>Categoría: {producto.categoria}</p>
                    {/*// Enlace a la página de detalle del producto*/}
                    <Link to={`/catalogo/${producto.id}`}> 
                    Ver detalle
                    </Link>
                    {/*La instrucción anterior genera una ruta diferente para cada producto.

                        Por ejemplo:
                        - Para el teclado: /catalogo/p1
                        - Para el mouse: /catalogo/p2
                        - Para el monitor: /catalogo/p3
                        - Para los audífonos: /catalogo/p4
                    */}

                    <hr />
                </div>
            ))}
        </div>
    );
}