import ProductItem from "./ProductItem";

export function GetAllProducts({ products }) {
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
