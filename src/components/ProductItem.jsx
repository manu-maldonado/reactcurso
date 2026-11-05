import editIcon from "../assets/img/edit.svg";
import deleteIcon from "../assets/img/delete.svg";
import "../css/Catalogo.css";

function ProductItem({id, product, onEdit, onRemove}) {
    return (
      <tr id={id}>
  <td>{product.id}</td>
  <td>{product.nombre}</td>
  <td>{product.categoria}</td>
  <td className="num">${product.precio}</td>
  <td className="actions-cell">
    <button
      type="button"
      className="btn btn-icon"
      onClick={() => onEdit(product)}
      aria-label="Editar producto"
      title="Editar"
    >
      <img src={editIcon} alt="" />
    </button>
    <button
      type="button"
      className="btn btn-icon btn-danger"
      onClick={() => onRemove(id)}
      aria-label="Eliminar producto"
      title="Eliminar"
    >
      <img src={deleteIcon} alt="" />
    </button>
  </td>
</tr>
    );
  }
  
  export default ProductItem;