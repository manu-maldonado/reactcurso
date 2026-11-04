import editIcon from "../assets/img/edit.svg";

function ProductItem({id, product, setCanHandleForm}) {
    return (
      <tr id={id}>
        <td>{product.id}</td>
        <td>{product.nombre}</td>
        <td>{product.categoria}</td>
        <td>${product.precio}</td>
        <td><button onClick={() => {setCanHandleForm(true)}}><img width="30px" height="30px" src={editIcon}/></button></td>
      </tr>
    );
  }
  
  export default ProductItem;