import editIcon from "../assets/img/edit.svg";
import deleteIcon from "../assets/img/delete.svg";

function ProductItem({id, product, onEdit, onRemove}) {
    return (
      <tr id={id}>
        <td>{product.id}</td>
        <td>{product.nombre}</td>
        <td>{product.categoria}</td>
        <td>${product.precio}</td>
        <td onClick={() => onEdit(product)} cursor="pointer" className="btn btn-sm"><img width="30px" height="30px" src={editIcon}/></td>
        <td onClick={() => onRemove(id)} cursor="pointer" className="btn btn-sm btn-danger"><img width="30px" height="30px" src={deleteIcon}/></td>
      </tr>
    );
  }
  
  export default ProductItem;