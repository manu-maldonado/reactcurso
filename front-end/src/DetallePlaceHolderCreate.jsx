import { useState } from "react";
import { PlaceHolderServicesCreate } from "./services/searchServicePlaceHolder";
import { ErrorPanel } from "./components/ErrorPanel";

export function PlaceHolderCreate() {
  const [form, setForm] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();

    try {
      setLoading(true);
      setError(null);
      
      // Enviamos los datos del formulario (convertimos userId a número si es necesario)
      const res = await PlaceHolderServicesCreate.create(
        { ...form, userId: Number(form.userId) }, 
        controller.signal
      );
      
      setData(res);
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
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <input 
          type="text" 
          name="title" 
          placeholder="Título" 
          value={form.title} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="body" 
          placeholder="Contenido" 
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
          {loading ? "⏳ Guardando..." : "Crear Post"}
        </button>
      </form>

      {error && <ErrorPanel error={error} />}

      {data && (
        <div>
          <h3>Resultado:</h3>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Título:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
          <p><strong>User ID:</strong> {data.userId}</p>
        </div>
      )}
    </div>
  );
}