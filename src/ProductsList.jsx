import ProductItem from "./ProductItem";

const columns = [
  { key: "id", label: "Id" },
  { key: "nombre", label: "Nombre" },
  { key: "categoria", label: "Categoría" },
  { key: "precio", label: "Precio" },
];

export function GetAllProducts({ products, sortBy, sortDir, onSort }) {
  const arrow = (key) =>
    sortBy === key ? (sortDir === "asc" ? " ▲" : " ▼") : "";

return (
    <table>
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c.key}
              onClick={() => onSort(c.key)}
              style={{ cursor: "pointer" }}
            >
              {c.label}
              {arrow(c.key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

/*export function GetAllProducts({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}
*/