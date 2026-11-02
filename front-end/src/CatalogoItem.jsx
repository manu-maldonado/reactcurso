export function CatalogoItem({ id, producto, onCallbackClick }) {
  return (
    <tr id="id">
      <td>
        <button
          onClick={() => onCallbackClick(true)}
          className="mag-btn mag-btn-sky"
        >
          Actualizar Producto
        </button>
      </td>
      <td>
        <button
          onClick={() => onCallbackClick(false)}
          className="mag-btn mag-btn-sky"
        >
          Eliminar Producto
        </button>
      </td>
      <td>{id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.categoria}</td>
    </tr>
  );
}
