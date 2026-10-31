import { useEffect, useState } from "react";

export function Catalogo({ products }) {
    // 1. Estado para los productos (inicia con los que le pasamos por props)
    const [listProducts, setListProducts] = useState(products || []);

    // 2. Estado de carga que tenía tu profe en la imagen
    const [isLoading, setIsLoading] = useState(true);

    // 3. Estados para los inputs del formulario de creación
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    // El useEffect que puso tu profe para simular que carga datos[cite: 5]
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    // Función para agregar un producto nuevo a la lista (Create del CRUD)
    const handleAddProduct = (e) => {
        e.preventDefault();
        const nuevo = {
            id: "p" + (listProducts.length + 1),
            nombre,
            precio: Number(precio),
            stock: Number(stock),
            categoria: "General"
        };
        setListProducts([...listProducts, nuevo]); // Actualiza el estado sumando el nuevo
        setNombre("");
        setPrecio("");
        setStock("");
    };

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginTop: "20px" }}>
            <h2>Catálogo de Productos (CRUD)</h2>

            {/* Si está cargando muestra el texto de la imagen, si no, muestra el contenido[cite: 5] */}
            {isLoading ? (
                <h4>Esta cargando....</h4>
            ) : (
                <div>
                    <h4>Terminó de cargar</h4>

                    {/* Formulario integrado para crear un producto */}
                    <form onSubmit={handleAddProduct} style={{ marginBottom: "20px", background: "#f9f9f9", padding: "10px" }}>
                        <h4>Agregar nuevo producto</h4>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Precio"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                        <button type="submit">Guardar</button>
                    </form>

                    {/* Mapeo igual al que hizo tu profe en la imagen[cite: 5] */}
                    <ul>
                        {listProducts.map((producto) => (
                            <li key={producto.id}>
                                {producto.id} - <strong>{producto.nombre}</strong> (${producto.precio}) - Stock: {producto.stock}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}