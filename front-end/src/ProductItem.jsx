export function ProductItem({ id, product }) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{product.nombre}</td>
        <td>{product.precio}</td>
        <td>{product.categoria}</td>
      </tr>
    </>
  );
}
