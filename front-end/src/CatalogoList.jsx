import { useState } from "react";
import { CatalogoItem } from "./CatalogoItem";

export function CatalogoList({ products, onEdit, onRemove }) {
  const [search, setSearch] = useState("");
  //const [canHandleForm, setCanHandleForm] = useState(false);

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
    const valueA = a[sortConfig.columna];
    const valueB = b[sortConfig.columna];

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
      <table onClick={manejarClicTabla}>
        <thead>
          <tr>
            <th data-sort-key="iconoUpdate"></th>
            <th data-sort-key="iconoDelete"></th>
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
              <CatalogoItem
                key={producto.id}
                id={producto.id}
                producto={producto}
                onEdit={onEdit}
                onRemove={onRemove}
              />
            ))
          ) : (
            <tr>
              <td colSpan={7}>NO se Encontraron Productos.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
