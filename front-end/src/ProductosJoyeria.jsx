import React, { useState } from "react";
import { Link } from "react-router-dom";

export const TablaProductos = ({ productos }) => {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.modelo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div>
      <h2>Catálogo de Joyería</h2>
      <input
        type="text"
        placeholder="Buscar por nombre o modelo..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th> 
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((item) => (
              <tr key={item.modelo}>
                <td>{item.modelo}</td>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td>${item.precio.toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>
                  <Link to={`/producto/${item.modelo}`}>Ver detalle</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                No se encontraron productos que coincidan con la búsqueda.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
