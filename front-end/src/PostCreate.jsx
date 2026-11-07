import { useState } from "react";
import { jsonPlaceholderService } from "./services/jsonPlaceholderService";

export function PostCreate() {
  // Estado del formulario
  const [form, setForm] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  // Estados de la petición
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultado, setResultado] = useState(null);

  // Actualizar los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enviar los datos a la API
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setResultado(null);

    const payload = {
      userId: Number(form.userId),
      title: form.title.trim(),
      body: form.body.trim(),
    };

    try {
      const respuesta = await jsonPlaceholderService.create(payload);
      setResultado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Crear publicación</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="createUserId">
            Usuario:
          </label>

          <input
            id="createUserId"
            type="number"
            name="userId"
            min="1"
            required
            value={form.userId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="createTitle">
            Título:
          </label>

          <input
            id="createTitle"
            type="text"
            name="title"
            required
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="createBody">
            Contenido:
          </label>

          <textarea
            id="createBody"
            name="body"
            required
            value={form.body}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creando..." : "Crear publicación"}
        </button>
      </form>

      {error && (
        <p role="alert">
          Error al crear la publicación: {error.message}
        </p>
      )}

      {resultado && (
        <article>
          <h3>Publicación creada correctamente</h3>
          <p><strong>ID:</strong> {resultado.id}</p>
          <p><strong>Usuario:</strong> {resultado.userId}</p>
          <p><strong>Título:</strong> {resultado.title}</p>
          <p><strong>Contenido:</strong> {resultado.body}</p>
        </article>
      )}
    </section>
  );
}
