import React, { useState } from "react";

export const FormularioProducto = ({ onAgregarProducto }) => {
  const [nuevoProducto, setNuevoProducto] = useState({
    modelo: "",
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nuevoProducto.modelo ||
      !nuevoProducto.nombre ||
      !nuevoProducto.precio ||
      !nuevoProducto.stock
    ) {
      alert(
        "Por favor completa los campos obligatorios (Modelo, Nombre, Precio y Stock)",
      );
      return;
    }

    const productoAAgregar = {
      ...nuevoProducto,
      precio: parseFloat(nuevoProducto.precio),
      stock: parseInt(nuevoProducto.stock, 10),
    };

    onAgregarProducto(productoAAgregar);

    setNuevoProducto({
      modelo: "",
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
    });
  };

  return (
    <div>
      <h3>Agregar Nuevo Producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="modelo">Modelo: </label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            value={nuevoProducto.modelo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nuevoProducto.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="descripcion">Descripción: </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={nuevoProducto.descripcion}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="precio">Precio: </label>
          <input
            type="number"
            id="precio"
            name="precio"
            step="0.01"
            min="0"
            value={nuevoProducto.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="stock">Stock: </label>
          <input
            type="number"
            id="stock"
            name="stock"
            min="0"
            value={nuevoProducto.stock}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};
