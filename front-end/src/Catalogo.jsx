import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";

export function Catalogo({ products }) {
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [productSeleccionado, setProductSeleccionado] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProductos(products);
    }, 2500);
  }, []);

  //crud -create, read, update, delete
  const handlerSaveProduct = (nuevoOActualizado) => {
    if (productSeleccionado) {
      setProductos((prev) =>
        prev.map((p) =>
          p.id == productSeleccionado.id ? nuevoOActualizado : p
        ),
      );
    } else {
      setProductos((prev) => [
        ...prev,
        { ...nuevoOActualizado, id: `p${Date.now()}` },
      ]);
    }

    setShowForm(false);
    setProductSeleccionado(null);
  };

  const handlerRemoveProduct = (id) => {
    setProductos((prev) => prev.filter((p) => p.id != id));
  };

  const handlerIniciarEdicion = (producto) => {
    setProductSeleccionado(producto);
    setShowForm(true);
  };

  return (
    <>
      <div>
        {isLoading ? (
          <h4>Cargando productos...</h4>
        ) : (
          <GetAllProducts
            products={productos}
            onEdit={handlerIniciarEdicion}
            onRemove={handlerRemoveProduct}
          />
        )}
      </div>
      <div className="mag-btns">
        <button
          onClick={() => {
            setProductSeleccionado(null);
            setShowForm(true);
          }}
          className="mag-btn mag-btn-primary"
        >
          Agregar Producto
        </button>
      </div>

      {showForm ? (
        <ProductForm
          key={productSeleccionado ? productSeleccionado.id : ""}
          productoAEditar={productSeleccionado}
          onSave={handlerSaveProduct}
          onCancel={() => {
            setShowForm(false);
            setProductSeleccionado(null);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}
