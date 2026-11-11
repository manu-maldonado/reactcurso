import { useState } from "react";
import { PlaceHolderServices, PlaceHolderServicesUpdate } from "./services/searchServicePlaceHolder";
import { ErrorPanel } from "./components/ErrorPanel";

export function PlaceHolderUpdate() {
  const [form, setForm] = useState({
    id: "",
    title: "",
    body: "",
    userId: "",
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //Carga los datos actuales del post al escribir el ID dinámicamente
  const handleBlurId = async (e) => {
    const id = e.target.value;
    if (!id) return;

    const controller = new AbortController();
    try {
      setLoading(true);
      const res = await PlaceHolderServices.get(id, controller.signal);
      const post = res?.data ?? res;
      
      if (post && post.title) {
        setForm((prev) => ({
          ...prev,
          title: post.title ?? "",
          body: post.body ?? "",
          userId: post.userId ?? "",
        }));
      }
    } catch (err) {
      console.error("No se pudo cargar el post para editar", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();

    try {
      setLoading(true);
      setError(null);
      
      const payload = {
        id: Number(form.id),
        title: form.title,
        body: form.body,
        userId: Number(form.userId),
      };

      // Enviamos la petición 
      const res = await PlaceHolderServicesUpdate.update(form.id, payload, controller.signal);
      
      setData(res?.data ?? res);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Actualizar Post</h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <input 
          type="number" 
          name="id" 
          placeholder="ID del Post a actualizar" 
          value={form.id} 
          onChange={handleChange}
          onBlur={handleBlurId} // Busca y autocompleta al salir del campo ID
        />
        <input 
          type="text" 
          name="title" 
          placeholder="Escribe el nuevo título..." 
          value={form.title} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="body" 
          placeholder="Escribe el nuevo contenido..." 
          value={form.body} 
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name="userId" 
          placeholder="User ID" 
          value={form.userId} 
          onChange={handleChange} 
        />
        
        <button type="submit" disabled={loading}>
          {loading ? "⏳ Procesando..." : "Actualizar Post"}
        </button>
      </form>

      {error && <ErrorPanel error={error} />}

      {data && (
        <div style={{ background: "#f9f9f9", padding: "10px", borderRadius: "5px" }}>
          <h3>Resultado Actualizado:</h3>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Título:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
          <p><strong>User ID:</strong> {data.userId}</p>
        </div>
      )}
    </div>
  );
}

export default PlaceHolderUpdate;