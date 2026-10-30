import { Fragment, useState } from "react";
import { ProductItem } from "./ProductItem";

function compareValues(a, b, order) {
  if (typeof a === "number" && typeof b === "number") {
    return order ? a - b : b - a;
  }

  if (typeof a === "string" && typeof b === "string") {
    return order ? a.localeCompare(b) : b.localeCompare(a);
  }

  if (typeof a === "boolean" && typeof b === "boolean") {
    return order ? Number(a) - Number(b) : Number(b) - Number(a);
  }

  return 0;
}

export function GetAllProducts({ products }) {
  const [sortConfig, setSortConfig] = useState({ key: null, order: true });
  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;

    return compareValues(
      a[sortConfig.key],
      b[sortConfig.key],
      sortConfig.order,
    );
  });

  function handleSort(key) {
    setSortConfig((current) => ({
      key,
      order: current.key === key ? !current.order : true,
    }));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>
              # {sortConfig.key === "id" ? (sortConfig.order ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("nombre")}>
              Nombre{" "}
              {sortConfig.key === "nombre" ? (sortConfig.order ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("precio")}>
              Precio{" "}
              {sortConfig.key === "precio" ? (sortConfig.order ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("stock")}>
              Stock{" "}
              {sortConfig.key === "stock" ? (sortConfig.order ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("categoria")}>
              Categoria{" "}
              {sortConfig.key === "categoria" ? (sortConfig.order ? "▲" : "▼") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((producto) => (
            <Fragment key={producto.id}>
              {producto.nombre === "Mouse Inalámbrico" ? (
                <tr>
                  <td colSpan="5">Best CHOICE</td>
                </tr>
              ) : null}
              <ProductItem id={producto.id} producto={producto} />
            </Fragment>
          ))}
        </tbody>
      </table>
      {products.length === 0 ? <p>No se encontró el producto.</p> : null}
    </div>
  );
}

//export function GetProductById({ productos, producto }) {
//}
