import { useAsync } from "./hooks/useAsync";
import { getJsonPlaceService } from "./services/getJsonPlaceService";
import { ErrorPanel } from "./components/ErrorPanel";
import { useState, Fragment } from "react";

export function GetJsonPlaceBox() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [nuevoPost, setNuevoPost] = useState(null);
  const [creando, setCreando] = useState(false);
  const [postEditar, setPostEditar] = useState(null);
  const [modoFormulario, setModoFormulario] = useState("create");
  const [idsEliminados, setIdsEliminados] = useState([]);
  const [mensajeDelete, setMensajeDelete] = useState("");
  const [eliminando, setEliminando] = useState(null);
  const [filtroUserId, setFiltroUserId] = useState("");
  const [filtroAplicado, setFiltroAplicado] = useState("");

  const [comentarios, setComentarios] = useState([]);
  const [postSeleccionado, setPostSeleccionado] = useState(null);
  const [cargandoComentarios, setCargandoComentarios] = useState(false);

  const [tipoConsulta, setTipoConsulta] = useState("search");
  const { data, loading, error, recargar } = useAsync(
    (signal) => {
      if (tipoConsulta === "search") {
        return getJsonPlaceService.search("", signal);
      }
      if (tipoConsulta === "list") {
        return getJsonPlaceService.list("", signal);
      }
      if (tipoConsulta === "filter") {
        return getJsonPlaceService.filter({ userId: filtroAplicado }, signal);
      }
      return Promise.resolve(null);
    },
    [tipoConsulta, filtroAplicado],
  );

  const handleCrear = async (e) => {
    e.preventDefault();
    try {
      setCreando(true);
      const post = await getJsonPlaceService.create({
        title: titulo,
        body: contenido,
        userID: 1,
      });
      setNuevoPost(post);
      setTitulo("");
      setContenido("");
    } catch (error) {
      console.error("Error al crear la publicacion", error);
    } finally {
      setCreando(false);
    }
  };

  const handleActualizar = async () => {
    try {
      setCreando(true);

      const postActualizado = await getJsonPlaceService.update(postEditar.id, {
        id: postEditar.id,
        title: titulo,
        body: contenido,
        userId: postEditar.userId,
      });

      setNuevoPost(postActualizado);
      // Limpiamos el formulario
      setTitulo("");
      setContenido("");
      //setPostEditar(null);

      // Regresamos a la consulta de todos
      //setTipoConsulta("list");
    } catch (error) {
      console.error("Error al actualizar:", error);
    } finally {
      setCreando(false);
    }
  };

  const handlePatch = async () => {
    try {
      setCreando(true);

      const cambios = {};

      if (titulo !== postEditar.title) {
        cambios.title = titulo;
      }

      if (contenido !== postEditar.body) {
        cambios.body = contenido;
      }

      if (Object.keys(cambios).length === 0) {
        alert("No realizaste ningún cambio");
        return;
      }

      const postActualizado = await getJsonPlaceService.patch(
        postEditar.id,
        cambios,
        postEditar,
      );

      setNuevoPost(postActualizado);

      setPostEditar(postActualizado);

      setTitulo(postActualizado.title);
      setContenido(postActualizado.body);
    } catch (error) {
      console.error("Error al modificar:", error);
    } finally {
      setCreando(false);
    }
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm(
      `¿Estás seguro de eliminar la publicación ${id}?`,
    );

    if (!confirmar) return;

    try {
      setEliminando(id);
      setMensajeDelete("");

      await getJsonPlaceService.delete(id);

      setIdsEliminados((actuales) => [...actuales, id]);

      setMensajeDelete(`La publicación ${id} fue eliminada correctamente.`);
    } catch (error) {
      console.error("Error al eliminar:", error);
      setMensajeDelete("No se pudo eliminar la publicación.");
    } finally {
      setEliminando(null);
    }
  };
