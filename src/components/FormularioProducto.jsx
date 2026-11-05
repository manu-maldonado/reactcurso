import {useEffect, useState} from "react";
import "../css/FormularioProducto.css";

const nuevoProducto = {
    id: "",
    nombre: "",
    categoria: "",
    precio: 0,
    stock: 0,
};

export function FormularioProducto({productoEditar, onSave, onCancel}) {
    const [formData, setFormData] = useState(
        productoEditar ? productoEditar : nuevoProducto
    );

    useEffect(() => {
        setFormData(productoEditar ? productoEditar : nuevoProducto);
    }, [productoEditar]);

    const handleChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        /*products.push(formData);
        callbackSetProductos(true);
        setFormData({
            nombre: "",
            categoria: "",
            precio: 0,
            stock: 0,
        });*/
        onSave({
            ...formData,
            precio: +formData.precio,
            stock: +formData.stock,

        })
    }

    return(
        <form className="form-card" onSubmit={handleSubmit}>
  <h3 className="form-title">
    {productoEditar ? "Editar producto" : "Agregar producto"}
  </h3>

  <div className="form-grid">
    <div className="form-field">
      <label className="form-label" htmlFor="id">ID</label>
      <input
        className="form-input"
        onChange={handleChange}
        id="id"
        name="id"
        value={formData.id}
        placeholder="ID del producto"
      />
    </div>

    <div className="form-field">
      <label className="form-label" htmlFor="categoria">Categoría</label>
      <input
        className="form-input"
        id="categoria"
        name="categoria"
        value={formData.categoria}
        placeholder="Categoría"
        onChange={handleChange}
      />
    </div>

    <div className="form-field form-field--full">
      <label className="form-label" htmlFor="nombre">Nombre</label>
      <input
        className="form-input"
        onChange={handleChange}
        id="nombre"
        name="nombre"
        value={formData.nombre}
        placeholder="Nombre del producto"
      />
    </div>

    <div className="form-field">
      <label className="form-label" htmlFor="precio">Precio</label>
      <input
        className="form-input"
        id="precio"
        name="precio"
        type="number"
        value={formData.precio}
        placeholder="0"
        onChange={handleChange}
      />
    </div>

    <div className="form-field">
      <label className="form-label" htmlFor="stock">Stock</label>
      <input
        className="form-input"
        id="stock"
        name="stock"
        type="number"
        value={formData.stock}
        placeholder="0"
        onChange={handleChange}
      />
    </div>
  </div>

  <div className="form-actions">
    <button className="btn btn-primary" type="submit">
      {productoEditar ? "Actualizar producto" : "Agregar producto"}
    </button>
    <button className="btn btn-sm btn-danger" type="button" onClick={onCancel}>
      Cancelar
    </button>
  </div>
</form>
    );
}
