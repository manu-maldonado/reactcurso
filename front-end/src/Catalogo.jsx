import React, { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { CatalogoList } from "./CatalogoList";

export function Catalogo({ products }) {
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setIsLoading] = useState(true);

  // Controlar si el Formulario está siendo Abierto y si estamos Editando o Creando
  const [showForm, setShowForm] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setProductos(products);
    }, 2500);
  }, []);

  const handlerSalvarProducto = (nuevoOActualizado) => {
    // Update: Reemplazar el Producto Seleccionado con el Id
    if (productoSeleccionado) {
      // Reemplazamos el Producto que coincida con el Id
      setProductos((prev) =>
        prev.map((p) =>
          p.id == productoSeleccionado.id ? nuevoOActualizado : p,
        ),
      );
    } else {
      // Agregar un Nuevo Elemento
      setProductos((prev) => [
        ...prev,
        { ...nuevoOActualizado, id: `p${Date.now()}` },
      ]);
    }

    // Cerrar Formulario y Limpiarlo
    setShowForm(false);
    setProductoSeleccionado(null);
  };

  const handlerEliminarProducto = (id) => {
    //Eliminar, Filtrar o Sacar Producto con el Id Seleccionado
    //Podríamos Eliminar con Filter o Slice
    setProductos((prev) => prev.filter((p) => p.id != id));
  };

  const handlerIniciarEdicion = (producto) => {
    setProductoSeleccionado(producto);
    setShowForm(true);
  };

  return (
    <div>
      {isLoading ? (
        <h4>Está Cargando...</h4>
      ) : (
        <CatalogoList
          products={productos}
          onEdit={handlerIniciarEdicion}
          onRemove={handlerEliminarProducto}
        />
      )}
      <div className="mag-btns">
        <button
          onClick={() => {
            setProductoSeleccionado(null);
            setShowForm(true);
          }}
          className="mag-btn mag-btn-primary"
        >
          Agregar Producto
        </button>
      </div>
      {showForm ? (
        <ProductForm
          key={productoSeleccionado ? productoSeleccionado.id : ""}
          productoAEditar={productoSeleccionado}
          onSave={handlerSalvarProducto}
          onCancel={() => {
            setShowForm(false);
            setProductoSeleccionado(null);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
