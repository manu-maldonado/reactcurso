import { useState } from "react"; //Es necesaria crear un formulario para la entrada de datos y poder manejar el valor de los inputs
import { placeHolderCreateServices } from "./services/placeHolderCreateService";
export function PlaceHolderCreate() {


    //Consultar una lista de elementos
    const [formData, setFormData] = useState({
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
            [name]: name === "userId" ? Number(value) : value
        }));
    };

    // Enviar los datos
    const handleSubmit = async (e) => {

        if (!formData.title.trim() || !formData.body.trim()) {
            setError("El título y el contenido son obligatorios.");
            return;
        }
        e.preventDefault();

        setLoading(true);
        setError("");
        setResultado(null);

        try {

            const res = await placeHolderCreateServices.create(formData);

            setResultado(res);

            setFormData({
                userId: 1,
                title: "",
                body: ""
            });

        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);
        }
    };

    return (
        <div>

            <h2>Crear una publicación</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Usuario:</label>
                    <input
                        type="number"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>

                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Escribe el título"
                        required
                    />
                </div>

                <div>
                    <label>Contenido:</label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        placeholder="Escribe el contenido"
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Enviando..." : "Crear publicación"}
                </button>

            </form>

            {error && (
                <p style={{ color: "red" }}>{error}</p>
            )}

            {resultado && (
                <div>
                    <h3>Publicación creada correctamente</h3>
                    <p>ID: {resultado.id}</p>
                    <p>Usuario: {resultado.userId}</p>
                    <p>Título: {resultado.title}</p>
                    <p>Contenido: {resultado.body}</p>
                </div>
            )}

        </div>
    );
}