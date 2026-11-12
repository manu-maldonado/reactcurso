import React from "react";
import { useParams, Link } from "react-router-dom";

export const DetalleProducto = ({ productos }) => {
  
  const { modelo } = useParams();

  
  const producto = productos.find((p) => p.modelo === modelo);

  if (!producto) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Producto no encontrado</h2>
        <p>El modelo "{modelo}" no existe en el catálogo.</p>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Detalle del Producto: {producto.nombre}</h2>
      <hr />
      <p>
        <strong>Modelo:</strong> {producto.modelo}
      </p>
      <p>
        <strong>Descripción:</strong> {producto.descripcion}
      </p>
      <p>
        <strong>Precio:</strong> ${producto.precio.toFixed(2)}
      </p>
      <p>
        <strong>Stock disponible:</strong> {producto.stock} piezas
      </p>
      <br />
      <Link to="/">← Volver al catálogo</Link>
    </div>
  );
};
