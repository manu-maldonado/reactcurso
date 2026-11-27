import { Link } from "react-router-dom";


export function Home() {
  return (
    <section className="tutoria-card">
      <h1>Plan de Módulos</h1>
      <h2>Selecciona la sección que deseas explorar:</h2>

      <div className="tutoria-grid">
        <Link to="/catalogo" className="tutoria-tile tile-blue">
          <h3>Mini-Catálogo Estático</h3>
        </Link>

        <Link to="/catalogo/1" className="tutoria-tile tile-purple">
          <h3>Detalle con Rutas</h3>
        </Link>

        <Link to="/api" className="tutoria-tile tile-green">
          <h3>Catálogo API Externa</h3>
        </Link>
      </div>
    </section>
  );
}
