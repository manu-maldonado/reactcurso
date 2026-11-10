import { useState } from "react";
import { placeHolderDeleteServices } from "./services/placeHolderDeleteService";

export function PlaceHolderDelete() {

    const [id, setId] = useState(1);
    const [resultado, setResultado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //captura el ID del input 
    const handleChange = (e) => {
        setId(Number(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResultado(null);
        if (!id || id < 1 || id > 100) {
            setError("Ingresar el ID  entre 1 y 100.");
            setLoading(false);
            return;
        }

        //Confirmación de eliminación
        const confirmDelete = window.confirm(`¿Estás seguro de eliminar la publicación con ID ${id}?`);
        if (!confirmDelete) {
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await placeHolderDeleteServices.delete(id);
            console.log("Respuesta del servidor:", res);
            setResultado(res);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>

            <h2>***** Eliminar una publicación ***** </h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                </label>
                <input
                    type="number"
                    id="idDelete"
                    value={id}
                    onChange={handleChange}
                    min="1"
                    max="100"
                    required />
                <button type="submit" disabled={loading}>
                    {loading ? "Eliminando..." : "Eliminar"}
                </button>
            </form>
            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>

            )}
            {resultado !== null && (
                <div>
                    <p>Publicación eliminada exitosamente.</p>
                    <p>{resultado.message}</p>
                    <p>Respuesta del servidor:
                        {JSON.stringify(resultado)}
                    </p>
                </div>
            )}

        </div>
    );

}