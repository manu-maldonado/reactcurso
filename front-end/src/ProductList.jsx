export function GetAllProducts({ products, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoria</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.categoria}</td>
            <td>
              <button onClick={() => onEdit(producto)}>Editar</button>
              <button onClick={() => onDelete(producto.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
