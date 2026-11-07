import { useState } from "react";
import { jsonPlaceholderService } from "./services/jsonPlaceholderService";

export function PostDelete() {
  // ID de la publicación
  const [postId, setPostId] = useState("1");

  // Publicación consultada
  const [post, setPost] = useState(null);

  // Estados de las peticiones
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [eliminado, setEliminado] = useState(false);

  // Consultar la publicación antes de eliminar
  const handleBuscar = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setEliminado(false);
    setPost(null);

    try {
      const respuesta = await jsonPlaceholderService.getById(
        Number(postId)
      );

      setPost(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar la publicación
  const handleEliminar = async () => {
    if (!post) return;

    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar la publicación ${post.id}?`
    );

    if (!confirmar) return;

    setLoading(true);
    setError(null);
    setEliminado(false);

    try {
      await jsonPlaceholderService.remove(post.id);

      setEliminado(true);
      setPost(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Eliminar publicación</h2>

      <form onSubmit={handleBuscar}>
        <label htmlFor="deletePostId">
          ID de publicación:
        </label>

        <input
          id="deletePostId"
          type="number"
          min="1"
          max="100"
          required
          value={postId}
          onChange={(event) => {
            setPostId(event.target.value);
            setPost(null);
            setEliminado(false);
            setError(null);
          }}
        />

        <button type="submit" disabled={loading}>
          Buscar publicación
        </button>
      </form>

      {loading && <p>Procesando solicitud...</p>}

      {error && (
        <p role="alert">
          Error: {error.message}
        </p>
      )}

      {post && !eliminado && (
        <article>
          <h3>Publicación encontrada</h3>

          <p><strong>ID:</strong> {post.id}</p>
          <p><strong>Usuario:</strong> {post.userId}</p>
          <p><strong>Título:</strong> {post.title}</p>
          <p><strong>Contenido:</strong> {post.body}</p>

          <button
            type="button"
            onClick={handleEliminar}
            disabled={loading}
          >
            Eliminar publicación
          </button>
        </article>
      )}

      {eliminado && (
        <p role="status">
          La API confirmó la eliminación simulada.
        </p>
      )}
    </section>
  );
}
