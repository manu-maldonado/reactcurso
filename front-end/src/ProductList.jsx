import { useState } from "react"
import { ProductItem } from "./ProductItem";
import { SearchBox } from "./SearchBox";

export function GetAllProducts({ products, onEdit, onRemove }) {
  // {products} --- props
  const [search, setSearch] = useState("")
  const filterProducts = products.filter(
    p => p.nombre.toLowerCase().includes(search.toLowerCase()));
  const [objAsc, setAscending] = useState({order:true, key:""});
  const sorterProductsG = filterProducts.sort((a, b) => {
    if (objAsc) {
      return setPredicatedSort(a[objAsc.key],b[objAsc.key],objAsc.order);
    } else {
      return b.nombre.localeCompare(a.nombre);
    }
   })


  function setPredicatedSort(a,b,order){
    switch(typeof a){
      case "number":
        if(order){
           return a - b;
        }else{
          return b - a;
        }
        case "string":
         if(order){
           return a.localeCompare(b);
        }else{
          return b.localeCompare(a);
        }
        case "boolean":
        return;
    }

  }

  return (
    <div>
      <SearchBox value={search} onInputChange={setSearch} />
      <table>
        <thead>
          <tr>
            <th colSpan={2}> Opciones</th>
            <th onClick={() => setAscending({order:!objAsc.order, key:"id"})}>#</th>
            <th onClick={() => setAscending({order:!objAsc.order, key:"nombre"})}>Nombre</th>
            <th onClick={() => setAscending({order:!objAsc.order, key:"precio"})}>Precio</th>
            <th onClick={() => setAscending({order:!objAsc.order, key:"stock"})}>Stock</th>
            <th onClick={() => setAscending({order:!objAsc.order, key:"categoria"})}>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {sorterProductsG.map((producto) => (
            <ProductItem id={producto.id} producto={producto} onEdit={onEdit} onRemove={onRemove}  /> // { id: 323123 , producto:{ name:"dasdas"}}
          ))}
        </tbody>
      </table>
    </div>
  );
}
