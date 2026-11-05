import ProductItem from "./ProductItem";
import "../css/Catalogo.css";

const columns = [
  { key: "id", label: "Id" },
  { key: "nombre", label: "Nombre" },
  { key: "categoria", label: "Categoría" },
  { key: "precio", label: "Precio" },
];

export function GetAllProducts({ products, sortBy, sortDir, onSort, onEdit, onRemove }) {
  const arrow = (key) =>
    sortBy === key ? (sortDir === "asc" ? " ▲" : " ▼") : "";

return (
    <div className="table-card">
  <div className="table-scroll">
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c.key}
              className="sortable"
              onClick={() => onSort(c.key)}
            >
              <span className="th-content">
                {c.label}
                <span className="sort-arrow">{arrow(c.key)}</span>
              </span>
            </th>
          ))}
          <th className="actions-th">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            product={product}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}
