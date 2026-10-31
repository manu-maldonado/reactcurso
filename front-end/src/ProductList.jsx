import { ProductItem } from "./ProductItem";

export function GetAllProducts({ products, onCallbackClick }) {
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
          <>
          <ProductItem id={producto.id} producto={producto} onCallbackClick={onCallbackClick}/> 
          </>
        ))}
      </table>      
    </div>
  );
}