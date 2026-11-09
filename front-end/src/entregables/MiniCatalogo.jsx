import { useState } from "react";
//import { productosIniciales } from "./data/productos";
import { FormularioProducto } from "./components/FormularioProducto";
import { Link } from "react-router-dom";
import { productosIniciales } from "./data/productos";

export function MiniCatalogo({ productos, onAgregar }) {

    // Estado para almacenar los productos del catálogo
    //const [productos, setProductos] = useState(productosIniciales);
    // Estado para almacenar el texto de búsqueda
    const [busqueda, setBusqueda] = useState("");
    // Filtrar productos por nombre
    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

        // Agregar un nuevo producto al catálogo
    // function agregarProducto(datosProducto) {

    //     setProductos((anteriores) => {

    //         // Generar un ID único a partir del mayor ID existente
    //         const nuevoId = anteriores.length > 0
    //             ? Math.max(...anteriores.map((producto) => producto.id)) + 1
    //             : 1;

    //         const nuevoProducto = {
    //             id: nuevoId,
    //             ...datosProducto
    //         };

    //         return [...anteriores, nuevoProducto];
    //     });
    // }

    return (
        <div>
            <h2>Mini-Catálogo de Productos</h2>

            <div>
                <input
                    type="text"
                    placeholder="Buscar joyería por nombre..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>

            <h3>Lista de productos</h3>

            <table
                border="1"
                cellPadding="10"
                style={{
                    margin: "20px auto",
                    borderCollapse: "collapse",
                    textAlign: "center"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {productosFiltrados.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.categoria}</td>
                            <td>
                                <Link to={`/joyeria/${producto.id}`}>
                                    Ver detalle
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
            <FormularioProducto onAgregar={onAgregar} />
        </div>
    );
}