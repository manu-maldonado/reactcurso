import ProductItem from "./ProductItem";

export function GetAllProducts({ products, selectedId, onSelect }) {
  return (
    <table border="1">
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
          <ProductItem
            key={product.id}
            product={product}
            selected={product.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </tbody>
    </table>
  );
}
