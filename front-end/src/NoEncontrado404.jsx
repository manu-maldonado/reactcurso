import { Link } from "react-router-dom";

export function NoEncontrado404() {

    return (
        <div>
            <h1>Error 404</h1>

            <h2>Página no encontrada</h2>

            <p>
                Lo sentimos, la página que buscas no existe.
            </p>

            <Link to="/catalogo">
                Regresar al catálogo
            </Link>
        </div>
    );
}