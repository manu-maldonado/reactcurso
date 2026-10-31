// sintaxis nuevo componente
// export function catalogo({}) {

import { allProducts } from './productosMock';
import { GetAllProducts } from './productList';
import { useEffect, useState } from 'react';
import { ProductForm } from './productForm';

// }
// crud -create,read,update,delete
export function Catalogo({ products }) {
  // definir estado para productos, cargando
  const [productos, setProductos] = useState(products);
  const [cargando, setCargando] = useState(true);
  const [canHandleForm, setCanHandleForm] = useState(false);

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      if (active) setCargando(false);
    }, 2500);

    return () => {
      // cleanup
      active = false;
      //clearT es un funcion de js que resetea el contador
      clearTimeout(timer);
    };
  });
  // setTimeOut - podemos decirle que espere un determinado

  const handleCreate = () => {
    const copiarProducto = [...productos];
  };

  return (
    <div>
      {cargando ? (
        <h4>esta cargando</h4>
      ) : (
        <GetAllProducts products={productos} />
      )}
      {/* {products.map((producto) => {
        return <h4>{producto.id}</h4>;
      })} */}
      {/* read */}
      {/* {products.map((producto) => (
        <>
          <h4>{producto.id}</h4>
          <h4>{producto.nombre}</h4>
        </>
      ))} */}
      <div class="mag-btns">
        <button
          onClick={() => setCanHandleForm(true)}
          class="mag-btn mag-btn-primary"
        >
          Agregar producto
        </button>
        {/* <button
          onClick={() => setCanHandleForm(true)}
          class="mag-btn mag-btn-ghost"
        >
          Eliminar producto
        </button> */}
      </div>
      {canHandleForm ? (
        <ProductForm
          products={productos}
          callbackSetLoadingProducts={setCargando}
        />
      ) : (
        ''
      )}
      {/* <GetAllProducts /> */}
    </div>
  );
}
