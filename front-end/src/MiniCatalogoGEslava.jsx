import { useState } from "react";
import { allProducts } from "./productosMock.js";

export function MiniCatalogoGEslava() {

    // Estado de la lista de productos
    const [productos, setProductos] = useState([...allProducts]);

    // Estado para los filtros
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("Todas");
    const [disponibilidad, setDisponibilidad] = useState("Todos");

    // Estado inidca se se ve o no el formulario
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    // Estado para almacenar los datos del nuevo producto
    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: "",
        precio: "",
        stock: "",
        categoria: ""
    });

    // Obtener las categorías de los productos existentes
    const categorias = [
        ...new Set(productos.map(producto => producto.categoria))
    ];

    // Aplicar los filtros
    const productosFiltrados = productos.filter(producto => {

        const texto = busqueda.toLowerCase().trim();

        const coincideNombre =
            producto.nombre.toLowerCase().includes(texto);

        const coincideCategoria =
            categoria === "Todas" ||
            producto.categoria === categoria;

        const coincideDisponibilidad =
            disponibilidad === "Todos" ||
            (disponibilidad === "Disponibles" && producto.stock > 0) ||
            (disponibilidad === "Agotados" && producto.stock === 0);

        return coincideNombre &&
            coincideCategoria &&
            coincideDisponibilidad;
    });

    // Capturar los datos del formulario
    const handleChange = (e) => {

        const { name, value } = e.target;

        setNuevoProducto({
            ...nuevoProducto,
            [name]: value
        });
    };

    // Registrar un producto
    const handleSubmit = (e) => {

        e.preventDefault();

        const producto = {
            id: Date.now(),
            nombre: nuevoProducto.nombre.trim(),
            precio: Number(nuevoProducto.precio),
            stock: Number(nuevoProducto.stock),
            categoria: nuevoProducto.categoria.trim()
        };

        // Agregar el producto al arreglo
        setProductos([...productos, producto]);

        // Limpiar el formulario
        setNuevoProducto({
            nombre: "",
            precio: "",
            stock: "",
            categoria: ""
        });

        setMostrarFormulario(false);
    };

    return (
        <div>

            <h2>Mini-Catálogo de Productos</h2>

            <hr />

            {/* FILTROS */}

            <h3>Buscar y filtrar productos</h3>

            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            <br /><br />

            <label>Categoría: </label>

            <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            >
                <option value="Todas">Todas</option>

                {categorias.map(cat => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>

            <br /><br />

            <label>Disponibilidad: </label>

            <select
                value={disponibilidad}
                onChange={(e) => setDisponibilidad(e.target.value)}
            >
                <option value="Todos">Todos</option>
                <option value="Disponibles">Disponibles</option>
                <option value="Agotados">Agotados</option>
            </select>

            <p>
                Productos encontrados: {productosFiltrados.length}
            </p>

            <hr />

            {/* BOTÓN PARA DAR DE ALTA */}

            <button
                type="button"
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
            >
                {mostrarFormulario ? "Cancelar" : "Agregar producto"}
            </button>

            {/* FORMULARIO DE ALTA */}

            {mostrarFormulario && (

                <form onSubmit={handleSubmit}>

                    <h3>Alta de producto</h3>

                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre del producto"
                        value={nuevoProducto.nombre}
                        onChange={handleChange}
                        required
                    />

                    <br /><br />

                    <input
                        type="number"
                        name="precio"
                        placeholder="Precio"
                        value={nuevoProducto.precio}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />

                    <br /><br />

                    <input
                        type="number"
                        name="stock"
                        placeholder="Existencias"
                        value={nuevoProducto.stock}
                        onChange={handleChange}
                        min="0"
                        step="1"
                        required
                    />

                    <br /><br />

                    <input
                        type="text"
                        name="categoria"
                        placeholder="Categoría"
                        value={nuevoProducto.categoria}
                        onChange={handleChange}
                        required
                    />

                    <br /><br />

                    <button type="submit">
                        Guardar producto
                    </button>

                </form>
            )}

            <hr />

            {/* LISTA DE PRODUCTOS */}

            <h3>Productos del catálogo</h3>

            {productosFiltrados.length === 0 ? (

                <p>No existen productos que coincidan con los filtros.</p>

            ) : (

                <table border="1" cellPadding="8">

                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>

                        {productosFiltrados.map(producto => (

                            <tr key={producto.id}>

                                <td>{producto.nombre}</td>

                                <td>{producto.categoria}</td>

                                <td>
                                    ${producto.precio.toFixed(2)}
                                </td>

                                <td>{producto.stock}</td>

                                <td>
                                    {producto.stock > 0
                                        ? "Disponible"
                                        : "Agotado"}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>
            )}

        </div>
    );
}