import { Link } from "react-router-dom";

export function NoEncontrado() {
    return (
        <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif", textAlign: "center" }}>
            <h1>404</h1>
            <p>Esa ruta no existe dentro del catálogo.</p>
            <Link to="/">Ir al inicio</Link>
        </div>
    );
}