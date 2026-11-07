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

  async function crearPost(evt) {
    evt.preventDefault();
    if (!nuevo.title.trim()) return;

    try {
      const creado = await postsService.create({ ...nuevo, userId: 1 });
      console.log("Se creo? jaja", creado);
      setPosts((prev) => [creado, ...prev]);
      setNuevo({ title: "", body: "" });
    } catch {
      console.log("No se creo :((");
    }
  }

  async function eliminar(id) {
    try {
      await postsService.delete(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
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
    crearPost,
    eliminar,
  };
}
