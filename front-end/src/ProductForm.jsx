import { useState } from "react";

export function ProductForm({
    productoSeleccionado,
    onGuardar,
    onCancelar
}) {

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState(() => ({

        id: productoSeleccionado?.id ?? "",
        nombre: productoSeleccionado?.nombre ?? "",
        precio: productoSeleccionado?.precio ?? "",
        stock: productoSeleccionado?.stock ?? "",
        categoria: productoSeleccionado?.categoria ?? ""

    }));


    // Actualizar los datos cuando el usuario escribe
    const handleChange = (evt) => {

        const { name, value, type, checked } = evt.target;

        setFormData((prevData) => ({

            ...prevData,

            [name]: type === "checkbox" ? checked : value

        }));
    };


    // Enviar los datos al componente Catalogo
    const handleSubmit = (evt) => {

        evt.preventDefault();

        onGuardar({
            ...formData,
            precio: formData.precio === ""
                ? ""
                : Number(formData.precio),
            stock: formData.stock === ""
                ? ""
                : Number(formData.stock)
        });
    };


    return (

        <form onSubmit={handleSubmit}>

            <input
                type="radio"
                name="step"
                id="step1"
                className="msf-radio"
                defaultChecked
            />

            {/*
            <input
                type="radio"
                name="step"
                id="step2"
                className="msf-radio"
            />

            <input
                type="radio"
                name="step"
                id="step3"
                className="msf-radio"
            />
            */}

            <div className="msf-wrap">

                {/*
                <div className="msf-progress">
                    <span className="msf-step-label">1. Your Info</span>
                    <span className="msf-step-label">2. Details</span>
                    <span className="msf-step-label">3. Done</span>
                </div>
                */}

                <div className="msf-body">

                    <div className="msf-panel msf-panel-1">

                        <h3>
                            {productoSeleccionado
                                ? "Editar producto"
                                : "Agregar producto"}
                        </h3>


                        {/* ID */}
                        <input
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={formData.id}
                            onChange={handleChange}
                            readOnly={productoSeleccionado !== null}
                        />


                        {/* Nombre */}
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Name"
                            value={formData.nombre}
                            onChange={handleChange}
                        />


                        {/* Precio */}
                        <input
                            type="number"
                            name="precio"
                            placeholder="Precio"
                            value={formData.precio}
                            onChange={handleChange}
                            min="0"
                            step="any"
                        />


                        {/* Stock */}
                        <input
                            type="number"
                            name="stock"
                            placeholder="Stock"
                            value={formData.stock}
                            onChange={handleChange}
                            min="0"
                            step="1"
                        />


                        {/* Categoría */}
                        <input
                            type="text"
                            name="categoria"
                            placeholder="Category"
                            value={formData.categoria}
                            onChange={handleChange}
                        />


                        <div className="msf-actions">

                            <button
                                type="submit"
                                className="msf-btn"
                            >
                                {productoSeleccionado
                                    ? "Actualizar"
                                    : "Agregar"}
                            </button>

                            <button
                                type="button"
                                className="msf-btn msf-btn-back"
                                onClick={onCancelar}
                            >
                                Cancelar
                            </button>

                        </div>

                    </div>


                    {/* Segundo panel del formulario original */}
                    <div className="msf-panel msf-panel-2">

                        <h3>Details</h3>

                        <input
                            type="text"
                            placeholder="Company (optional)"
                        />

                        <input
                            type="tel"
                            placeholder="Phone number"
                        />

                        <div className="msf-actions">

                            <label
                                htmlFor="step1"
                                className="msf-btn msf-btn-back"
                            >
                                ← Back
                            </label>

                        </div>

                    </div>


                    {/* Tercer panel del formulario original */}
                    <div className="msf-panel msf-panel-3">

                        <h3>All done!</h3>

                        <p className="msf-success">
                            ✓ Form submitted successfully!
                        </p>

                        <div className="msf-actions">

                            <label
                                htmlFor="step1"
                                className="msf-btn"
                            >
                                Start Over
                            </label>

                        </div>

                    </div>

                </div>

            </div>

        </form>
    );
}