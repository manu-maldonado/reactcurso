import { Link } from "react-router-dom";
import { productos } from "./productosData";

export function ListaProductos() {
    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "sans-serif", padding: "20px" }}>
            <h2>🧭 Catálogo con Rutas</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {productos.map((prod) => (
                    <li
                        key={prod.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "12px",
                            marginBottom: "10px",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <strong>{prod.nombre}</strong>
                            <div style={{ color: "green" }}>${prod.precio}</div>
                        </div>
                        {/* Lleva a /producto/1, /producto/2, etc. */}
                        <Link to={`/producto/${prod.id}`}>Ver detalle →</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}