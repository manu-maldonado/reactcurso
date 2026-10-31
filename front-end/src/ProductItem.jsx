//Encargado de representar los datos de cada producto.

import EditButton from "./assets/edit-note.svg";
import DeleteButton from "./assets/delete-icon.svg";

export function ProductItem({
  producto,
  index,
  bestChoice,
  onEditarProducto,
  onEliminarProducto
}) {
  return (
    <tr>

      {/* Ícono para editar */}
      <td>
        <button
          type="button"
          onClick={() => onEditarProducto(producto)}
          className="icon-btn"
          title="Editar producto"
        >
          <img
            src={EditButton}
            width={32}
            height={32}
            alt="Editar"
          />
        </button>
      </td>

      {/* Ícono para eliminar */}
      <td>
        <button
          type="button"
          onClick={() => onEliminarProducto(producto.id)}
          className="icon-btn"
          title="Eliminar producto"
        >
          <img
            src={DeleteButton}
            width={32}
            height={32}
            alt="Eliminar"
          />
        </button>
      </td>

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