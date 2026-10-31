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

  // controlar si elformulario esta siendo abierto, estamos editando o creando
  const [showForm, setShowForm] = useState(false);
  const [productoSeleccionado, setproductSeleccionado] = useState(null);

  //useEffect se utiliza sobre todo para APIS
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
  }, []);
  // setTimeOut - podemos decirle que espere un determinado

  //crud

  const handlerSaveProduct = (nuevoOActualizado) => {
    //update: reemplazar el producto seleccionado con el id
    if (productoSeleccionado) {
      setProductos((prev) =>
        prev.map((p) =>
          p.id == productoSeleccionado.id ? nuevoOActualizado : p
        )
      );
    } else {
      setProductos((prev) => [
        ...prev,
        { ...nuevoOActualizado, id: `p${Date.now()}` },
      ]);
    }

    // cerrar formulario y limpiarlo
    setShowForm(false);
    setproductSeleccionado(null);
  };

  //borrar producto
  const handlerRemoveProduct = (id) => {
    //Elimine, filtre o saque de productos el id seleccionado
    //podriamos eliminar con filter o con slice
    setProductos((prev) => prev.filter((p) => p.id != id));
  };

  const handlerIniciarEdicion = (producto) => {
    setproductSeleccionado(producto);
    setShowForm(true);
  };

  const handleCreate = () => {
    const copiarProducto = [...productos];
  };

  return (
    <div>
      {cargando ? (
        <h4>esta cargando</h4>
      ) : (
        <GetAllProducts
          products={productos}
          onEdit={handlerIniciarEdicion}
          onRemove={handlerRemoveProduct}
        />
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
          onClick={() => {
            setproductSeleccionado(null);
            setShowForm(true);
          }}
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
      {showForm ? (
        <ProductForm
          // products={productos} 1:59t
          productAEditar={productoSeleccionado}
          onSave={handlerSaveProduct}
          onCancel={() => {
            setShowForm(false);
            setproductSeleccionado(null);
          }}
          // callbackSetLoadingProducts={setCargando}
        />
      ) : (
        ''
      )}
      {/* <GetAllProducts /> */}
    </div>
  );
}
