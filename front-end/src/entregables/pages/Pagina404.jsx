import { Link } from "react-router-dom";

export function Pagina404() {
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h1>404</h1>

            <h2>Página no encontrada</h2>

            <p>
                La página que estás buscando no existe
                o la dirección es incorrecta.
            </p>

            <Link to="/joyeria">
                Volver al catálogo de joyería
            </Link>
        </div>
    );
}