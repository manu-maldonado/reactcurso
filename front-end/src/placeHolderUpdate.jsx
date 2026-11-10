import { useState } from "react";
import { placeHolderUpdateServices } from "./services/placeHolderUpdateService";

export function PlaceHolderUpdate() {
    const [formData, setFormData] = useState({
        id: 1,
        userId: 1,
        title: "",
        body: ""
    });

    const [resultado, setResultado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Capturar los datos en los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: ["id", "userId"].includes(name)
                ? Number(value)
                : value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("1. Se ejecutó handleSubmit");
        console.log("2. Datos del formulario:", formData);

        if (!formData.title.trim() || !formData.body.trim()) {
            setError("El título y el contenido son obligatorios.");
            return;
        }
        setLoading(true);
        setError("");
        setResultado(null);
        try {
            console.log("3. Enviando petición PUT");

            const res = await placeHolderUpdateServices.update(
                formData.id,
                {
                    userId: formData.userId,
                    title: formData.title,
                    body: formData.body
                },

            );
            console.log("Respuesta del servidor:", res);
            setResultado(res);
        } catch (err) {
            console.error("Error en UPDATE:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>

            <h2>Actualizar una publicación</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userId">Usuario:</label>
                    <input
                        type="number"
                        id="userId"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Titulo:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Nuevo título"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body">Contenido:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        placeholder="Nuevo contenido"
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Actualizando..." : "Actualizar publicación"}
                </button>
                <p>Estado: {loading ? "Enviando..." : "Listo"}</p>
            </form>

            {error && (
                <p style={{ color: "red" }}>{error}</p>
            )}
            {resultado && (
                <div>
                    <h3>Publicación actualizada correctamente</h3>
                    <p>ID: {resultado.id}</p>
                    <p>Usuario: {resultado.userId}</p>
                    <p>Título: {resultado.title}</p>
                    <p>Contenido: {resultado.body}</p>
                </div>
            )}

        </div>
    );

}