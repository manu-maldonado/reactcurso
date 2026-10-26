import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox";

export function GetAllProducts({ products }) {
  const [search, setSearch] = useState("");

  const productosFiltrados =
    search.trim() === ""
      ? products
      : products.filter((p) =>
          p.nombre.toLowerCase().includes(search.toLowerCase()),
        );
  const primerProductoEncontrado =
    search.trim() === ""
      ? products
      : products.find((p) =>
          p.nombre.toLowerCase().includes(search.toLowerCase()),
        );
  const productosAMostrar =
    search.trim() === ""
      ? productosFiltrados
      : primerProductoEncontrado
        ? [primerProductoEncontrado]
        : [];

  return (
    <div>
      <SearchBox value={search} onInputChange={setSearch} />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {productosAMostrar.length > 0 ? (
            productosAMostrar.map((producto) => (
              <ProductItem
                key={producto.id}
                id={producto.id}
                producto={producto}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5}>NO se Encontraron Productos.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
