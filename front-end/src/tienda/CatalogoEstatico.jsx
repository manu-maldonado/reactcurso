import { useState } from "react";
import { allProducts } from "../productosMock.js";

const formVacio = { nombre: "", precio: "", stock: "", categoria: "" };

export function CatalogoEstatico() {
  const [productos, setProductos] = useState(allProducts);
  const [filtro, setFiltro] = useState("");
  const [form, setForm] = useState(formVacio);

  const filtrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  function cambiarCampo(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  function agregar(evt) {
    evt.preventDefault();
    const nuevoId = String(Math.max(0, ...productos.map((p) => Number(p.id) || 0)) + 1);
    setProductos([
      ...productos,
      {
        id: nuevoId,
        nombre: form.nombre,
        precio: Number(form.precio),
        stock: Number(form.stock),
        categoria: form.categoria,
      },
    ]);
    setForm(formVacio);
  }

  return (
    <div>
      <h2>Mini-catálogo</h2>

      <form onSubmit={agregar}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={cambiarCampo} required />
        <input name="precio" type="number" placeholder="Precio" value={form.precio} onChange={cambiarCampo} required />
        <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={cambiarCampo} />
        <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={cambiarCampo} />
        <button type="submit">Agregar</button>
      </form>

      <input placeholder="Filtrar por nombre" value={filtro} onChange={(evt) => setFiltro(evt.target.value)} />

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>{p.categoria}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
