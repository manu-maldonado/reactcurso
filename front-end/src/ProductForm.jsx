import editIcon from "./assets/edit-note.svg";

export function ProductForm({
  productos,
  form,
  editandoId,
  mensaje,
  onCambiarCampo,
  onAgregar,
  onGuardar,
  onCancelar,
  onEditar,
  onEliminar,
}) {
  return (
    <div>
      <h4>termino cargar</h4>

      <h3>{editandoId ? "Editar producto" : "Agregar producto"}</h3>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={onCambiarCampo} />
      <input name="precio" type="number" placeholder="Precio" value={form.precio} onChange={onCambiarCampo} />
      <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={onCambiarCampo} />
      <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={onCambiarCampo} />

      <div>
        {editandoId ? (
          <>
            <button type="button" onClick={onGuardar}>Guardar cambios</button>
            <button type="button" onClick={onCancelar}>Cancelar</button>
          </>
        ) : (
          <button type="button" onClick={onAgregar}>Agregar</button>
        )}
      </div>

      {mensaje && <p>{mensaje}</p>}

      {/* READ */}
      <table style={{ margin: "0 auto" }}>
        <tbody>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.categoria}</td>
              <td>
                <button
                  type="button"
                  title="Editar"
                  aria-label="Editar"
                  onClick={() => onEditar(producto.id)}
                >
                  <img
                    src={editIcon}
                    alt=""
                    width="16"
                    height="16"
                    style={{ filter: "invert(1)", verticalAlign: "middle" }}
                  />
                </button>
                <button type="button" onClick={() => onEliminar(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}