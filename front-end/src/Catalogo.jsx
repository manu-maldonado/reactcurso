import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
export function Catalogo({ products = [] }) {
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setLoading] = useState(true);
  const [formMode, setFormMode] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <section className="catalog">
        <h2>Catálogo</h2>
        {isLoading ? (
          <p className="catalog-message">Cargando...</p>
        ) : (
          <ul className="catalog-list">
            {productos.map((producto) => (
              <li key={producto.id}>
                {producto.id} - {producto.nombre}
              </li>
            ))}
          </ul>
        )}

        <div className="mag-btns">
          <button
            type="button"
            onClick={() => setFormMode("create")}
            className="mag-btn mag-btn-primary"
          >
            Agregar Producto
          </button>
          <button
            type="button"
            onClick={() => setFormMode("update")}
            className="mag-btn mag-btn-sky"
            disabled={productos.length === 0}
          >
            Actualizar Producto
          </button>
        </div>

        {formMode ? (
          <ProductForm
            key={formMode}
            mode={formMode}
            products={productos}
            callbackSetProducts={setProductos}
            onCancel={() => setFormMode(null)}
          />
        ) : null}
      </section>
    </>
  );
}
