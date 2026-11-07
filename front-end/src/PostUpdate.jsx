import { useState } from "react";
import { jsonPlaceholderService } from "./services/jsonPlaceholderService";

export function PostUpdate() {
  // ID que queremos consultar.
  const [postId, setPostId] = useState("1");

  // Datos del formulario.
  const [form, setForm] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  // Estados de la petición.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [postCargado, setPostCargado] = useState(null);

  // Obtener los datos actuales de la publicación.
  const handleBuscar = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setResultado(null);
    setPostCargado(null);

    try {
      const post = await jsonPlaceholderService.getById(
        Number(postId)
      );

      setForm({
        userId: post.userId,
        title: post.title,
        body: post.body,
      });

      setPostCargado(post.id);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Actualizar los campos del formulario.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enviar la actualización mediante PUT.
  const handleActualizar = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setResultado(null);

    const payload = {
      id: postCargado,
      userId: Number(form.userId),
      title: form.title.trim(),
      body: form.body.trim(),
    };

    try {
      const respuesta = await jsonPlaceholderService.update(
        postCargado,
        payload
      );

      setResultado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Actualizar publicación</h2>

      <form onSubmit={handleBuscar}>
        <label htmlFor="updatePostId">
          ID de publicación:
        </label>

        <input
          id="updatePostId"
          type="number"
          min="1"
          max="100"
          required
          value={postId}
          onChange={(event) => {
            setPostId(event.target.value);
            setPostCargado(null);
            setResultado(null);
          }}
        />

        <button type="submit" disabled={loading}>
          Buscar publicación
        </button>
      </form>

      {postCargado !== null && (
        <form onSubmit={handleActualizar}>
          <h3>Modificar datos</h3>

          <div>
            <label htmlFor="updateUserId">
              Usuario:
            </label>

            <input
              id="updateUserId"
              type="number"
              name="userId"
              min="1"
              required
              value={form.userId}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="updateTitle">
              Título:
            </label>

            <input
              id="updateTitle"
              type="text"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="updateBody">
              Contenido:
            </label>

            <textarea
              id="updateBody"
              name="body"
              required
              value={form.body}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Procesando..." : "Actualizar publicación"}
          </button>
        </form>
      )}

      {loading && <p>Procesando solicitud...</p>}

      {error && (
        <p role="alert">
          Error: {error.message}
        </p>
      )}

      {resultado && (
        <article>
          <h3>Respuesta de actualización</h3>
          <p><strong>ID:</strong> {resultado.id}</p>
          <p><strong>Usuario:</strong> {resultado.userId}</p>
          <p><strong>Título:</strong> {resultado.title}</p>
          <p><strong>Contenido:</strong> {resultado.body}</p>
        </article>
      )}
    </section>
  );
}
