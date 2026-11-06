import { useState } from "react";

const formVacio = {
  id: "",
  nombre: "",
  precio: 0,
  stock: 0,
  categoria: "",
};

export function ProductForm({ producto, onSave, onCancel }) {
  const [formData, setFormData] = useState(producto ? producto : formVacio);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSave({
      ...formData,
      precio: Number(formData.precio),
      stock: Number(formData.stock),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{producto ? "Editar producto" : "Nuevo producto"}</h3>

      <input type="text" name="id" placeholder="ID" value={formData.id} readOnly />
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={formData.nombre} />
      <input type="number" name="precio" placeholder="Precio" onChange={handleChange} value={formData.precio} />
      <input type="number" name="stock" placeholder="Stock" onChange={handleChange} value={formData.stock} />
      <input type="text" name="categoria" placeholder="Categoria" onChange={handleChange} value={formData.categoria} />

      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}
