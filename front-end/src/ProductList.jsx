import { useState } from "react";
import { ProductItem } from "./ProductItem";

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
  return (
    <div>
      <table>
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
    </div>
  );
}
