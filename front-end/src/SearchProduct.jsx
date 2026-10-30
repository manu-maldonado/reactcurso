import { useState } from "react";
import { GetAllProducts } from "./ProductList";

export function SearchProduct({ products }) {
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState();

  let filterProducts = products
    .filter((product) =>
      product.nombre.toLowerCase().includes(name.toLowerCase()),
    )
    .sort((a, b) => {
      if (orderBy === "id+") {
        return b.id - a.id;
      }
      if (orderBy === "id-") {
        return a.id - b.id;
      }
      if (orderBy === "price+") {
        return b.precio - a.precio;
      }
      if (orderBy === "price-") {
        return a.precio - b.precio;
      }
    });

  //   let filterId = filterProducts.sort((a, b) => b.precio - a.precio);1

  return (
    <>
      <label>{name}</label>
      <input
        id="searchProduct"
        onChange={(evt) => setName(evt.target.value)}
      ></input>

      <GetAllProducts products={filterProducts}></GetAllProducts>
      <div>
        <button onClick={() => setOrderBy((orderBy) => "id+")}>ID+</button>{" "}
        <br />
        <button onClick={() => setOrderBy((orderBy) => "id-")}>ID-</button>{" "}
        <br />
        <button onClick={() => setOrderBy((orderBy) => "price+")}>
          PRICE+
        </button>
        <br />
        <button onClick={() => setOrderBy((orderBy) => "price-")}>
          PRICE-
        </button>
      </div>
    </>
  );
}
