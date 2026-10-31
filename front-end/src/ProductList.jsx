import { ProductItem } from "./ProductItem";

export function GetAllProducts({ products, onEditClick, onDeleteClick }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Acciones</th>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map((producto) => (
            <ProductItem
              key={producto.id}
              id={producto.id}
              producto={producto}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}