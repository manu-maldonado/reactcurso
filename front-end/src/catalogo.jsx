import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";
export function Catalogo({ products }) {
  //definir estado para productos, cargando
  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //controlar si el formulario esta siendo abierto y si estamos editando o creando
  const [showForm, setShowForm] = useState(false);
  const [productSeleccionado, setproductSeleccionado] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProductos(products);
    }, 2500);
  }, []);

  //crud -create, read, update, delete
  const handlerSaveProduct = (nuevoOActualizado) => {
    // update: reemplazar el producto seleccionado con el id
    if (productSeleccionado) {
      //reemplacemos el product que coincida con el id
      setProductos(prev=> prev.map(p=> p.id == productSeleccionado.id? nuevoOActualizado: p))      
    }
    else{
      // agrega un nuevo elemento
      setProductos((prev) => [
        ...prev,
        { ...nuevoOActualizado, id: `p${Date.now()}` },
      ]);
    }

    //cerrar formulario y limpiarlo
    setShowForm(false);
    setproductSeleccionado(null);
  };

  const handlerRemoveProduct = (id) => {
    // Elimine, filtre o saque de productos el id seleccionado
    // podriamos eliminar con filter, o con slice
    setProductos(prev => prev.filter(p=> p.id != id))
  }

  const handlerIniciarEdicion = (producto) => {    
    setproductSeleccionado(producto);
    setShowForm(true);
  }

  return (
    <>
      <div>
        {isLoading ? (
          <h4>Cargando...</h4>
        ) : (          
          <GetAllProducts
            products={productos}
            onEdit = {handlerIniciarEdicion}
            onRemove = {handlerRemoveProduct}
          />
        )}

        <div class="mag-btns">
          <button
            onClick={() => {
              setproductSeleccionado(null)
              setShowForm(true)
            }}
            class="mag-btn mag-btn-primary"
          >
            Agregar Producto
          </button>
          {/* <button onClick={()=> setCanHandleForm(false)} class="mag-btn mag-btn-ghost">Eliminar Producto</button> */}
        </div>

        {showForm ? (
          <ProductForm
            key = {productSeleccionado ? productSeleccionado.id: ''}
            productAEditar={productSeleccionado}
            onSave={handlerSaveProduct}
            onCancel={()=>{
              setShowForm(false)
              setproductSeleccionado(null)
            }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
