import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>

      <Link to="/">
        Regresar al inicio
      </Link>
    </div>
  );
}