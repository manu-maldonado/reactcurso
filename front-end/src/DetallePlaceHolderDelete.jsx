import { useState } from "react";
import { PlaceHolderServicesDelete } from "./services/searchServicePlaceHolder";
import { ErrorPanel } from "./components/ErrorPanel";

export function PlaceHolderDelete() {
  const [id, setId] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) return;

    const controller = new AbortController();

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      // Llamamos al servicio DELETE pasando el ID ingresado dinámicamente
      await PlaceHolderServicesDelete.remove(id, controller.signal);
      
      setSuccess(true);
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
      <h2>Eliminar Post </h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <input 
          type="number" 
          placeholder="Escribe el ID del post a eliminar..." 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        
        <button 
          type="submit" 
          disabled={loading || !id} 
          style={{ 
            padding: "8px", 
            backgroundColor: "#dc2626", 
            color: "white", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {loading ? "⏳ Eliminando..." : "Eliminar Post"}
        </button>
      </form>

      {error && <ErrorPanel error={error} />}

      {success && (
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "10px", borderRadius: "5px", color: "#15803d" }}>
          <p><strong>¡Éxito!</strong> El post con ID <code>{id}</code> fue eliminado correctamente.</p>
        </div>
      )}
    </div>
  );
}

export default PlaceHolderDelete;