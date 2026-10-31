import { useEffect, useState } from "react";

export function Catalogo({ products }) {

    const [productos, setProductos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [idEditar, setIdEditar] = useState(null);

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setProductos(products);
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [products]);

    const agregarProducto = () => {

        const nuevoProducto = {
            id: `p${productos.length + 1}`,
            nombre,
            precio: Number(precio),
            stock: Number(stock),
            categoria
        };

        setProductos([...productos, nuevoProducto]);

        setNombre("");
        setPrecio("");
        setStock("");
        setCategoria("");
    };

    const editarProducto = (producto) => {
        setIdEditar(producto.id);
        setNombre(producto.nombre);
        setPrecio(producto.precio);
        setStock(producto.stock);
        setCategoria(producto.categoria);
    };

    //*********************************************** */
    const actualizarProducto = () => {

        const productosActualizados = productos.map((producto) => {

            if (producto.id === idEditar) {
                return {
                    ...producto,
                    nombre,
                    precio: Number(precio),
                    stock: Number(stock),
                    categoria
                };
            }

            return producto;
        });

        setProductos(productosActualizados);

        setIdEditar(null);

        setNombre("");
        setPrecio("");
        setStock("");
        setCategoria("");
    };
    //******************************************

    if (isLoading) {
        return <h3>Cargando catálogo...</h3>;
    }

    return (
        <div>

            <h2>Alta de Productos</h2>

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />

            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />

            <input
                type="text"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            {
                idEditar === null ? (
                    <button onClick={agregarProducto}>
                        Agregar
                    </button>
                ) : (
                    <button onClick={actualizarProducto}>
                        Actualizar
                    </button>
                )
            }

            <h2>Catálogo</h2>

            {productos.map((producto) => (
                <div key={producto.id}>
                    {producto.id} - 
                    {producto.nombre} - $
                    {producto.precio} - Stock:
                    {producto.stock} - {producto.categoria}

                    <button onClick={() => editarProducto(producto)}
                        style={{ marginLeft: "10px" }}
                    >
                        Editar
                    </button>
                </div>
            ))}

        </div>
    );
}