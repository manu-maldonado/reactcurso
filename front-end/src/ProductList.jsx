import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox";

export function GetAllProducts({ products }) {
  // {products} --- props

    const [search, setSearch] = useState("")

//       const BuscarProduct = products.find((product) =>
//         product.nombre.toLowerCase().includes(name.toLowerCase())
// );

    const BuscarProducts = products.filter((product) =>
        product.nombre.toLowerCase().includes(search.toLowerCase())
);

const [objAsc, setAscending] = useState({ order: true, key: ""});
const sorterProducts = BuscarProducts.sort((a, b) => {
    return setPredicatedSort(a[objAsc.key], b[objAsc.key], objAsc.order);
});

 function setPredicatedSort(a, b, order) {
    console.log(order, a, b)
    switch (a) {
      case typeof a == "number":
        // order - default asc
        if (order) {
          return a - b;
        } else {
          return b - a;
        }        
      case typeof a == "string":        
       if (order) {
          return a.localeCompare(b)
        } else {
          return b.localeCompare(a)
        }
      case typeof a == "boolean":
        //to-do will implement it
        return;
    }
  }

  return (
    <div>
        <SearchBox value = {search} onInputChange = {setSearch} />
      <table>
        <tr>
          <th>#</th>
          <th onClick={() =>
                setAscending({ order: "!objAsc.order", key: "nombre"})
            }
          >
            Nombre</th>
          <th onClick={() =>
                setAscending({ order: !objAsc.order, key: "precio"})
            }
            >
                Precio</th>
          <th onClick={() =>
                setAscending({ order: !objAsc.order, key: "stock"})
            }
            >
                Stock</th>
          <th onClick={() =>
                setAscending({ order: !objAsc.order, key: "categoria"})
            }
            >
                Categoria</th>
        </tr>
        {BuscarProducts.length > 0? BuscarProducts.map((producto) => (
            <>
            <p>{producto.nombre === "Mause Inalámbrico"? "Best choise": ""}</p>
          <ProductItem id={producto.id} producto={producto} /> 
          {/* // { id: 323123 , producto:{ name:"dasdas"}*/}
          </>
        )):(
            <p>No se encontrarón productos</p>
        )}
      </table>      
    </div>
  );
}

// export function GetAllProductByid({productos ,producto}){
//     return ()
// }
import { useState } from "react";
import { ProductItem } from "./ProductItem";

export function GetAllProducts({ products }) {
  const [isAsending, setIsAsending] = useState({ order: true, key: "" });
  // const sortedProducts = products.sort((a, b) => {
  //   if (isAsending) {
  //     return a.nombre.localeCompare(b.nombre);
  //   } else {
  //     return b.nombre.localeCompare(a.nombre);
  //   }
  // });

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
      </table>
    </div>
  );
}
