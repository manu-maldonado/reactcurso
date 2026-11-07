import { Pen, Trash2 } from "lucide-react";
import { usePost } from "./hooks/usePost";
import { ErrorPanel } from "../components/ErrorPanel";

export function PostViewer() {
  const { posts, loading, error, nuevo, setNuevo, crearPost, eliminar } =
    usePost();

  return (
    <div>
      <form onSubmit={crearPost} className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="titulo"
          value={nuevo.title}
          onChange={(e) =>
            setNuevo((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="descripcion"
          value={nuevo.body}
          onChange={(e) =>
            setNuevo((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <button type="submit">Crear</button>
      </form>

      {loading && <p className="mt-4 text-muted-foreground">Cargando...</p>}
      {error && <ErrorPanel error={error} />}

      {!loading && !error && (
        <ul className="mt-4 max-h-96 space-y-2 overflow-y-auto pr-1">
          {posts.map((p) => (
            <li
              key={p.id}
              className="flex items-start justify-between gap-3 rounded-lg border border-border bg-background p-4"
            >
              <div>
                <h4 className="font-bold text-card-foreground">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </div>
              <button
                type="button"
                className="bg-transparent px-2 py-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => eliminar(p.id)}
              >
                <Pen size={16} />
              </button>
              <button
                type="button"
                className="bg-transparent px-2 py-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                onClick={() => eliminar(p.id)}
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
