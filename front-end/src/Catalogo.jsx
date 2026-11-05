import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
export function Catalogo({ products }) {
  //definir estado para productos, cargando
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setLoading] = useState(true);
  const [canHandleForm, setCanHandleForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  //crud -create, read, update, delete
  return (
    <>
      <div>
        {isLoading ? (
          <h4>Cargando...</h4>
        ) : (
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>{producto.id}</li>
            ))}
          </ul>
        )}

        <div class="mag-btns">
          <button onClick={()=> setCanHandleForm(true)} class="mag-btn mag-btn-primary">Agregar Producto</button>
          <button onClick={()=> setCanHandleForm(true)} class="mag-btn mag-btn-sky">Actualizar Producto</button>
          <button onClick={()=> setCanHandleForm(false)} class="mag-btn mag-btn-ghost">Eliminar Producto</button>
        </div>


        {canHandleForm ? <ProductForm products={productos} callbackSetProducts={setProductos}/>: ""}
      </div>
    </>
  );
}
