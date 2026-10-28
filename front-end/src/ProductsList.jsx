import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox";

export function GetAllProducts({ products }) {
  const [search, setSearch] = useState("");

  const [sortConfig, setSortConfig] = useState({
    columna: null,
    direccion: "asc",
  });

  function manejarClicTabla(event) {
    const encabezado = event.target.closest("th[data-sort-key]");

    if (!encabezado || !event.currentTarget.contains(encabezado)) {
      return;
    }

    const columna = encabezado.dataset.sortKey;
    //console.log(`La Columna en la que hicieron Clic es: ${columna}`);

    setSortConfig((ordenAnterior) => ({
      columna,
      direccion:
        ordenAnterior.columna === columna && ordenAnterior.direccion === "asc"
          ? "desc"
          : "asc",
    }));
  }

  const productosOrdenados = [...products].sort((a, b) => {
    if (sortConfig.columna === "") {
      return 0;
    }
    //console.log(`La Columna es: ${sortConfig.columna}`);
    const valueA = a[sortConfig.columna];
    const valueB = b[sortConfig.columna];
    //console.log(`El Valor A es: ${valueA}`);
    //console.log(`El Valor B es: ${valueB}`);

    let comparacion;

    if (typeof valueA === "number" && typeof valueB === "number") {
      comparacion = valueA - valueB;
    } else {
      comparacion = String(valueA ?? "").localeCompare(
        String(valueB ?? ""),
        "es",
        {
          numeric: true,
          sensitivity: "base",
        },
      );
    }
    return sortConfig.direccion === "asc" ? comparacion : -comparacion;
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
      <table onClick={manejarClicTabla}>
        <thead>
          <tr>
            <th data-sort-key="id">#</th>
            <th data-sort-key="nombre">Nombre</th>
            <th data-sort-key="precio">Precio</th>
            <th data-sort-key="stock">Stock</th>
            <th data-sort-key="categoria">Categoría</th>
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
