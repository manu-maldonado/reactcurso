import { useEffect, useState } from "react";
import { allProducts } from "./productoMock.js";
import { ProductoForm } from "./ProductoForm.jsx";
import { GetAllProducts } from "./ProductList.jsx";
import "./form.css";

export function Catalogo() {

  //definir estado catalogo, cargando //el padre administra el estado de los productos
  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);

  //simular carga de productos
  useEffect(() => {
    const timer = setTimeout(() => {
      setProductos([...allProducts]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  //Crear producto, el padre agrega el nuevo producto al estado
  function agregarProducto(nuevoProducto) {
    const producto = {
        id: crypto.randomUUID(),
        ...nuevoProducto
    }
    setProductos((prevProductos) => {
      const nuevoProductos = prevProductos.slice();
      nuevoProductos.push(producto); //el push lo estamos haciendo sobre una copia del arreglo, no sobre el estado directamente
      return nuevoProductos;
    });
    cerrarFormulario();
  }

  //Editar producto
  function editarProducto(producto) {
    setProductoEditar(producto);
    setMostrarFormulario(true);
  }

//Guardar cambio //el padre actualiza el estado con el producto modificado
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

    //Guardar producto: crear o actualizar
    function guardarProducto(datosProducto) {
    if (productoEditar) {
        actualizarProducto(datosProducto);
    } else {
        agregarProducto(datosProducto);
    }
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
              onGuardarProducto={guardarProducto}
              onCancelar={cerrarFormulario}
            />
          )}
          
          <GetAllProducts
            products={productos}
            onEditarProducto={editarProducto}
            onEliminarProducto={eliminarProducto}
          />
        </>
      )}
    </div>
  );
}