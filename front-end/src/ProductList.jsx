import { ProductItem } from "./ProductItem";

export function GetAllProducts({ products, onEdit, onDelete }) {
  // {products} --- props
  return (
    <div>
      <table>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoria</th>
        </tr>
        {products.map((producto) => (
          <ProductItem
            key={producto.id}
            id={producto.id}
            producto={producto}
            onEdit={onEdit}
            onDelete={onDelete}
          /> // { id: 323123 , producto:{ name:"dasdas"}}
        ))}
      </table>
    </div>
  );
}