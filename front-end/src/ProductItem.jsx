export function ProductItem({ id, producto }) {
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.categoria}</td>
      </tr>
    </>
  );
}
