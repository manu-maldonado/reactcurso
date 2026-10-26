import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox";

export function GetAllProducts({ products }) {
  const [search, setSearch] = useState("");

  const productosFiltrados = products.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase()),
  );

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
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
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
