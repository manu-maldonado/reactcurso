export function ProductItem({ id, producto, callbackSetHandlerForm }) {
  return (
    <>
      <tr key={id}>
        <button
          onClick={() => callbackSetHandlerForm(true)}
          className="mag-btn mag-btn-sky"
        >
          Actualizar Producto
        </button>
        <td>{id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.categoria}</td>
      </tr>
    </>
  );
}
