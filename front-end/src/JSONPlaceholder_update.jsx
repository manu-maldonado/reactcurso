import { useState } from "react";
import { useAsync } from "./hooks/useAsync";
import { ErrorPanel } from "./components/ErrorPanel";
import { postsService } from "./services/postsService";

export function JSONPlaceholder_update({ id = 1 }) {
  const { data, loading, error, recargar } = useAsync(
    (signal) => postsService.obtener(id, signal),
    [id]
  );

  if (loading) return <p>Cargando post a editar...</p>;
  if (error) return <ErrorPanel error={error} onRetry={recargar} />;

  return <FormularioUpdate key={data.id} post={data} />;
}

function FormularioUpdate({ post }) {
  const [form, setForm] = useState({
    title: post.title,
    body: post.body,
    userId: post.userId,
  });
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);
  const [actualizado, setActualizado] = useState(null);

  function cambiarCampo(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function enviar(evt) {
    evt.preventDefault();
    setEnviando(true);
    setError(null);
    setActualizado(null);

    try {
      const respuesta = await postsService.actualizar(post.id, {
        title: form.title,
        body: form.body,
        userId: Number(form.userId),
      });
      setActualizado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div>
      <h3>Editar post #{post.id}</h3>
      <form onSubmit={enviar}>
        <input name="title" placeholder="Título" value={form.title} onChange={cambiarCampo} required />
        <textarea name="body" placeholder="Contenido" value={form.body} onChange={cambiarCampo} required />
        <input name="userId" type="number" min="1" placeholder="Usuario" value={form.userId} onChange={cambiarCampo} />
        <button type="submit" disabled={enviando}>
          {enviando ? "Guardando..." : "Actualizar"}
        </button>
      </form>

      {error && <ErrorPanel error={error} />}

      {actualizado && (
        <article>
          <p>Post #{actualizado.id} actualizado</p>
          <h4>{actualizado.title}</h4>
          <p>{actualizado.body}</p>
          <small>Usuario {actualizado.userId}</small>
        </article>
      )}
    </div>
  );
}