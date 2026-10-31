export function ProductItem({product}) {
  return (
    <>
      <tr>
        <td>{product.id}</td>
        <td>{product.nombre}</td>
        <td>{product.precio}</td>
        <td>{product.categoria}</td>
      </tr>
    </>
  );
}
