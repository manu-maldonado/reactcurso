
import { useEffect, useState } from "react";
import "./form.css";

export function ProductForm({ productAEditar, onSave, onCancel }) {
  
  // Datos iniciales para un producto nuevo
    const newProduct = {
        id: "",
        nombre: "",
        precio: 0,
        stock: 0,
        categoria: "",
    };
  // Estado para los datos del formulario
  const [formData, setFormData] = useState(newProduct);

  // Cargar datos cuando se selecciona un producto
  useEffect(() => {

    if (productAEditar) {
      // Copiar los datos del producto seleccionado
       console.log("Datos recibidos para editar:", productAEditar);
      setFormData({ ...productAEditar });
    } else {
      // Limpiar el formulario para un producto nuevo
      setFormData({ ...newProduct });
    }
  }, [productAEditar]);

  // Capturar cambios en los campos
  const handleChange = (evt) => {

    const { name, value } = evt.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Enviar información al componente Catalogo
  const handleSubmit = (evt) => {

    evt.preventDefault();

    if (!formData.nombre.trim()) {
      alert("Escribe el nombre del producto");
      return;
    }

    if (formData.precio === "" || formData.stock === "") {
      alert("Completa el precio y el stock");
      return;
    }

    onSave({
      ...formData,
      precio: Number(formData.precio),
      stock: Number(formData.stock)
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

              <h3>
                {productAEditar
                  ? "Editar producto"
                  : "Alta de producto"}
              </h3>

              {/* IDENTIFICADOR */}

              <label>ID del producto</label>

              <input
                type="text"
                name="id"
                placeholder="Identificador de producto"
                value={formData.id}
                readOnly
              />
              {/* NOMBRE */}

              <label>Nombre</label>

              <input
                type="text"
                name="nombre"
                placeholder="Nombre del producto"
                value={formData.nombre}
                onChange={handleChange}
                required
              />

              {/* PRECIO */}

              <label>Precio</label>

              <input
                type="number"
                name="precio"
                placeholder="Precio del produco"
                value={formData.precio}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
              {/* STOCK */}

              <label>Stock</label>

              <input
                type="number"
                name="stock"
                placeholder="Existencias"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
              />

              {/* CATEGORIA */}

              <label>Categoría</label>

              <input
                type="text"
                name="categoria"
                placeholder="Categoría del producto"
                value={formData.categoria}
                onChange={handleChange}
                required
              />
              {/* BOTONES */}

              <div className="msf-actions">

                <button
                  type="submit"
                  className="msf-btn"
                >
                  {productAEditar
                    ? "Actualizar"
                    : "Guardar"}
                </button>

                <button
                  type="button"
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
