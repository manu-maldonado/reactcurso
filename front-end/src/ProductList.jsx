import { ProductItem } from "./ProductItem";

export function GetAllProducts({ products }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem id={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </>
  );
}


