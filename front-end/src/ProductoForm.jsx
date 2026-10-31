import { useState } from "react";

export function ProductoForm({
  productoEditar,
  onGuardarProducto,
  onCancelar
}) {

  //Estado del formulario
  const [formulario, setFormulario] = useState({
    nombre: productoEditar?.nombre ?? "",
    precio: productoEditar?.precio ?? "",
    stock: productoEditar?.stock ?? "",
    categoria: productoEditar?.categoria ?? ""
  });

  //Estado del paso actual
  const [paso, setPaso] = useState(1);

  //Actualizar campos
  function manejarCambio(event) {
    const { name, value } = event.target;

    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value
    }));
  }

  //Guardar o actualizar producto
  function guardarProducto(event) {
    event.preventDefault();

    const nuevoProducto = {
      nombre: formulario.nombre.trim(),
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
      categoria: formulario.categoria
    };

    if (
      !nuevoProducto.nombre ||
      !nuevoProducto.categoria ||
      formulario.precio === "" ||
      !Number.isFinite(nuevoProducto.precio) ||
      nuevoProducto.precio < 0 ||
      formulario.stock === "" ||
      !Number.isInteger(nuevoProducto.stock) ||
      nuevoProducto.stock < 0
    ) {
      alert("Verifica los datos del producto.");
      return;
    }

    onGuardarProducto(nuevoProducto);
  }

  return (
    <form onSubmit={guardarProducto}>

      <div className="msf-wrap">

        <div className="msf-progress">
          <span className="msf-step-label">
            1. Información
          </span>

          <span className="msf-step-label">
            2. Detalles
          </span>

          <span className="msf-step-label">
            3. Confirmación
          </span>
        </div>

        <div className="msf-body">

          {/* PASO 1 */}
          {paso === 1 && (
            <div className="msf-panel" style={{ display: "flex" }}>

              <h3>Información del producto</h3>

              <label htmlFor="nombre">Nombre</label>

              <input
                id="nombre"
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Nombre del producto"
                required
              />

              <label htmlFor="categoria">Categoría</label>

              <select
                id="categoria"
                name="categoria"
                value={formulario.categoria}
                onChange={manejarCambio}
                required
              >
                <option value="">Seleccionar categoría</option>
                <option value="Periféricos">Periféricos</option>
                <option value="Pantallas">Pantallas</option>
                <option value="Audio">Audio</option>
              </select>

              <div className="msf-actions">
                <button
                  type="button"
                  className="msf-btn"
                  onClick={() => {
                    if (!formulario.nombre.trim() || !formulario.categoria) {
                      alert("Completa el nombre y la categoría.");
                      return;
                    }

                    setPaso(2);
                  }}
                >
                  Siguiente →
                </button>
              </div>

            </div>
          )}

          {/* PASO 2 */}
          {paso === 2 && (
            <div className="msf-panel" style={{ display: "flex" }}>

              <h3>Detalles del producto</h3>

              <label htmlFor="precio">Precio</label>

              <input
                id="precio"
                type="number"
                name="precio"
                value={formulario.precio}
                onChange={manejarCambio}
                placeholder="Precio"
                min="0"
                step="0.01"
                required
              />

              <label htmlFor="stock">Stock</label>

              <input
                id="stock"
                type="number"
                name="stock"
                value={formulario.stock}
                onChange={manejarCambio}
                placeholder="Cantidad disponible"
                min="0"
                step="1"
                required
              />

              <div className="msf-actions">

                <button
                  type="button"
                  className="msf-btn msf-btn-back"
                  onClick={() => setPaso(1)}
                >
                  ← Regresar
                </button>

                <button
                  type="button"
                  className="msf-btn"
                  onClick={() => {
                    if (
                      formulario.precio === "" ||
                      formulario.stock === "" ||
                      !Number.isFinite(Number(formulario.precio)) ||
                      Number(formulario.precio) < 0 ||
                      !Number.isInteger(Number(formulario.stock)) ||
                      Number(formulario.stock) < 0
                    ) {
                      alert("Introduce un precio y stock válidos.");
                      return;
                    }

                    setPaso(3);
                  }}
                >
                  Siguiente →
                </button>

              </div>
            </div>
          )}

          {/* PASO 3 */}
          {paso === 3 && (
            <div className="msf-panel" style={{ display: "flex" }}>

              <h3>Confirmar producto</h3>

              <p>Nombre: {formulario.nombre}</p>
              <p>Categoría: {formulario.categoria}</p>
              <p>Precio: ${formulario.precio}</p>
              <p>Stock: {formulario.stock}</p>

              <div className="msf-actions">

                <button
                  type="button"
                  className="msf-btn msf-btn-back"
                  onClick={() => setPaso(2)}
                >
                  ← Regresar
                </button>

                <button type="submit" className="msf-btn">
                  {productoEditar
                    ? "Actualizar producto"
                    : "Guardar producto"}
                </button>

              </div>
            </div>
          )}

          <div className="msf-actions">
            <button
              type="button"
              className="msf-btn msf-btn-back"
              onClick={onCancelar}
            >
              Cancelar
            </button>
          </div>

        </div>
      </div>
    </form>
  );
}