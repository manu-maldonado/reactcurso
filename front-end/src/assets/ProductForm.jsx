import { useState } from "react";

export function ProductForm({products, callbackSetLoadingProducts}) {
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
    
    products.push(formData)

    callbackSetLoadingProducts(true)
    
    console.log("Datos estan listos para ser enviados al servidor", formData, products);
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
            {/* id: "p2",
    nombre: "Mouse Inalámbrico",
    precio: 45,
    stock: 0,
    categoria: "Periféricos", */}

            <input type="text" name="id" placeholder="ID" readOnly="true" />
            <input type="text" name="nombre" placeholder="Name" onChange={handleChange} value={formData.nombre}/>
            <input type="text" name="precio" placeholder="precio" onChange={handleChange} value={formData.precio}/>
            <input type="text" name="stock" placeholder="stock" readOnly="true" />
            {/* to-do move to selectlist */}
            <input type="text" placeholder="category" readOnly="true" />
            <div className="msf-actions">
              <button>
                <label htmlFor="step" className="msf-btn">
                  Enviar
                </label>
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
