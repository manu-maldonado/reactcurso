import EditButton from "./assets/edit-note.svg";
import DeleteButton from "./assets/delete-icon.svg";

export function ProductItem({ id, producto, onEditClick, onDeleteClick }) {
  return (
    <tr id={id}>
      <td>
        <img
          src={EditButton}
          width={24}
          height={24}
          style={{ cursor: 'pointer', marginRight: '8px' }}
          alt="Editar"
          onClick={() => onEditClick(producto)}
        />
        <img
          src={DeleteButton}
          width={24}
          height={24}
          style={{ cursor: 'pointer' }}
          alt="Eliminar"
          onClick={() => onDeleteClick(producto.id)}
        />
      </td>
      <td>{id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.categoria}</td>
    </tr>
  );
}