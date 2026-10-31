export function ProductItem({ id, producto, onCallbackClick }) {
  return (
    <>
      <tr id={id}>
        <button onClick={()=>onCallbackClick(true)} className="mag-btn mag-btn-sky">Actualizar Producto</button>
        <td>{id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.categoria}</td>
      </tr>
    </>
  );
}
