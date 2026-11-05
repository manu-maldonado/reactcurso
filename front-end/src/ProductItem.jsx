export function ProductItem({ id, producto, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>
          <button onClick={() => onEdit(producto)}>
            <img src="/edit-svgrepo-com.svg" alt="Editar" width="20" height="20" />
          </button>
        </td>
        <td>
          <button onClick={() => onDelete(producto)}>
            <img src="/delete-icon.svg" alt="Eliminar" width="20" height="20" />
          </button>
        </td>
        <td>{id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.categoria}</td>
      </tr>
    </>
  );
}