import { useState } from "react";
import { ErrorPanel } from "./components/ErrorPanel";
import { postsService } from "./services/postsService";

const formVacio = { title: "", body: "", userId: 1 };

export function JSONPlaceholder_create() {
  const [form, setForm] = useState(formVacio);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);
  const [creado, setCreado] = useState(null);

  function cambiarCampo(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function enviar(evt) {
    evt.preventDefault();
    setEnviando(true);
    setError(null);
    setCreado(null);

    try {
      const respuesta = await postsService.crear({
        title: form.title,
        body: form.body,
        userId: Number(form.userId),
      });
      setCreado(respuesta);
      setForm(formVacio);
    } catch (err) {
      setError(err);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div>
      <h3>Crear post</h3>
      <form onSubmit={enviar}>
        <input name="title" placeholder="Título" value={form.title} onChange={cambiarCampo} required />
        <textarea name="body" placeholder="Contenido" value={form.body} onChange={cambiarCampo} required />
        <input name="userId" type="number" min="1" placeholder="Usuario" value={form.userId} onChange={cambiarCampo} />
        <button type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Crear"}
        </button>
      </form>

      {error && <ErrorPanel error={error} />}

      {creado && (
        <article>
          <p>Post creado con id {creado.id}</p>
          <h4>{creado.title}</h4>
          <p>{creado.body}</p>
          <small>Usuario {creado.userId}</small>
        </article>
      )}
    </div>
  );
}