import { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import { GetAllProducts } from "./ProductList";

export function Formulario({ products = [] }) {
  const [list, setList] = useState(products);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const handleIdChange = (e) => {
    const inputId = e.target.value;
    setId(inputId);

    const productoEncontrado = list.find(
      (prod) => String(prod.id) === String(inputId),
    );

    if (productoEncontrado) {
      setName(productoEncontrado.nombre);
      setPrice(productoEncontrado.precio);
      setStock(productoEncontrado.stock);
      setCategoria(productoEncontrado.categoria);
    } else {
      setName("");
      setPrice("");
      setStock("");
      setCategoria("");
    }
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      id: list.length + 1,
      nombre: name,
      precio: Number(price),
      stock: Number(stock),
      categoria,
    };
    setList([...list, nuevoProducto]);
    limpiarFormulario();
  };

  const handleEditar = (e) => {
    e.preventDefault();

    const listaActualizada = list.map((prod) => {
      if (String(prod.id) === String(id)) {
        return {
          ...prod,
          nombre: name !== "" ? name : prod.nombre,
          precio: price !== "" ? Number(price) : prod.precio,
          stock: stock !== "" ? Number(stock) : prod.stock,
          categoria: categoria !== "" ? categoria : prod.categoria,
        };
      }
      return prod;
    });

    setList(listaActualizada);
    limpiarFormulario();
    setIsEditing(false);
  };

  //   const handleEliminar = () => {};

  const limpiarFormulario = () => {
    setId("");
    setName("");
    setPrice("");
    setStock("");
    setCategoria("");
  };

  return (
    <div>
      <form onSubmit={isEditing ? handleEditar : handleAgregar}>
        {isEditing && (
          <>
            <label>ID del producto a editar</label>
            <input
              type="number"
              value={id}
              onChange={handleIdChange}
              placeholder="Escribe el ID (ej. 1 o 2)"
            />
            <br />
          </>
        )}

        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <br />

        <label>Precio</label>
        <input
          type="number"
          value={price}
          onChange={(evt) => setPrice(evt.target.value)}
        />
        <br />

        <label>Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(evt) => setStock(evt.target.value)}
        />
        <br />

        <label>Categoría</label>
        <input
          type="text"
          value={categoria}
          onChange={(evt) => setCategoria(evt.target.value)}
        />
        <br />
        <br />

        {isEditing ? (
          <button type="submit">Actualizar</button>
        ) : (
          <button type="submit">Agregar</button>
        )}

        <button
          type="button"
          onClick={() => {
            setIsEditing(!isEditing);
            limpiarFormulario();
          }}
        >
          {isEditing ? "Cancelar Edición" : "Editar"}
        </button>

        <button type="button">Eliminar</button>

        <br />
        <br />

        <GetAllProducts products={list} />
      </form>
    </div>
  );
}
