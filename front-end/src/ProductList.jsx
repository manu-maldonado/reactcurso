import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./searchBox";
import { useState } from "react"

<<<<<<< HEAD
export function GetAllProducts({ products }) {
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
=======
export function GetAllProducts({ products, onEdit, onRemove }) {
const [isAsending, setIsAsending] = useState({ order: true, key: "" });

  const sortedProducts = products.sort((a, b) => {
    return setPredicatedSort(
      a[isAsending.key],
      b[isAsending.key],
      isAsending.order,
    );
  });

  function setPredicatedSort(a, b, order) {
    switch (typeof a) {
      case "number":
        // order - default asc
        if (order) {
          return a - b;
        } else {
          return b - a;
        }
      case "string":
        if (order) {
          return a.localeCompare(b);
        } else {
          return b.localeCompare(a);
        }
      case "boolean":
        //to-do will implement it
        return;
    }
  }
  // {products} --- props
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
  return (
    <div>
      <SearchBox value={search} onInputChange={setSearch} />
      <table>
<<<<<<< HEAD
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
            <ProductItem id={producto.id} producto={producto} />
          </>
        )) : (
          <p>no se encontraron productos</p>
        )}
      </table>
=======
        <thead>
          <tr>
            <th>#</th>
            <th
              onClick={(evt) =>
                setIsAsending({ order: !isAsending, key: "nombre" })
              }
            >
              Nombre
            </th>
            <th
              onClick={(evt) =>
                setIsAsending({ order: !isAsending, key: "precio" })
              }
            >
              Precio
            </th>
            <th
              onClick={(evt) =>
                setIsAsending({ order: !isAsending, key: "stock" })
              }
            >
              Stock
            </th>
            <th
              onClick={(evt) =>
                setIsAsending({ order: !isAsending, key: "categoria" })
              }
            >
              Categoria
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((producto) => (
              <ProductItem
                key={producto.id}
                id={producto.id}
                producto={producto}
              />
            ))
          ) : (
            <tr>
              <th>No se encontraron productos</th>
            </tr>
          )}
        </tbody>
        {products.map((producto) => (
          <ProductItem id={producto.id} producto={producto} onEdit={onEdit} onRemove={onRemove}  /> // { id: 323123 , producto:{ name:"dasdas"}}
        ))}
        
      </table>             
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
    </div>
  );
}
