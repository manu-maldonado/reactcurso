import editButton from "./assets/edit-note.svg";
import deleteButton from "./assets/delete-icon.svg";

export function ProductItem({ id, producto, onEdit, onRemove }) {
  return (
    <>
      <tr key={id}>
        <td>
          <img
            src={editButton}
            onClick={() => onEdit(producto)}
            width={32}
            height={32}
            style={{ background: "white" }}
          />
        </td>
        <td>
          <img
            src={deleteButton}
            onClick={() => {
              if (
                window.confirm("¿Estas seguro que deseas eliminar el producto?")
              ) {
                onRemove(id);
              }
            }}
            width={32}
            height={32}
            style={{ background: "white" }}
          />
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
