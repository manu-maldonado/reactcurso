import { useState } from "react";
import { ErrorPanel } from "./components/ErrorPanel";
import { postsService } from "./services/postsService";

export function JSONPlaceholder_delete() {
  const [id, setId] = useState("1");
  const [eliminando, setEliminando] = useState(false);
  const [error, setError] = useState(null);
  const [eliminado, setEliminado] = useState(null);

  async function eliminar(evt) {
    evt.preventDefault();
    if (!window.confirm(`¿Seguro que quieres eliminar el post #${id}?`)) return;

    setEliminando(true);
    setError(null);
    setEliminado(null);

    try {
      await postsService.eliminar(Number(id));
      setEliminado(id);
    } catch (err) {
      setError(err);
    } finally {
      setEliminando(false);
    }
  }

  return (
    <div>
      <h3>Eliminar post</h3>
      <form onSubmit={eliminar}>
        <input type="number" min="1" placeholder="Id del post" value={id} onChange={(evt) => setId(evt.target.value)} required />
        <button type="submit" disabled={eliminando}>
          {eliminando ? "Eliminando..." : "Eliminar"}
        </button>
      </form>

      {error && <ErrorPanel error={error} />}
      {eliminado && <p>Post #{eliminado} eliminado</p>}
    </div>
  );
}