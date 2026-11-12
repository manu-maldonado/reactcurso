import React from "react";
import { Link } from "react-router-dom";

export const Pagina404 = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta a la que intentas acceder no existe.</p>
      <Link to="/">Regresar al inicio</Link>
    </div>
  );
};
