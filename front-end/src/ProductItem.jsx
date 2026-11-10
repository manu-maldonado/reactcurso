import EditButton from "./assets/edit-note.svg";
import DeleteButton from "./assets/delete-icon.svg";
export function ProductItem({ id, producto, onEdit, onRemove }) {
  return (
    <tr id={id}>
      <td>
        <button onClick={() => onEdit(producto)}>
          <img
            src={EditButton}

            alt="Editar"
            width={32}
            height={32}
            style={{
              background: "white",
              border: "none",
              cursor: "pointer",
            }}
          />
        </button>

      </td>

      <td>
        <button onClick={() => onRemove(producto.id)}>
          <img
          src={DeleteButton}
          alt="Eliminar"
          width={32}
          height={32}
          style={{
            background: "white",
            border: "none",
            cursor: "pointer",
          }}
        />
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