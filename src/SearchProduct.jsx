import { useState } from "react";
import { GetAllProducts } from "./ProductsList";

export function SearchProduct({ allProducts = [] }) {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("id");

  const filtered = allProducts.filter((p) =>
    p.nombre.toLowerCase().includes(name.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) =>
    order === "precio" ? a.precio - b.precio : a.id - b.id
  );

  return (
    <>
      <label htmlFor="searchProduct">Producto</label>
      <div>
        <input
          id="searchProduct"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />

        <select value={order} onChange={(evt) => setOrder(evt.target.value)}>
          <option value="id">Ordenar por id</option>
          <option value="precio">Ordenar por precio</option>
        </select>
      </div>

      <GetAllProducts products={sorted} />
    </>
  );
}
