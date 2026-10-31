import { ProductItem } from "./ProductItem";
import { SearchBox } from "./searchBox";
import { useState } from "react"

export function GetAllProducts({ products, callbackSetHandlerForm }) {
  // {products} --- props
  const [search, setSearch] = useState("")
  const [ascendente, setAsendente] = useState(true)
  const productosEncontrados = products.filter(
    p => p.nombre.toLowerCase().includes(search.toLowerCase())
  );
  const sorterProducts = productosEncontrados.sort((a, b) => {
    if (ascendente) {
      return a.nombre.localeCompare(b.nombre);
    } else {
      return b.nombre.localeCompare(a.nombre);
    }
  });
  return (
    <div>
      <SearchBox value={search} onInputChange={setSearch} />
      <table>
        <tr>
          <th>#</th>
          <th onClick={(evt) => setAsendente(!ascendente)}>Nombre</th>
          <th onClick={(evt) => setAsendente(!ascendente)}>Precio</th>
          <th onClick={(evt) => setAsendente(!ascendente)}>Stock</th>
          <th onClick={(evt) => setAsendente(!ascendente)}>Catergoria</th>
        </tr>
        {sorterProducts.length > 0 ? sorterProducts.map((producto) =>
        (
          <>
            <p>{producto.nombre === "Mouse Inalambrico" ? "Best Choise" : ""}</p>
            <ProductItem id={producto.id} producto={producto} callbackSetHandlerForm={callbackSetHandlerForm} />
            {/* // { id: 323123 , producto:{ name:"dasdas"}} */}
          </>
        )) : (
          <p>no se encontraron productos</p>
        )}
      </table>
    </div>
  );
}
