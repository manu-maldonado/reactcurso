import { useState } from "react";
import { ProductItem } from "./ProductItem";

export function GetAllProducts({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map((producto) => (
            <ProductItem id={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
