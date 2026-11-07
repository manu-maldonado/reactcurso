import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm.jsx";
import { ProductItem } from "./ProductItem.jsx";

export function Catalogo({ products }) {

    // Estado para almacenar los productos
    const [productos, setProductos] = useState(products);

    // Estado para simular la carga
    const [isLoading, setLoading] = useState(true);

    // Controlar si el formulario está abierto
    const [showForm, setShowForm] = useState(false);

    // Guardar el producto seleccionado para editar
    const [productoSeleccionado, setproductSeleccionado] = useState(null);

    // Estados para los campos del CRUD original
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [categoria, setCategoria] = useState("");

    // Estado para mostrar mensajes
    const [mensaje, setMensaje] = useState("");


    // Simulación de carga
    useEffect(() => {

        let active = true;

        const timer = setTimeout(() => {

            if (active) {
                setLoading(false);
            }

        }, 2500);

        return () => {
            active = false;
            clearTimeout(timer);
        };

    }, []);


    // CREATE: Crear producto desde el CRUD original
    function crearProducto() {

        if (!id.trim() || !nombre.trim() ||
            precio === "" || stock === "" || !categoria.trim()) {

            setMensaje("Completa todos los campos");
            return;
        }

        if (productos.some((producto) => producto.id === id)) {

            setMensaje("Ya existe un producto con ese ID");
            return;
        }

        if (!Number.isFinite(Number(precio)) ||
            Number(precio) < 0 ||
            !Number.isInteger(Number(stock)) ||
            Number(stock) < 0) {

            setMensaje("Precio o stock inválidos");
            return;
        }

        const nuevoProducto = {
            id: id,
            nombre: nombre,
            precio: Number(precio),
            stock: Number(stock),
            categoria: categoria
        };

        setProductos((anteriores) => [...anteriores, nuevoProducto]);

        setMensaje("Producto agregado correctamente");
    }


    // READ: Buscar producto por ID
    function leerProducto() {

        const producto = productos.find(
            (producto) => producto.id === id
        );

        if (producto) {

            setNombre(producto.nombre);
            setPrecio(String(producto.precio));
            setStock(String(producto.stock));
            setCategoria(producto.categoria);

            setMensaje("Producto encontrado");

        } else {

            setMensaje("Producto no encontrado");
        }
    }


    // UPDATE: Actualizar desde el CRUD original
    function actualizarProducto() {

        if (!id.trim() || !nombre.trim() ||
            precio === "" || stock === "" || !categoria.trim()) {

            setMensaje("Completa todos los campos");
            return;
        }

        if (!Number.isFinite(Number(precio)) ||
            Number(precio) < 0 ||
            !Number.isInteger(Number(stock)) ||
            Number(stock) < 0) {

            setMensaje("Precio o stock inválidos");
            return;
        }

        if (!productos.some((producto) => producto.id === id)) {

            setMensaje("Producto no encontrado");
            return;
        }

        const productosActualizados = productos.map((producto) => {

            if (producto.id === id) {

                return {
                    ...producto,
                    nombre: nombre,
                    precio: Number(precio),
                    stock: Number(stock),
                    categoria: categoria
                };
            }

            return producto;
        });

        setProductos(productosActualizados);

        setMensaje("Producto actualizado correctamente");
    }


    // DELETE: Eliminar desde el CRUD original
    function eliminarProducto() {

        eliminarProductoPorId(id);
    }


    // DELETE: Eliminar producto por ID con confirmación
    function eliminarProductoPorId(idProducto) {

        // Buscar el producto que queremos eliminar
        const producto = productos.find(
            (producto) => producto.id === idProducto
        );

        // Verificar que el producto exista
        if (!producto) {
            setMensaje("Producto no encontrado");
            return;
        }

        // Mostrar alerta de confirmación
        const confirmar = window.confirm(
            `¿Estás seguro de que deseas eliminar el producto "${producto.nombre}"?`
        );

        // Si el usuario presiona Cancelar, no eliminamos nada
        if (!confirmar) {
            return;
        }

        // Si confirma, eliminamos el producto
        const productosRestantes = productos.filter(
            (producto) => producto.id !== idProducto
        );

        setProductos(productosRestantes);

        setMensaje("Producto eliminado correctamente");
    }


    // Abrir formulario para crear un producto
    function abrirFormularioCrear() {

        setproductSeleccionado(null);
        setShowForm(true);
        setMensaje("");
    }


    // Abrir formulario para actualizar un producto
    function abrirFormularioActualizar() {

        const producto = productos.find(
            (producto) => producto.id === id
        );

        if (!producto) {

            setMensaje("Escribe un ID válido para actualizar");
            return;
        }

        setproductSeleccionado(producto);
        setShowForm(true);
        setMensaje("");
    }


    // Manejar los íconos de editar y eliminar
    function manejarAccionProducto(idProducto, editar) {

        if (editar) {

            const producto = productos.find(
                (item) => item.id === idProducto
            );

            if (producto) {

                // Guardamos el producto seleccionado
                setproductSeleccionado(producto);

                // También actualizamos los campos del CRUD original
                setId(producto.id);
                setNombre(producto.nombre);
                setPrecio(String(producto.precio));
                setStock(String(producto.stock));
                setCategoria(producto.categoria);

                // Abrimos el formulario
                setShowForm(true);

                setMensaje("");
            }

        } else {

            // Eliminamos directamente desde el ícono
            eliminarProductoPorId(idProducto);
        }
    }


    // Guardar producto desde ProductForm
    function guardarProducto(datosProducto) {

        const nuevoProducto = {
            id: String(datosProducto.id).trim(),
            nombre: String(datosProducto.nombre).trim(),
            precio: Number(datosProducto.precio),
            stock: Number(datosProducto.stock),
            categoria: String(datosProducto.categoria).trim()
        };

        // Validar los datos
        if (!nuevoProducto.id ||
            !nuevoProducto.nombre ||
            !nuevoProducto.categoria ||
            datosProducto.precio === "" ||
            datosProducto.stock === "" ||
            !Number.isFinite(nuevoProducto.precio) ||
            nuevoProducto.precio < 0 ||
            !Number.isInteger(nuevoProducto.stock) ||
            nuevoProducto.stock < 0) {

            setMensaje("Completa los campos con datos válidos");
            return;
        }

        if (productoSeleccionado !== null) {

            // UPDATE
            const productosActualizados = productos.map((producto) => {

                if (producto.id === productoSeleccionado.id) {

                    return {
                        ...producto,
                        ...nuevoProducto,
                        id: productoSeleccionado.id
                    };
                }

                return producto;
            });

            setProductos(productosActualizados);

            setMensaje("Producto actualizado correctamente");

        } else {

            // CREATE
            const existe = productos.some(
                (producto) => producto.id === nuevoProducto.id
            );

            if (existe) {

                setMensaje("Ya existe un producto con ese ID");
                return;
            }

            setProductos((anteriores) => [
                ...anteriores,
                nuevoProducto
            ]);

            setMensaje("Producto agregado correctamente");
        }

        // Cerrar formulario después de guardar
        setShowForm(false);
        setproductSeleccionado(null);
    }


    // Cerrar formulario
    function cerrarFormulario() {

        setShowForm(false);
        setproductSeleccionado(null);
    }


    return (

        <div>

            <h2>Catálogo de productos</h2>

            {/* Mensaje de carga */}
            {isLoading
                ? <h4>Está cargando...</h4>
                : <h4>Terminó de cargar</h4>
            }


            {/* CRUD original */}
            <h3>Administrar productos</h3>

            <input
                placeholder="ID"
                value={id}
                onChange={(evt) => setId(evt.target.value)}
            />

            <input
                placeholder="Nombre"
                value={nombre}
                onChange={(evt) => setNombre(evt.target.value)}
            />

            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(evt) => setPrecio(evt.target.value)}
            />

            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(evt) => setStock(evt.target.value)}
            />

            <input
                placeholder="Categoría"
                value={categoria}
                onChange={(evt) => setCategoria(evt.target.value)}
            />

            <div>

                <button onClick={crearProducto}>Create</button>

                <button onClick={leerProducto}>Read</button>

                <button onClick={actualizarProducto}>Update</button>

                <button onClick={eliminarProducto}>Delete</button>

            </div>


            {/* Mensajes */}
            <p>{mensaje}</p>


            {/* Primera tabla: CRUD original */}
            <h3>Lista de productos</h3>

            <table
                cellPadding="12"
                cellSpacing="0"
                style={{
                    margin: "25px auto",
                    textAlign: "center",
                    borderCollapse: "collapse"
                }}
            >

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                    </tr>
                </thead>

                <tbody>

                    {productos.map((producto) => (

                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.categoria}</td>
                        </tr>

                    ))}

                </tbody>

            </table>


            {/* Segunda tabla: CRUD con íconos */}
            <h3>Productos con acciones</h3>

            <table
                cellPadding="12"
                cellSpacing="0"
                style={{
                    margin: "25px auto",
                    textAlign: "center",
                    borderCollapse: "collapse"
                }}
            >

                <thead>
                    <tr>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                    </tr>
                </thead>

                <tbody>

                    {productos.map((producto) => (

                        <ProductItem
                            key={producto.id}
                            id={producto.id}
                            producto={producto}
                            onCallbackClick={manejarAccionProducto}
                        />

                    ))}

                </tbody>

            </table>

             
            <div className="mag-btns">

                <button onClick={abrirFormularioCrear}>
                    Agregar producto
                </button>

                <button onClick={abrirFormularioActualizar}>
                    Actualizar producto
                </button>

                <button onClick={eliminarProducto}>
                    Eliminar producto
                </button>

            </div>


            {/* Formulario para crear o editar */}
            {showForm && (

                <ProductForm
                    key={productoSeleccionado?.id ?? "nuevo"}
                    productoSeleccionado={productoSeleccionado}
                    onGuardar={guardarProducto}
                    onCancelar={cerrarFormulario}
                />

            )}

        </div>
    );
}
