import React, { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { CatalogoList } from "./CatalogoList";

export function Catalogo({ products }) {
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setIsLoading] = useState(true);
  const [canHandleForm, setCanHandleForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setProductos(products);
    }, 2500);
  });

  return (
    <div>
      {isLoading ? (
        <h4>Está Cargando...</h4>
      ) : (
        <CatalogoList products={productos} onCallbackClick={setCanHandleForm} />
      )}
      <div className="mag-btns">
        <button
          onClick={() => setCanHandleForm(true)}
          className="mag-btn mag-btn-primary"
        >
          Agregar Producto
        </button>
      </div>
      {canHandleForm ? (
        <ProductForm
          products={productos}
          callbackSetLoadingProducts={setIsLoading}
        />
      ) : (
        ""
      )}
    </div>
  );
}
