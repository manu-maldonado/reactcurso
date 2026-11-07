import EditButton from "./assets/edit-note.svg"
import DeleteButton from "./assets/delete-icon.svg"

export function ProductItem({id,producto,onCallbackClick}){
    return(
     <>
        <tr id={id}>
            <td><img src={EditButton} width={32} height={32} style={{background: "none", border: "none", cursor:"pointer"}}></img></td>
            {/*<button onClick={()=> onCallbackClick(true)} class ="mag-btn mag-btn-sky">Actualizar Producto</button>*/}
            <td><img src={DeleteButton} width={32} height={32} style={{ background: 'white', border: 'none', cursor: 'pointer' }}></img></td>
            <td>{id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.categoria}</td>
        </tr>
     </>   
    )
}