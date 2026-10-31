import { useState, useEffect } from "react";

export function ProductForm({ selectedProduct, onSaveProduct }) {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [categoria, setCategoria] = useState("");

    // Si estamos editando, rellenamos los inputs automáticamente con los datos del producto
    useEffect(() => {
        if (selectedProduct) {
            setNombre(selectedProduct.nombre || "");
            setPrecio(selectedProduct.precio || "");
            setStock(selectedProduct.stock || "");
            setCategoria(selectedProduct.categoria || "");
        }
    }, [selectedProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveProduct({
            id: selectedProduct ? selectedProduct.id : Date.now().toString(),
            nombre,
            precio: Number(precio),
            stock: Number(stock),
            categoria,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="card bg-surface-100-900 p-4 w-full max-w-md mx-auto space-y-4" style={{ background: "#f4f4f4", border: "1px solid #ccc", borderRadius: "8px" }}>
            <header>
                <h3 className="h3">{selectedProduct ? "Editar Producto" : "Nuevo Producto"}</h3>
            </header>

            <fieldset className="fieldset space-y-2">
                <legend className="legend">Detalles del Producto</legend>

                <label className="label" style={{ display: "block", marginBottom: "10px" }}>
                    <span className="label-text">Nombre</span>
                    <input
                        className="input"
                        type="text"
                        placeholder="Ej. Teclado mecánio"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </label>

                <label className="label" style={{ display: "block", marginBottom: "10px" }}>
                    <span className="label-text">Precio</span>
                    <input
                        className="input"
                        type="number"
                        placeholder="0.00"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </label>

                <label className="label" style={{ display: "block", marginBottom: "10px" }}>
                    <span className="label-text">Stock</span>
                    <input
                        className="input"
                        type="number"
                        placeholder="Cantidad"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </label>

                <label className="label" style={{ display: "block", marginBottom: "10px" }}>
                    <span className="label-text">Categoría</span>
                    <input
                        className="input"
                        type="text"
                        placeholder="Ej. Electrónica"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </label>
            </fieldset>

            <footer className="flex justify-end" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" className="btn preset-filled">Guardar</button>
            </footer>
        </form>
    );
}