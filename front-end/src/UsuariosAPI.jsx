import { useState, useEffect } from "react";

export function UsuariosAPI() {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function obtenerUsuarios() {

        setLoading(true);
        setError(null);

        try {

            const respuesta = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!respuesta.ok) {
                throw new Error("Error al consultar la API");
            }

            const datos = await respuesta.json();

            // Simulamos una espera de 3 segundos
            await new Promise(resolve => setTimeout(resolve, 3000));

            setUsuarios(datos);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }
    }

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    if (loading) {
        return <p>⏳ Cargando usuarios...</p>;
    }

    if (error) {
        return <p>❌ Ocurrió un error: {error}</p>;
    }

    return (
        <div>
            <h2>Usuarios desde una API</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo electrónico</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}