
import React, { useState } from "react";
import { productosIniciales } from "./productosData";

export function Catalogo() {

    const [productos, setProductos] = useState(productosIniciales);
    const [busqueda, setBusqueda] = useState("");

    // Estados para el formulario de nuevo producto
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nuevoPrecio, setNuevoPrecio] = useState("");

    // Filtrar productos según lo que escriban en el buscador
    const productosFiltrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    // Función para dar de alta un producto nuevo
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nuevoNombre.trim()) return;

        const nuevoItem = {
            id: Date.now(), // ID único temporal
            nombre: nuevoNombre,
            categoria: nuevaCategoria || "General",
            precio: Number(nuevoPrecio) || 0,
        };

        setProductos([nuevoItem, ...productos]); // Lo agregamos al inicio de la lista
        setNuevoNombre("");
        setNuevaCategoria("");
        setNuevoPrecio("");
    };

    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "sans-serif", padding: "20px" }}>
            <h1>🛒 Mini-Catálogo Estático</h1>

            {/* Formulario de Alta de Producto */}
            <form onSubmit={handleSubmit} style={{ background: "#f4f4f4", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <h3>Agregar nuevo producto</h3>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        placeholder="Nombre del producto..."
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        placeholder="Categoría..."
                        value={nuevaCategoria}
                        onChange={(e) => setNuevaCategoria(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="number"
                        placeholder="Precio..."
                        value={nuevoPrecio}
                        onChange={(e) => setNuevoPrecio(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "8px 15px", cursor: "pointer" }}>➕ Agregar</button>
            </form>

            {/* Input de Filtrado */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="🔍 Filtrar productos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{ width: "100%", padding: "8px", fontSize: "16px" }}
                />
            </div>

            {/* Lista / Catálogo */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {productosFiltrados.length === 0 ? (
                    <p>No se encontraron productos.</p>
                ) : (
                    productosFiltrados.map((item) => (
                        <li key={item.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "8px", borderRadius: "5px", display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <strong>{item.nombre}</strong> <br />
                                <small>Categoría: {item.categoria}</small>
                            </div>
                            <div style={{ color: "green", fontWeight: "bold" }}>
                                ${item.precio}
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );

}