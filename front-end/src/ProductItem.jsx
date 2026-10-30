//Encargado de representar los datos de cada producto.

export function ProductItem({ producto, index, bestChoice }) {
  return (
    <tr>
      <td>{index}</td>

      <td>
        {producto.nombre}
        {bestChoice && <p>Best Choice</p>}
      </td>

      <td>${producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.categoria}</td>
    </tr>
  );
}