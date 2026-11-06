import { useState } from "react";
import { GetAllProducts } from "./ProductList";

export function SearchProduct({ products }) {
  const [name, setName] = useState("");
  const filterProduct = products.filter((x) =>
    x.nombre.toLowerCase().includes(name.toLowerCase()),
  );

  return (
    <>
      <label>{name}</label>
      <input id="searchProduct" onChange={(evt) => setName(evt.target.value)} />
      <GetAllProducts products={filterProduct} />
    </>
  );
}
