import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";

export function Catalogo({ products }) {
  //definir estado para productos, cargando
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setLoading] = useState(true);
  const [canHandleForm, setCanHandleForm] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);

  const abrirAgregar = () => {
    setProductoEditando(null);
    setCanHandleForm(true);
  };
  const abrirEditar = (producto) => {
    setProductoEditando(producto);
    setCanHandleForm(true);
  };
  const cerrarForm = () => {
    setProductoEditando(null);
    setCanHandleForm(false);
  };
  const eliminar = (producto) => {
    if (window.confirm(`¿Seguro que quieres eliminar "${producto.nombre}"?`)) {
      setProductos(productos.filter((p) => p.id !== producto.id));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  //crud -create, read, update, delete
  return (
    <>
      <div>
        {isLoading ? (
          <h4>Cargando...</h4>
        ) : (
          <GetAllProducts
            products={productos}
            onEdit={abrirEditar}
            onDelete={eliminar}
          />
        )}

        <div class="mag-btns">
          <button onClick={abrirAgregar} class="mag-btn mag-btn-primary">Agregar Producto</button>
          <button onClick={()=> setCanHandleForm(true)} class="mag-btn mag-btn-sky">Actualizar Producto</button>
          <button onClick={()=> setCanHandleForm(false)} class="mag-btn mag-btn-ghost">Eliminar Producto</button>
        </div>

        {canHandleForm ? (
          <ProductForm
            key={productoEditando ? productoEditando.id : "nuevo"}
            products={productos}
            callbackSetProducts={setProductos}
            productoEditando={productoEditando}
            onClose={cerrarForm}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}