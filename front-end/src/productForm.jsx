import { useState } from 'react';
import { useProductForm } from './useproductForm';

// Asegúrate de respetar mayúsculas/minúsculas del archivo

export function ProductForm({
  productoAEditar,
  products,
  callbackSetLoadingProducts,
  onSave,
  onCancel,
}) {
  let newProduct = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
    categoria: '',
  };
  const [formData, setFormData] = useState(productoAEditar || newProduct);

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSave(formData);
  };

  // 2. El return DEBE ir aquí adentro, antes de que cierre la llave de la función
  return (
    <>
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
              <h3>Your Info</h3>
              <h3>{productoAEditar ? 'Editar Producto' : 'Nuevo Producto'}</h3>

              <input type="text" placeholder="ID" readOnly={true} />

              <input
                type="text"
                name="nombre"
                placeholder="Name"
                value={formData.nombre}
                onChange={handleChange}
              />

              <input
                type="text"
                name="precio"
                placeholder="Precio"
                value={formData.precio}
                onChange={handleChange}
              />

              <input type="text" placeholder="ID" readOnly={true} />

              <div className="msf-actions">
                <button type="submit">
                  <span className="msf-btn">
                    {productoAEditar ? 'Actualizar' : 'Guardar'}
                  </span>
                </button>

                <button type="button" onClick={onCancel}>
                  Cancelar
                </button>
              </div>

              <input type="email" placeholder="Email 1" />
              <input type="email" placeholder="Email 2" />

              <button type="button">
                <label htmlFor="step2" className="msf-btn">
                  Next →
                </label>
              </button>
            </div>

            <div className="msf-panel msf-panel-2">
              <h3>Details</h3>
              <input type="text" placeholder="Company (optional)" />
              <input type="tel" placeholder="Phone number" />
              <div className="msf-actions">
                <label htmlFor="step1" className="msf-btn msf-btn-back">
                  ← Back
                </label>
                <label htmlFor="step3" className="msf-btn">
                  Next →
                </label>
              </div>
            </div>

            <div className="msf-panel msf-panel-3">
              <h3>All done!</h3>
              <p className="msf-success">
                ✓ Form submitted, zero JavaScript used!
              </p>
              <div className="msf-actions">
                <label htmlFor="step1" className="msf-btn">
                  Start Over
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
} // <-- Aquí cierra correctamente la función ProductForm
