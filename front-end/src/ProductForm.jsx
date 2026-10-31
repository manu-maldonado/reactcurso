import { useState } from "react";

function getProductFormData(product) {
  return {
    nombre: product?.nombre ?? "",
    precio: product ? String(product.precio) : "",
    stock: product ? String(product.stock) : "",
    categoria: product?.categoria ?? "",
  };
}

export function ProductForm({
  products,
  callbackSetProducts,
  mode,
  onCancel,
}) {
  const initialProduct = mode === "update" ? products[0] : null;
  const [selectedId, setSelectedId] = useState(
    initialProduct ? String(initialProduct.id) : "",
  );
  const [formData, setFormData] = useState(getProductFormData(initialProduct));

  function handleProductSelection(event) {
    const id = event.target.value;
    const selectedProduct = products.find(
      (product) => String(product.id) === id,
    );
    setSelectedId(id);
    setFormData(getProductFormData(selectedProduct));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const productData = {
      nombre: formData.nombre.trim(),
      precio: Number(formData.precio),
      stock: Number(formData.stock),
      categoria: formData.categoria.trim(),
    };

    if (mode === "update") {
      callbackSetProducts((currentProducts) =>
        currentProducts.map((product) =>
          String(product.id) === selectedId
            ? { ...product, ...productData }
            : product,
        ),
      );
    } else {
      callbackSetProducts((currentProducts) => {
        const nextId =
          currentProducts.reduce((maxId, product) => {
            const numericId = Number(
              String(product.id).match(/\d+$/)?.[0] ?? 0,
            );
            return Math.max(maxId, numericId);
          }, 0) + 1;
        const updatedProducts = [...currentProducts];
        updatedProducts.push({ id: `p${nextId}`, ...productData });
        return updatedProducts;
      });
    }

    onCancel();
  }

  return (
    <form className="catalog-product-form" onSubmit={handleSubmit}>
      <div className="msf-wrap">
        <div className="msf-body">
          <div className="msf-panel msf-panel-1 catalog-form-panel">
            <h3>{mode === "update" ? "Actualizar producto" : "Agregar producto"}</h3>
            {mode === "update" ? (
              <select
                aria-label="Producto que se actualizará"
                required
                value={selectedId}
                onChange={handleProductSelection}
              >
                {products.map((product) => (
                  <option key={product.id} value={String(product.id)}>
                    {product.id} - {product.nombre}
                  </option>
                ))}
              </select>
            ) : null}
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              aria-label="Nombre"
              required
              onChange={handleChange}
              value={formData.nombre}
            />
            <input
              type="number"
              name="precio"
              placeholder="Precio"
              aria-label="Precio"
              min="0"
              step="any"
              required
              onChange={handleChange}
              value={formData.precio}
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              aria-label="Stock"
              min="0"
              step="1"
              required
              onChange={handleChange}
              value={formData.stock}
            />
            <input
              type="text"
              name="categoria"
              placeholder="Categoría"
              aria-label="Categoría"
              required
              onChange={handleChange}
              value={formData.categoria}
            />
            <div className="msf-actions">
              <button type="submit" className="msf-btn">
                {mode === "update" ? "Guardar cambios" : "Crear producto"}
              </button>
              <button
                type="button"
                className="msf-btn msf-btn-back"
                onClick={onCancel}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
