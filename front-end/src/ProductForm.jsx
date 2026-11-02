import { useState } from "react";

export function ProductForm({ products, callbackSetLoadingProducts }) {
  const [formData, setFormData] = useState({
    id: 0,
    nombre: "",
    precio: 0,
    stock: 0,
    categoria: "",
  });

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;

    setFormData((prevData) => ({
      // ... spread
      ...prevData,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    products.push(formData);
    callbackSetLoadingProducts(true);
    console.log(
      "Los Datos Están Listo para ser Enviados al Servidor",
      formData,
      products,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="radio"
        name="step"
        id="step1"
        className="msf-radio"
        defaultChecked
      />
      <div className="msf-wrap">
        <div className="msf-body">
          <div className="msf-panel msf-panel-1">
            <h3>Información del Producto</h3>
            <input type="text" name="id" placeholder="ID" readOnly={true} />
            <input
              type="text"
              name="nombre"
              placeholder="Name"
              onChange={handleChange}
              value={formData.nombre}
            />
            <input
              type="text"
              name="precio"
              placeholder="precio"
              onChange={handleChange}
              value={formData.precio}
            />
            <input
              type="text"
              name="stock"
              placeholder="stock"
              readOnly={true}
            />
            {/* to-do move to selectlist */}
            <input type="text" placeholder="category" readOnly={true} />
            <div className="msf-actions">
              <button>
                <label htmlFor="step" className="msf-btn">
                  Enviar
                </label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
