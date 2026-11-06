import { useState } from "react";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";

export function Catalogo({ products }) {
  const [productos, setProductos] = useState([...products]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);

  // krea xd
  const agregarProducto = (nuevo) => {
    const productoConId = { ...nuevo, id: `p${Date.now()}` };
    setProductos([...productos, productoConId]);
  };

  // aktuliza
  const actualizarProducto = (actualizado) => {
    setProductos(
      productos.map((p) => (p.id === actualizado.id ? actualizado : p))
    );
  };

  // elimina
  const eliminarProducto = (id) => setProductos(productos.filter((p) => p.id !== id));

  const handleGuardar = (producto) => {
    if (productoEditar) {
      actualizarProducto(producto);
    } else {
      agregarProducto(producto);
    }
    setProductoEditar(null);
    setMostrarForm(false);
  };

  const handleNuevo = () => {
    setProductoEditar(null);
    setMostrarForm(true);
  };

  const handleEditar = (producto) => {
    setProductoEditar(producto);
    setMostrarForm(true);
  };

  const handleCancelar = () => {
    setProductoEditar(null);
    setMostrarForm(false);
  };

  return (
    <>
      <GetAllProducts products={productos} onEdit={handleEditar} onDelete={eliminarProducto} />

      <button onClick={handleNuevo}>Agregar Producto</button>

      {mostrarForm && (
        <ProductForm
          // "key" forza al perro de react ke reinicie el form al cambiar de producto xd
          key={productoEditar ? productoEditar.id : "nuevo"}
          producto={productoEditar}
          onSave={handleGuardar}
          onCancel={handleCancelar}
        />
      )}
    </>
  );
}
