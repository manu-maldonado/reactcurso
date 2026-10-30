import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchProduct } from "./SearchProduct";


export function ProductList({ products }) {

  const [textoBusqueda, setTextoBusqueda] = useState("");

  const productosFiltrados = products.filter(producto =>
    producto.nombre
      .toLowerCase()
      .includes(textoBusqueda.toLowerCase())
  );

  return (
    <div>

      <SearchProduct
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
      />

      <table>
        <tbody>
          {productosFiltrados.map(producto => (
            <ProductItem
              key={producto.id}
              producto={producto}
            />
          ))}
        </tbody>
      </table>

    </div>
  );
}

export function GetAllProducts({ products }) {
  // {products} --- props
  const [ascendente, setAscendente] = useState(true);
  const [campoOrden, setCampoOrden] = useState("nombre");



  const productosOrdenados = [...products].sort((a, b) => {

    if (campoOrden === "nombre") {
      return ascendente ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
    }
    if (campoOrden === "precio") {
      return ascendente ? a.precio - b.precio : b.precio - a.precio;

    }
    if (campoOrden === "stock") {
      return ascendente ? a.stock - b.stock : b.stock - a.stock;
    }
    if (campoOrden === "categoria") {
      return ascendente ? a.categoria.localeCompare(b.categoria) : b.categoria.localeCompare(a.categoria);
    }


    return b.nombre.localeCompare(a.nombre);
  });

  const ordenarPorNombre = () => {
    if (campoOrden === "nombre") {
      setAscendente(!ascendente);
    } else {
      setCampoOrden("nombre");
      setAscendente(true);
    }
  };

  const ordenarPorPrecio = () => {
    if (campoOrden === "precio") {
      setAscendente(!ascendente);
    } else {
      setCampoOrden("precio");
      setAscendente(true);
    }
  };
  const ordenarPorStock = () => {
    if (campoOrden === "stock") {
      setAscendente(!ascendente);
    } else {
      setCampoOrden("stock");
      setAscendente(true);
    }
  };
  const ordenarPorCategoria = () => {
    if (campoOrden === "categoria") {
      setAscendente(!ascendente);
    } else {
      setCampoOrden("categoria");
      setAscendente(true);
    }
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th
              onClick={ordenarPorNombre}
              style={{ cursor: "pointer" }}
            >
              Nombre {campoOrden === "nombre" && (ascendente ? "↑" : "↓")}
            </th>
            <th
              onClick={ordenarPorPrecio}
              style={{ cursor: "pointer" }}
            >
              Precio {campoOrden === "precio" && (ascendente ? "↑" : "↓")}
            </th>
            <th onClick={ordenarPorStock}
              style={{ cursor: "pointer" }}>
              Stock {campoOrden === "stock" && (ascendente ? "↑" : "↓")}
            </th>
            <th onClick={ordenarPorCategoria}
              style={{ cursor: "pointer" }}
            >
              Categoria {campoOrden === "categoria" && (ascendente ? "↑" : "↓")}
            </th>
          </tr>
        </thead>
        <tbody>
          {productosOrdenados.map((producto) => (
            <ProductItem
              key={producto.id}
              id={producto.id}
              producto={producto}
            /> // { id: 323123 , producto:{ name:"dasdas"}}
          ))}
        </tbody>
      </table>
    </div>
  );
}
