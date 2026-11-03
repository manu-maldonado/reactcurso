import { useEffect, useState } from "react";

export function ProductForm({ productoAEditar, onSave, onCancel }) {
  let productoNuevo = {
    id: 0,
    nombre: "",
    precio: 0,
    stock: 0,
    categoria: "",
  };

  const [formData, setFormData] = useState(productoAEditar || productoNuevo);

  // Si le Pasamos un Producto para Editar, estaríamos Cargando sus Datos en el Estado de Nuestro Form Local
  {
    /*
  useEffect(() => {
    if (productoAEditar) {
      setFormData(productoAEditar);
    } else {
      setFormData(productoNuevo);
    }
  }, [productoAEditar]);
  */
  }

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
    onSave({
      ...formData,
      precio: formData.precio,
      //stock: formData.stock,
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
      <div className="msf-wrap">
        <div className="msf-body">
          <div className="msf-panel msf-panel-1">
            <h3>Información del Producto</h3>
            <h3>{productoAEditar ? "Editar Producto" : "Nuevo Producto"}</h3>
            <input type="text" name="id" placeholder="ID" value={formData.id} />
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
              value={formData.stock}
            />
            <input
              type="text"
              name="category"
              placeholder="categoría"
              value={formData.categoria}
            />
            <div className="msf-actions">
              <button>
                {" "}
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
