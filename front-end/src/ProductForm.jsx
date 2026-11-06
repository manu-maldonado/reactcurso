import { useState } from "react";

export function ProductForm({ productoAEditar, onSave, onCancel }) {
  let newProduct = {
    id: 0,
    nombre: "",
    precio: 0,
    stock: 0,
    categoria: "",
  };
  const [formData, setFormData] = useState(productoAEditar || newProduct);

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;

    setFormData((prevData) => ({
      //...spread

      ...prevData,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSave({
      ...formData,
      precio: +formData.precio,
    });
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
      {/* <input type="radio" name="step" id="step2" className="msf-radio" />
      <input type="radio" name="step" id="step3" className="msf-radio" /> */}

      <div className="msf-wrap">
        {/* <div className="msf-progress">
            <span className="msf-step-label">1. Agregar</span>
            <span className="msf-step-label">2. Modificar</span>
            <span className="msf-step-label">3. Eliminar</span>
          </div>  */}

        <div className="msf-body">
          <div className="msf-panel msf-panel-1">
            <h3>Informacion</h3>
            <h3>{productoAEditar ? "Editar Producto" : "Nuevo Producto"}</h3>
            <input
              type="text"
              placeholder="ID"
              readOnly="true"
              value={formData.id}
            />
            <input
              type="text"
              placeholder="Name"
              name="nombre"
              onChange={handleChange}
              value={formData.nombre}
            />
            <input
              type="text"
              placeholder="Precio"
              name="precio"
              onChange={handleChange}
              value={formData.precio}
            />
            <input
              type="text"
              placeholder="Stock"
              onChange={handleChange}
              value={formData.stock}
            />
            <input
              type="text"
              placeholder="Category"
              onChange={handleChange}
              value={formData.categoria}
            />

            <div className="msf-actions">
              <button>
                {productoAEditar ? (
                  <label htmlFor="step" className="msf-btn">
                    Actualizar
                  </label>
                ) : (
                  <label htmlFor="step" className="msf-btn">
                    Guardar
                  </label>
                )}
              </button>
              <button type="button" onClick={onCancel}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
