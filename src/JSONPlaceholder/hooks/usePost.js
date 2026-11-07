import { useEffect, useState } from "react";
import { useAsync } from "../../hooks/useAsync";
import { postsService } from "../services/postsService";

export function usePost() {
  const { data, loading, error } = useAsync(
    (signal) => postsService.getAll(signal),
    []
  );

  const [posts, setPosts] = useState([]);
  useEffect(() => setPosts(data ?? []), [data]);

  const [nuevo, setNuevo] = useState({ title: "", body: "" });
  const [editandoId, setEditandoId] = useState(null);

  function empezarEdicion(post) {
    setEditandoId(post.id);
    setNuevo({ title: post.title, body: post.body });
  }

  function cancelarEdicion() {
    setEditandoId(null);
    setNuevo({ title: "", body: "" });
  }

  async function guardarPost(evt) {
    evt.preventDefault();
    if (!nuevo.title.trim()) return;

    try {
      if (editandoId === null) {
        const creado = await postsService.create({ ...nuevo, userId: 1 });
        console.log("Se creo? jaja", creado);
        setPosts((prev) => [creado, ...prev]);
      } else {
        const actualizado = await postsService.update(editandoId, {
          ...nuevo,
          userId: 1,
        });
        console.log("Se edito? jaja", actualizado);
        setPosts((prev) =>
          prev.map((p) => (p.id === editandoId ? actualizado : p))
        );
      }
      setNuevo({ title: "", body: "" });
      setEditandoId(null);
    } catch {
      console.log(editandoId === null ? "No se creo :((" : "No se edito :((");
    }
  }

  async function eliminar(id) {
    try {
      await postsService.delete(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
      if (id === editandoId) cancelarEdicion();
    } catch {
      console.log("error Eliminar");
    }
  }

  return {
    posts,
    loading,
    error,
    nuevo,
    setNuevo,
    editandoId,
    empezarEdicion,
    cancelarEdicion,
    guardarPost,
    eliminar,
  };
}
