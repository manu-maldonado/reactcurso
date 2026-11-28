import { useState } from "react";
import { GetAllProducts } from "./ProductList";
import { ProductForm } from "./ProductForm";


export function SearchProduct({ products }) {
  const [name, setName] = useState("");
    const [productos, setProductos] = useState(products);
    const [showForm, setShowForm] = useState(false);
  const [productSeleccionado, setproductSeleccionado] = useState(null);

  const filterProduct = productos.filter((x) =>
    x.nombre.toLowerCase().includes(name.toLowerCase()),
  );

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
      <label>{name}</label>
      <input id="searchProduct" onChange={(evt) => setName(evt.target.value)} />
      <GetAllProducts products={filterProduct} 
        onEdit = {handlerIniciarEdicion}
            onRemove = {handlerRemoveProduct}/>
      
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
      
    </>
  );
}
