import EditButton from "./assets/edit-icon_1.svg";
import DeleteButton from "./assets/delete-icon_1.svg";

export function CatalogoItem({ id, producto, onEdit, onRemove }) {
  return (
    <tr id="id">
      <td>
        <img
          src={EditButton}
          width={30}
          height={30}
          onClick={() => onEdit(producto)}
          className="mag-btn mag-btn-sky"
        ></img>
      </td>
      <td>
        <img
          src={DeleteButton}
          width={30}
          height={30}
          onClick={() => onRemove(id)}
          className="mag-btn mag-btn-sky"
        ></img>
      </td>
      <td>{id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.categoria}</td>
    </tr>
  );
}
