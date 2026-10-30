import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox.jsx";
import { useState } from "react";

export function GetAllProducts({ products }) {
  //{products} --- props

    const [search, setSearch] = useState("");

    // const productoEncontrado = products.find(
    //  p => p.nombre.toLowerCase().includes(name.toLowerCase())
    //);
    const productoEncontrados = products.filter(
      p => p.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const [objAsc, setAscending] = useState({order:true, key:""});
    const sorterProducts = [...productoEncontrados].sort((a, b) => {
      return setPredicatedSort(a[objAsc.key], b[objAsc.key], objAsc.order);
    });

    //const sorterProducts = productosEncontrados.sort((a, b) => {
    //  if (objAsc.order) {
    //    return setPredicatedSort(a[objAsc.key],b[objAsc.key]);
    //  } else {
    //    return setPredicatedSort(b[objAsc.key],a[objAsc.key]);
    //  }
    //});

    //const sorterProducts = [...productoEncontrados].sort((a, b) => {
    //  if (isAsc) {
    //    return a.nombre.localeCompare(b.nombre);
    //  } else {
    //    return b.nombre.localeCompare(a.nombre);
    //  }
    //});

    function setPredicatedSort(a, b, order) {
      switch(true){ 
        case typeof(a) == "number":
          // order - default asc
          if (order) {
            return a - b;
          } else {
            return b - a;
          }
        case typeof(a) == "string":
          if (order) {
            return a.localeCompare(b);
          } else {
            return b.localeCompare(a);
          }
        case typeof(a) == "boolean":
          if (order) {
            return (a === b)? 0 : a? -1 : 1;
          } else {
            return (a === b)? 0 : a? 1 : -1;
          }
      }
    }

  return (
    <div>
      <SearchBox value = {search} onInputChange = {setSearch}/>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => setAscending({order:!objAsc.order, key: "nombre"})}>Nombre</th>
            <th onClick={() => setAscending({order:!objAsc.order, key: "precio"})}>Precio</th>
            <th onClick={() => setAscending({order:!objAsc.order, key: "stock"})}>Stock</th>
            <th onClick={() => setAscending({order:!objAsc.order, key: "categoria"})}>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {sorterProducts.length > 0 ? (sorterProducts.map((producto, index) => (
          <ProductItem key={producto.id} producto={producto} index={index + 1} 
            bestChoice={producto.nombre === "Mouse Inalámbrico"
              ? "Best Choice"
              : ""
            }
          />
        ))
      ) : (
        <tr>
            <td colSpan="5">No se encontraron productos</td>
        </tr>
      )}
        </tbody>
    </table>
  </div>
  );
}
