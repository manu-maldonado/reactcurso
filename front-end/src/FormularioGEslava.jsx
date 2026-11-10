import { useState } from "react";
import { allProducts } from "./productosMock";
import EditButton from "./assets/edit-note.svg";
import DeleteButton from "./assets/delete-icon.svg";
import "./form.css";

export function FormularioGEslava() {

  // Estado de la lista de productos
  const [productos, setProductos] = useState([...allProducts]);

  // Estado del formulario
  const [formData, setFormData] = useState({
    id: 0,
    nombre: "",
    precio: 0,
    stock: 0,
    categoria: ""
  });

  // Identifica si estamos modificando un producto
  const [editando, setEditando] = useState(false);

  // Capturar los cambios de los campos
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Inserta producto
  const insertarProducto = () => {

    if (
      !formData.nombre.trim() ||
      formData.precio === "" ||
      formData.stock === "" ||
      !formData.categoria.trim()
    ) {
      alert("Faltan datos. Completa todos los campos");
      return;
    }

    const nuevoProducto = {
      ...formData,
      id: `p${Date.now()}`,
      //id: `p${productos.length + 1}`,
      precio: Number(formData.precio),
      stock: Number(formData.stock)
    };

    setProductos([...productos, nuevoProducto]);

    limpiarFormulario();
  };

  // Seleccionar producto para modificar
  const seleccionarProducto = (producto) => {

    setFormData({
      ...producto,
      precio: String(producto.precio),
      stock: String(producto.stock)
    });

    setEditando(true);
  };

  // Modificar Producto
  const modificarProducto = () => {

    if (
      !formData.nombre.trim() ||
      formData.precio === "" ||
      formData.stock === "" ||
      !formData.categoria.trim()
    ) {
      alert("Completa todos los campos");
      return;
    }

    const productosActualizados = productos.map(producto =>
      producto.id === formData.id
        ? {
          ...formData,
          precio: Number(formData.precio),
          stock: Number(formData.stock)
        }
        : producto
    );

    setProductos(productosActualizados);

    limpiarFormulario();
  };

  // ELIMINAR PRODUCTO
  const eliminarProducto = (id) => {

    const confirmar = window.confirm(
      "¿Estás segura de que deseas eliminar este producto?"
    );
    if (!confirmar) {
      return;
    }
    const productosActualizados = productos.filter(
      producto => producto.id !== id
    );

    setProductos(productosActualizados);

    if (formData.id === id) {
      limpiarFormulario();
    }
    alert("Producto eliminado correctamente");
  };

  // Limpiar formulario
  const limpiarFormulario = () => {
    setFormData({
      id: "",
      nombre: "",
      precio: "",
      stock: "",
      categoria: ""
    });

    setEditando(false);
  };

  return (
    <div className="msf-body">
      <hr />
      <h3>Mi versión de formulario</h3>
      <h2>Administración de productos</h2>
      <hr />

      {/* Aqui comienza el formulario */}

      <div>

        <h3>
          {editando ? "Modificar producto" : "Registrar producto"}
        </h3>

        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={formData.nombre}
          onChange={handleChange}
        />

        <br />

        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          min="0"
          step="0.01"
          value={formData.precio}
          onChange={handleChange}
        />

        <br />

        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          min="0"
          step="1"
          value={formData.stock}
          onChange={handleChange}
        />

        <br />

        <label>Categoría:</label>
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={formData.categoria}
          onChange={handleChange}
        />

        <br /><br />

        {/* Botones*/}

        {editando ? (

          <div class="mag-btns">
            <button onClick={modificarProducto} class="mag-btn mag-btn-sky">
              Actualizar producto
            </button>

            <button onClick={limpiarFormulario}>
              Cancelar
            </button>
          </div>

        ) : (

          <button onClick={insertarProducto} class="mag-btn mag-btn-primary">
            Agregar producto
          </button>

        )}

      </div>

      <hr />

      {/* Tabla de productos */}

      <h3>Lista de productos</h3>

      <table border="1" cellPadding="8">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>

          {productos.map(producto => (

            <tr key={producto.id}>

              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.categoria}</td>

              <td>
                <button

                  onClick={() => seleccionarProducto(producto)}
                >
                  <img
                    src={EditButton}
                    alt="Editar"
                    width="24"
                    height="24"
                  />
                </button>
              </td>

              <td>
                <button
                  onClick={() => eliminarProducto(producto.id)}
                >
                  <img
                    src={DeleteButton}
                    alt="Editar"
                    width="24"
                    height="24"
                  />
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <p>Total de productos: {productos.length}</p>

    </div>
  );
}
