import { useState } from "react";

export function FormularioProducto({ onAgregar }) {

    // Estado para guardar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        stock: "",
        categoria: ""
    });

    const [error, setError] = useState("");

    // Actualizar los campos cuando el usuario escribe
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Enviar el formulario
    function handleSubmit(e) {
        e.preventDefault();

        // Validar que todos los campos estén completos
        if (
            !formData.nombre.trim() ||
            formData.precio === "" ||
            formData.stock === "" ||
            !formData.categoria.trim()
        ) {
            setError("Completa todos los campos");
            return;
        }

        // Validar precio y stock
        if (
            !Number.isFinite(Number(formData.precio)) ||
            Number(formData.precio) < 0 ||
            !Number.isInteger(Number(formData.stock)) ||
            Number(formData.stock) < 0
        ) {
            setError("Ingresa un precio y stock válidos");
            return;
        }

        // Enviar el nuevo producto al componente principal
        onAgregar({
            nombre: formData.nombre.trim(),
            precio: Number(formData.precio),
            stock: Number(formData.stock),
            categoria: formData.categoria.trim()
        });

        // Limpiar el formulario
        setFormData({
            nombre: "",
            precio: "",
            stock: "",
            categoria: ""
        });

        setError("");
    }

    return (
        <div>
            <h3>Agregar nueva joyería</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre del producto"
                    value={formData.nombre}
                    onChange={handleChange}
                />

                <br />

                <input
                    type="number"
                    name="precio"
                    placeholder="Precio"
                    min="0"
                    step="any"
                    value={formData.precio}
                    onChange={handleChange}
                />

                <br />

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    min="0"
                    step="1"
                    value={formData.stock}
                    onChange={handleChange}
                />

                <br />

                <input
                    type="text"
                    name="categoria"
                    placeholder="Categoría"
                    value={formData.categoria}
                    onChange={handleChange}
                />

                <br />

                <button type="submit">
                    Agregar producto
                </button>

                {error && <p>❌ {error}</p>}

            </form>
        </div>
    );
}