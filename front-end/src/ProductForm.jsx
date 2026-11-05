import { useState } from "react";

export function ProductForm({ products, callbackSetProducts, productoEditando, onClose }) {
  const [formData, setFormData] = useState(
    productoEditando ?? {
      id: "",
      nombre: "",
      precio: "",
      stock: "",
      categoria: "",
    }
  );

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

    const producto = {
      ...formData,
      precio: Number(formData.precio),
      stock: Number(formData.stock),
    };

    if (productoEditando) {
      callbackSetProducts(
        products.map((p) => (p.id === producto.id ? producto : p))
      );
    } else {
      callbackSetProducts([...products, { ...producto, id: "p" + Date.now() }]);
    }

    console.log("Datos estan listo para ser enviador al servidor", formData, products);

    onClose();
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
            <span className="msf-step-label">1. Your Info</span>
            <span className="msf-step-label">2. Details</span>
            <span className="msf-step-label">3. Done</span>
          </div> */}

        <div className="msf-body">
          <div className="msf-panel msf-panel-1">
            <h3>Your Info</h3>
            <h4>{productoEditando ? "Editar Producto" : "Agregar Producto"}</h4>
            {/* id: "p2",
    nombre: "Mouse Inalámbrico",
    precio: 45,
    stock: 0,
    categoria: "Periféricos", */}

            <input type="text" name="id" placeholder="ID" value={formData.id} readOnly />
            <input type="text" name="nombre" placeholder="Name" onChange={handleChange} value={formData.nombre}/>
            <input type="number" name="precio" placeholder="precio" onChange={handleChange} value={formData.precio}/>
            <input type="number" name="stock" placeholder="stock" onChange={handleChange} value={formData.stock}/>
            {/* to-do move to selectlist */}
            <input type="text" name="categoria" placeholder="category" onChange={handleChange} value={formData.categoria}/>
            <div className="msf-actions">
              <button>
                <label htmlFor="step" className="msf-btn">
                  {productoEditando ? "Actualizar" : "Agregar"}
                </label>
              </button>
              <button type="button" onClick={onClose}>
                Cancelar
              </button>
            </div>
          </div>

          <div className="msf-panel msf-panel-2">
            <h3>Details</h3>
            <input type="text" placeholder="Company (optional)" />
            <input type="tel" placeholder="Phone number" />
            <div className="msf-actions">
              <label htmlFor="step1" className="msf-btn msf-btn-back">
                ← Back
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
  );
}