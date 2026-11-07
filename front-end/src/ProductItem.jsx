import EditButton from "./assets/edit-note.svg";
import DeleteButton from "./assets/delete-icon.svg";


export function ProductItem({ id, producto, onCallbackClick }) {

    return (
        <tr>
            <td>
                {onCallbackClick && (
                    <img
                        src={EditButton}
                        onClick={() => onCallbackClick(id, true)}
                        width={32}
                        height={32}
                        style={{
                            background: "white",
                            border: "none",
                            cursor: "pointer"
                        }}
                        alt="Editar producto"
                    />
                )}
            </td>

            <td>
                {onCallbackClick && (
                    <img
                        src={DeleteButton}
                        onClick={() => onCallbackClick(id, false)}
                        width={32}
                        height={32}
                        style={{
                            background: "white",
                            border: "none",
                            cursor: "pointer"
                        }}
                        alt="Eliminar producto"
                    />
                )}
            </td>

            <td>{id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.categoria}</td>
        </tr>
    );
}
