import { useState } from "react";
import { ProductItem } from "./ProductItem";

export function GetAllProducts({ products, name = "" }) {
  const [orden, setOrden] = useState("id-asc");

  const productosFiltrados = products.filter((producto) =>
    producto.nombre.toLowerCase().includes(name.toLowerCase())
  );

  const [campo, direccion] = orden.split("-");

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    const resultado =
      campo === "nombre"
        ? a.nombre.localeCompare(b.nombre, "es")
        : a[campo] - b[campo];

    return direccion === "asc" ? resultado : -resultado;
  });

  return (
    <div>
      <select value={orden} onChange={(evt) => setOrden(evt.target.value)}>
        <option value="nombre-asc">Nombre ascendente (A-Z)</option>
        <option value="nombre-desc">Nombre descendente (Z-A)</option>
        <option value="id-asc">ID ascendente</option>
        <option value="id-desc">ID descendente</option>
        <option value="precio-asc">Precio ascendente</option>
        <option value="precio-desc">Precio descendente</option>
      </select>

      <table>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoria</th>
        </tr>
        {productosOrdenados.map((producto) => (
          <ProductItem key={producto.id} id={producto.id} producto={producto} />
        ))}
      </table>
    </div>
  );
}