import { useState } from "react";
import { GetAllProducts } from "./ProductsList";

export function SearchProduct({ allProducts = [] }) {
  const [name, setName] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortDir, setSortDir] = useState("asc");

  const filtered = allProducts.filter((p) =>
    p.nombre.toLowerCase().includes(name.toLowerCase())
  );

  /*const sorted = [...filtered].sort((a, b) =>
    sortBy === "precio" ? a.precio - b.precio : a.id - b.id
  );*/

  const sorted = [...filtered].sort((a, b) => {
    const x = a[sortBy];
    const y = b[sortBy];

    const result =
      typeof x === "number" && typeof y === "number"
        ? x - y
        : String(x).localeCompare(String(y), "es", { sensitivity: "base" });

    return sortDir === "asc" ? result : -result;
  });

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  };

  return (
    /*<>
      <label htmlFor="searchProduct">Producto</label>
      <div>
        <input
          id="searchProduct"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />

        <select value={sortBy} onChange={(evt) => setSortBy(evt.target.value)}>
          <option value="id">Ordenar por id</option>
          <option value="precio">Ordenar por precio</option>
        </select>
      </div>

      <GetAllProducts products={sorted} />
    </>*/
    <>
      <label htmlFor="searchProduct">Producto</label>
      <div>
        <input
          id="searchProduct"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>

      <GetAllProducts
        products={sorted}
        sortBy={sortBy}
        sortDir={sortDir}
        onSort={handleSort}
      />
    </>
  );
}
