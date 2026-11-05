import { useEffect, useState } from "react";
import { GetAllProducts } from "./ProductsList.jsx";
import { FormularioProducto } from "./FormularioProducto.jsx";
import "../css/index.css";
import "../css/Buttons.css";

export function Catalogo({ products }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canHandleForm, setCanHandleForm] = useState(false);

  //Controlar si el formulario esta abierto y se esta editando o creando
  const [showForm, setShowForm] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setProductos(products);
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [products]);

  //CRUD
  const handleGuardarProducto = (nuevoProducto) => {
    //update: reemplazar el producto seleccionado con el id
    if (productoSeleccionado) {
        setProductos(
            prevProductos => 
                prevProductos.map(p => 
                    p.id === productoSeleccionado.id ? nuevoProducto : p
                )
        );
    } else {
        //create: agregar el nuevo producto al estado
        setProductos(prevProductos => [
            ...prevProductos,
            {
                ...nuevoProducto, id: `p${Date.now()}`,
            }
        ]);
    }

    //cerrar formulario y limpiarlo
    setShowForm(false);
    setProductoSeleccionado(null);
  };

  const handleEliminarProducto = (id) => {
    //Eliminar el producto seleccionado del estado
    //Se puede eliminar con filter o slice
    setProductos(prevProductos => prevProductos.filter(p => p.id !== id));
  };

  const handleEditarProducto = (producto) => {
    setProductoSeleccionado(producto);
    setShowForm(true);
  };

  return (
    <div id="center">
        <h3>Catálogo de productos</h3>
        {
            loading ? 
            <p>Cargando...</p> :

            <div>
                <div>
                    <button 
                        className="btn btn-primary"
                        onClick={() => {
                            setProductoSeleccionado(null);
                            setShowForm(true);
                    }}>Agregar</button>

                    {
                        showForm ?
                        <div>
                            <br/><br/>
                            <FormularioProducto
                                productoEditar = {productoSeleccionado}
                                onSave = {handleGuardarProducto}
                                onCancel = {() => {
                                    setShowForm(false);
                                    setProductoSeleccionado(null);
                                }}
                            />
                        </div>
                        : ""
                    }

                </div>
                <GetAllProducts
                    products={productos}
                    onRemove={handleEliminarProducto}
                    onEdit={handleEditarProducto}
                />
            </div>
        }
    </div>
  );
}
