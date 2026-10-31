import { useEffect, useState } from "react";
import { allProducts } from "./productoMock.js";
import { ProductoForm } from "./ProductoForm.jsx";
import "./form.css";

export function Catalogo() {

  //definir estado catalogo, cargando
  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);

  //simular carga de productos
  useEffect(() => {
    const timer = setTimeout(() => {
      setProductos(allProducts);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  //Crear producto
  function agregarProducto(nuevoProducto) {
    const producto = {
        id: crypto.randomUUID(),
        ...nuevoProducto
    }
    setProductos((prevProductos) => {
      const nuevoProductos = prevProductos.slice();
      nuevoProductos.push(producto);
      return nuevoProductos;
    });
    cerrarFormulario();
  }

  //Editar producto
  function editarProducto(id) {
    const productoEncontrado = productos.find((producto) => producto.id === id);
  if (productoEncontrado) {
    setProductoEditar(productoEncontrado);
    setMostrarFormulario(true);
  }
  }

    //Guardar cambios
  function actualizarProducto(productoActualizado) {
    if (!productoEditar) return;
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === productoEditar.id
          ? { ...producto, ...productoActualizado }
          : producto
      )
    );
    cerrarFormulario();
  }

  //Eliminar producto
  function eliminarProducto(id) {
    const productoEncontrado = productos.find((producto) => producto.id === id);
    if (!productoEncontrado) return;
    setProductos((prevProductos) =>
      prevProductos.filter((producto) => producto.id !== id)
    );
  }
  function cerrarFormulario() {
    setProductoEditar(null);
    setMostrarFormulario(false);
  }

  return (
    <div>
      <h2>Catálogo de productos</h2>
      {isLoading ? (
        <h4>Está cargando...</h4>
      ) : (

        <>

          <button
            type="button"

            onClick={() => {
              setProductoEditar(null);
              setMostrarFormulario(true);
            }}

          >
            Nuevo Producto
          </button>

          {mostrarFormulario && (
            <ProductoForm
              key={productoEditar?.id ?? "nuevo"}
              productoEditar={productoEditar}
              onAgregarProducto={agregarProducto}
              onActualizarProducto={actualizarProducto}
              onCancelar={cerrarFormulario}
            />
          )}
          <ul>

            {productos.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} - ${producto.precio}
                {" - "}Stock: {producto.stock}
                {" - "}{producto.categoria}

                <button
                  type="button"
                  onClick={() => editarProducto(producto.id)}
                >
                  Editar
                </button>

                <button type="button" onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}