const handleVerComentarios = async (id) => {
  if (postSeleccionado === id) {
    setPostSeleccionado(null);
    setComentarios([]);
    return;
  }

  try {
    setPostSeleccionado(id);
    setComentarios([]);
    setCargandoComentarios(true);

    const resultado =
      await getJsonPlaceService.commentsByPost(id);

    setComentarios(resultado);
  } catch (error) {
    console.error("Error al consultar comentarios:", error);
  } finally {
    setCargandoComentarios(false);
  }
};

  if (tipoConsulta !== "create") {
    if (loading) return <p>⏳ Buscando...</p>;

    if (error) {
      return <ErrorPanel error={error} onRetry={recargar} />;
    }

    if (!data) return <p>Sin resultados.</p>;
  }

  const resultados = Array.isArray(data) ? data : [data];
  if (resultados.length === 0) {
  return <p>No se encontraron publicaciones para ese usuario.</p>;
}
  return (
    <div>
      <h2>Consulta JSONPlaceholder</h2>
      <div>
        <button
          type="button"
          onClick={() => {
            setPostEditar(null);
            setTitulo("");
            setContenido("");
            setNuevoPost(null);
            setTipoConsulta("create");
            setModoFormulario("create");
          }}
        >
          Crear publicación
        </button>

        <button onClick={() => setTipoConsulta("search")}>Consultar uno</button>

        <button onClick={() => setTipoConsulta("list")}>Consultar todos</button>
      </div>
      <div>
        <label>Filtrar por usuario:</label>
        <input
          type="number"
          min="1"
          placeholder="Ingresa el ID del usuario"
          value={filtroUserId}
          onChange={(e) => setFiltroUserId(e.target.value)}
        />

        <button
          type="button"
          disabled={!filtroUserId}
          onClick={() => {
            setFiltroAplicado(filtroUserId);
            setTipoConsulta("filter");
          }}
        >
          Filtrar
        </button>
      </div>
      {mensajeDelete && <p>{mensajeDelete}</p>}

      {tipoConsulta === "create" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (modoFormulario === "create") {
              handleCrear(e);
            } else if (modoFormulario === "update") {
              handleActualizar();
            } else if (modoFormulario === "patch") {
              handlePatch();
            }
          }}
        >
          {" "}
          <h3>
            {modoFormulario === "create"
              ? "Nueva publicación"
              : modoFormulario === "update"
                ? "Editar publicación"
                : "Modificar parcialmente"}
          </h3>{" "}
          <div>
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contenido</label>
            <input
              type="text"
              name="body"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={creando}>
            {creando
              ? "Guardando..."
              : modoFormulario === "create"
                ? "Crear"
                : modoFormulario === "update"
                  ? "Actualizar"
                  : "Aplicar cambios"}
          </button>{" "}
        </form>
      )}

      {nuevoPost && tipoConsulta === "create" && (
        <div>
          <h3>
            {postEditar
              ? "Publicación editada correctamente"
              : "Publicación creada correctamente"}
          </h3>

          <p>ID: {nuevoPost.id}</p>
          <p>Título: {nuevoPost.title}</p>
          <p>Contenido: {nuevoPost.body}</p>
        </div>
      )}

      {tipoConsulta !== "create" ? (
        <table className="mag-table">
          <thead>
            <tr>
              <th>Acciones</th>
              <th>id</th>
              <th>Title</th>
              <th>Body</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            
{resultados
  .filter((post) => !idsEliminados.includes(post.id))
  .map((data) => (
    <Fragment key={data.id}>
      {/* Fila principal de la publicación */}
      <tr>
        <td>
          <button
            type="button"
            onClick={() => {
              setNuevoPost(null);
              setPostEditar(data);
              setTitulo(data.title);
              setContenido(data.body);
              setTipoConsulta("create");
              setModoFormulario("update");
            }}
          >
            Editar
          </button>

          <button
            type="button"
            onClick={() => {
              setNuevoPost(null);
              setPostEditar(data);
              setTitulo(data.title);
              setContenido(data.body);
              setModoFormulario("patch");
              setTipoConsulta("create");
            }}
          >
            Modificar parcialmente
          </button>

          <button
            type="button"
            onClick={() => handleVerComentarios(data.id)}
          >
            {postSeleccionado === data.id
              ? "Ocultar comentarios"
              : "Ver comentarios"}
          </button>
        </td>

        <td>{data.id}</td>
        <td>{data.title}</td>
        <td><code>{data.body}</code></td>

        <td>
          <button
            type="button"
            onClick={() => handleEliminar(data.id)}
            disabled={eliminando === data.id}
          >
            {eliminando === data.id
              ? "Eliminando..."
              : "Eliminar"}
          </button>
        </td>
      </tr>

      {/* Fila de comentarios */}
      {postSeleccionado === data.id && (
        <tr>
          <td colSpan={5}>
            <h3>Comentarios de la publicación {data.id}</h3>

            {cargandoComentarios ? (
              <p>Cargando comentarios...</p>
            ) : comentarios.length === 0 ? (
              <p>No hay comentarios.</p>
            ) : (
              comentarios.map((comentario) => (
                <div key={comentario.id}>
                  <h4>{comentario.name}</h4>
                  <p>{comentario.email}</p>
                  <p>{comentario.body}</p>
                  <hr />
                </div>
              ))
            )}
          </td>
        </tr>
      )}
    </Fragment>
  ))}

          </tbody>
        </table>
      ) : null}
    </div>
    
  );
}
