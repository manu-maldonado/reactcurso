import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";

export function Catalogo({ products }) {
  //definir estado para productos, cargando
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [productSeleccionado, setproductSeleccionado] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  // al darle al lapiz: guardamos el producto y mostramos el form
  const handlerEditProduct = (producto) => {
    setproductSeleccionado(producto);
    setShowForm(true);
  };

  // al darle al bote: preguntamos y quitamos el producto
  const handlerDeleteProduct = (producto) => {
    if (window.confirm(`¿Seguro que quieres eliminar "${producto.nombre}"?`)) {
      setProductos(productos.filter((p) => p.id !== producto.id));
    }
  };

  // al darle a guardar en el form: editar o agregar
  const handlerSaveProduct = (producto) => {
    if (productSeleccionado) {
      setProductos(productos.map((p) => (p.id === producto.id ? producto : p)));
    } else {
      setProductos([...productos, { ...producto, id: "p" + Date.now() }]);
    }
    setShowForm(false);
    setproductSeleccionado(null);
  };

  //crud -create, read, update, delete
  return (
    <>
      <div>
        {isLoading ? (
          <h4>Cargando...</h4>
        ) : (
          <GetAllProducts
            products={productos}
            onEdit={handlerEditProduct}
            onDelete={handlerDeleteProduct}
          />
        )}

        <div class="mag-btns">
          <button
            onClick={() => {
              setproductSeleccionado(null);
              setShowForm(true);
            }}
            class="mag-btn mag-btn-primary"
          >
            Agregar Producto
          </button>
        </div>

        {showForm ? (
          <ProductForm
            key={productSeleccionado ? productSeleccionado.id : ""}
            productAEditar={productSeleccionado}
            onSave={handlerSaveProduct}
            onCancel={() => {
              setShowForm(false);
              setproductSeleccionado(null);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}