import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox";

export function GetAllProducts({ products }) {
  const [search, setSearch] = useState("");

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const manejarClicEncabezado = (nombreColumna) => {
    //console.log(`Hiciste Clic en el Encabezado: ${nombreColumna}`);
    if (sortColumn === nombreColumna) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(nombreColumna);
      setSortDirection("asc");
    }
  };

  const productosOrdenados = [...products].sort((a, b) => {
    if (sortColumn === "") {
      return 0;
    }
    //console.log(`La Columna es: ${sortColumn}`);
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];
    console.log(`El Valor A es: ${valueA}`);
    console.log(`El Valor B es: ${valueB}`);

    let comparacion;

    if (sortColumn === "id") {
      comparacion = Number(valueA) - Number(valueB);
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      comparacion = valueA - valueB;
    } else {
      comparacion = String(valueA).localeCompare(String(valueB), "es", {
        numeric: true,
        sensitivity: "base",
      });
    }
    return sortDirection === "asc" ? comparacion : -comparacion;
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
            <th onClick={() => manejarClicEncabezado("id")}>#</th>
            <th onClick={() => manejarClicEncabezado("nombre")}>Nombre</th>
            <th onClick={() => manejarClicEncabezado("precio")}>Precio</th>
            <th onClick={() => manejarClicEncabezado("stock")}>Stock</th>
            <th onClick={() => manejarClicEncabezado("categoria")}>
              Categoría
            </th>
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
