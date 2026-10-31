// import { ProductItem } from './productItem';

// export function GetAllProducts({ products }) {
//   return (
//     <div>
//       {products.map((producto) => (
//         <ProductItem id={producto.id} producto={producto} />
//       ))}
//     </div>
//   );
// }
import { allProducts } from './productosMock';
import { ProductItem } from './productItem';

export function GetAllProducts({ products, onEdit, onRemove }) {
  // {products} --- props
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>nombre</th>
          <th>precio</th>
          <th>stock</th>
          <th>categoria</th>
        </tr>
        {products.map((producto) => (
          <>
            <p>
              {producto.nombre === 'Mouse Inalambrico' ? 'Best Choise' : ''}
            </p>
            <ProductItem
              id={producto.id}
              producto={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              categoria={producto.categoria}
              onEdit={onEdit}
              OnRemove={onRemove}
            />
          </>
        ))}
      </table>
    </div>
  );
}
