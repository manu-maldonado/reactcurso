import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox";

export function GetAllProducts({ products }) {
  const [search, setSearch] = useState("");

  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const handleHeaderClick = (columnName) => {
    //console.log(`Hiciste Clic en el Encabezado: ${columnName}`);
    if (columnName === "Nombre") {
      setOrdenAscendente(!ordenAscendente);
    }
    if (columnName === "Categoría") {
      setOrdenAscendente(!ordenAscendente);
    }
  };

  const productosOrdenados = [...products].sort((a, b) => {
    const resultado = a.nombre.localeCompare(b.nombre, "es", {
      sensitivity: "base",
    });
    return ordenAscendente ? resultado : -resultado;
  });

  const productosFiltrados =
    search.trim() === ""
      ? productosOrdenados
      : productosOrdenados.filter((p) =>
          p.nombre.toLowerCase().includes(search.trim().toLowerCase()),
        );
  const primerProductoEncontrado =
    search.trim() === ""
      ? productosOrdenados
      : productosOrdenados.find((p) =>
          p.nombre.toLowerCase().includes(search.trim().toLowerCase()),
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
            <th onClick={() => handleHeaderClick("Nombre")}>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th onClick={() => handleHeaderClick("Categoría")}>Categoría</th>
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
