import { useAsync } from "./hooks/useAsync";
import { postsService } from "./services/postsService";
import { ErrorPanel } from "./components/ErrorPanel";
import { useState } from "react";

export function PostsAPI() {

    const {
        data,
        loading,
        error,
        recargar
    } = useAsync(
        (signal) => postsService.list(signal),
        []
    );

    const [id, setId] = useState(""); // guarda el id que escribe el usuario
    const [publicacion, setPublicacion] = useState(null); // guarda la publicación obtenida de la API
    const [errorGet, setErrorGet] = useState(""); // guarda un mensaje si falla la consulta

    const [nuevoPost, setNuevoPost] = useState({
        title: "",
        body: "",
        userId: 1
    }); // guarda los datos del formulario

    const [postCreado, setPostCreado] = useState(null); // guarda la respuesta de la API
    const [errorCreate, setErrorCreate] = useState(""); // guarda un mensaje si ocurre un error

    const [postActualizar, setPostActualizar] = useState({ // guarda los datos que queremos actualizar
        id: "",
        title: "",
        body: "",
        userId: 1
    });

    const [postActualizado, setPostActualizado] = useState(null); // guarda la respuesta del servidor
    const [errorUpdate, setErrorUpdate] = useState(""); // guarda los posibles errores

    const [idEliminar, setIdEliminar] = useState(""); // guarda el id que queremos eliminar
    const [eliminado, setEliminado] = useState(false); // indica si la solciitud terminó correctamente
    const [errorDelete, setErrorDelete] = useState(""); // guarda un mensaje si ocurre un error

    const [usuarioFiltro, setUsuarioFiltro] = useState(""); // guarda el id del usuario que queremos consultar
    const [publicacionesFiltradas, setPublicacionesFiltradas] = useState(null); // guarda las publicaciones que devuelve la API
    const [errorFilter, setErrorFilter] = useState(""); // guarda un mensaje si falla la consulta

    async function obtenerPublicacion() {
        if (!id.trim()) {
            setErrorGet("Ingresa un ID");
            setPublicacion(null);
            return;
        }

        try {
            setErrorGet("");

            const resultado = await postsService.get(id);

            setPublicacion(resultado);

        } catch (error) {
            setPublicacion(null);
            setErrorGet(error.message);
        }
    }

    async function crearPublicacion() {

        if (!nuevoPost.title.trim() || !nuevoPost.body.trim() || !Number.isInteger(nuevoPost.userId) || nuevoPost.userId < 1) {
            setErrorCreate("Completa todos los campos");
            return;
        }

        try {
            setErrorCreate("");
            setPostCreado(null);

            const resultado = await postsService.create(nuevoPost);

            setPostCreado(resultado);

        } catch (error) {
            setErrorCreate(error.message);
        }
    }

    async function actualizarPublicacion() {

        if (
            !postActualizar.id ||
            !postActualizar.title.trim() ||
            !postActualizar.body.trim() ||
            !postActualizar.userId
        ) {
            setErrorUpdate("Completa todos los campos");
            return;
        }

        try {
            setErrorUpdate("");
            setPostActualizado(null);

            const id = Number(postActualizar.id);

            const resultado = await postsService.update(id, {
                id,
                title: postActualizar.title,
                body: postActualizar.body,
                userId: Number(postActualizar.userId)
            });

            setPostActualizado(resultado);

        } catch (error) {
            setPostActualizado(null);
            setErrorUpdate(error.message);
        }
    }

    async function eliminarPublicacion() {

        const id = Number(idEliminar);

        if (!Number.isInteger(id) || id < 1) {
            setErrorDelete("Ingresa un ID válido");
            setEliminado(false);
            return;
        }

        const confirmar = window.confirm(
            `¿Estás seguro de eliminar la publicación ${id}?`
        );

        if (!confirmar) {
            return;
        }

        try {
            setErrorDelete("");
            setEliminado(false);

            await postsService.delete(id);

            setEliminado(true);

        } catch (error) {
            setErrorDelete(error.message);
            setEliminado(false);
        }
    }

    async function filtrarPublicaciones() {

        const userId = Number(usuarioFiltro);

        if (!Number.isInteger(userId) || userId < 1) {
            setErrorFilter("Ingresa un ID de usuario válido");
            setPublicacionesFiltradas(null);
            return;
        }

        try {
            setErrorFilter("");
            setPublicacionesFiltradas(null);

            const resultado = await postsService.filter(userId);

            setPublicacionesFiltradas(resultado);

        } catch (error) {
            setErrorFilter(error.message);
            setPublicacionesFiltradas(null);
        }
    }

    if (loading) {
        return <p>⏳ Cargando publicaciones...</p>;
    }

    if (error) {
        return <ErrorPanel error={error} onRetry={recargar} />;
    }


    

    return (
        <div>
            <h2>Administración de publicaciones</h2>

            <h3>Buscar publicación por ID</h3>

            <input
                type="number"
                min="1"
                placeholder="Ingresa un ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <button onClick={obtenerPublicacion}>
                Buscar
            </button>

            {errorGet && <p>❌ {errorGet}</p>}

            {publicacion && (
                <div>
                    <h4>Publicación encontrada</h4>

                    <p><strong>ID:</strong> {publicacion.id}</p>
                    <p><strong>Título:</strong> {publicacion.title}</p>
                    <p><strong>Contenido:</strong> {publicacion.body}</p>
                    <p><strong>Usuario:</strong> {publicacion.userId}</p>
                </div>
            )}

            <h3>Crear publicación</h3>

            <input
                type="text"
                placeholder="Título"
                value={nuevoPost.title}
                onChange={(e) =>
                    setNuevoPost({
                        ...nuevoPost,
                        title: e.target.value
                    })
                }
            />

            <br />

            <textarea
                placeholder="Contenido"
                value={nuevoPost.body}
                onChange={(e) =>
                    setNuevoPost({
                        ...nuevoPost,
                        body: e.target.value
                    })
                }
            />

            <br />

            <input
                type="number"
                min="1"
                placeholder="ID del usuario"
                value={nuevoPost.userId}
                onChange={(e) =>
                    setNuevoPost({
                        ...nuevoPost,
                        userId: Number(e.target.value)
                    })
                }
            />

            <br />

            <button onClick={crearPublicacion}>
                Crear publicación
            </button>

            {errorCreate && <p>❌ {errorCreate}</p>}

            {postCreado && (
                <div>
                    <h4>Publicación creada correctamente</h4>

                    <p><strong>ID:</strong> {postCreado.id}</p>
                    <p><strong>Título:</strong> {postCreado.title}</p>
                    <p><strong>Contenido:</strong> {postCreado.body}</p>
                    <p><strong>Usuario:</strong> {postCreado.userId}</p>
                </div>
            )}

            <h3>Actualizar publicación</h3>

            <input
                type="number"
                min="1"
                placeholder="ID de la publicación"
                value={postActualizar.id}
                onChange={(e) =>
                    setPostActualizar({
                        ...postActualizar,
                        id: e.target.value
                    })
                }
            />

            <br />

            <input
                type="text"
                placeholder="Nuevo título"
                value={postActualizar.title}
                onChange={(e) =>
                    setPostActualizar({
                        ...postActualizar,
                        title: e.target.value
                    })
                }
            />

            <br />

            <textarea
                placeholder="Nuevo contenido"
                value={postActualizar.body}
                onChange={(e) =>
                    setPostActualizar({
                        ...postActualizar,
                        body: e.target.value
                    })
                }
            />

            <br />

            <input
                type="number"
                min="1"
                placeholder="ID del usuario"
                value={postActualizar.userId}
                onChange={(e) =>
                    setPostActualizar({
                        ...postActualizar,
                        userId: Number(e.target.value)
                    })
                }
            />

            <br />

            <button onClick={actualizarPublicacion}>
                Actualizar publicación
            </button>

            {errorUpdate && (
                <p>❌ {errorUpdate}</p>
            )}

            {postActualizado && (
                <div>
                    <h4>Publicación actualizada correctamente</h4>

                    <p><strong>ID:</strong> {postActualizado.id}</p>
                    <p><strong>Título:</strong> {postActualizado.title}</p>
                    <p><strong>Contenido:</strong> {postActualizado.body}</p>
                    <p><strong>Usuario:</strong> {postActualizado.userId}</p>
                </div>
            )}

            <h3>Eliminar publicación</h3>

            <input
                type="number"
                min="1"
                placeholder="ID de la publicación"
                value={idEliminar}
                onChange={(e) => {
                    setIdEliminar(e.target.value);
                    setEliminado(false);
                    setErrorDelete("");
                }}
            />

            <br />

            <button onClick={eliminarPublicacion}>
                Eliminar publicación
            </button>

            {errorDelete && (
                <p>❌ {errorDelete}</p>
            )}

            {eliminado && (
                <div>
                    <h4>✅ Solicitud de eliminación realizada correctamente</h4>
                    <p>Publicación ID: {idEliminar}</p>
                </div>
            )}

            <h3>Filtrar publicaciones por usuario</h3>

            <input
                type="number"
                min="1"
                placeholder="ID del usuario"
                value={usuarioFiltro}
                onChange={(e) => {
                    setUsuarioFiltro(e.target.value);
                    setPublicacionesFiltradas(null);
                    setErrorFilter("");
                }}
            />

            <button onClick={filtrarPublicaciones}>
                Filtrar
            </button>

            {errorFilter && (
                <p>❌ {errorFilter}</p>
            )}

            {publicacionesFiltradas !== null && (
                <div>
                    <h4>
                        Resultados encontrados: {publicacionesFiltradas.length}
                    </h4>

                    {publicacionesFiltradas.length === 0 ? (
                        <p>No se encontraron publicaciones.</p>
                    ) : (
                        <table border="1" cellPadding="10">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Usuario</th>
                                </tr>
                            </thead>

                            <tbody>
                                {publicacionesFiltradas.map((post) => (
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.userId}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}

            <h3>Lista de publicaciones</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Usuario</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}