import { useEffect, useState } from "react";
import { GetAllProducts } from "./ProductsList.jsx";
import { FormularioProducto } from "./components/FormularioProducto.jsx";
import "./css/index.css";

export function Catalogo({ products }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canHandleForm, setCanHandleForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProductos(products);
    }, 2500);
  }, [loading, products]);

  //CRUD
  return (
    <div id="center">
        <h3>Catálogo de productos</h3>
        {
            loading ? 
            <p>Cargando...</p> :

            <div>
                <div>
                    <button onClick={() => setCanHandleForm(true)}>Agregar</button>
                    <button onClick={() => setCanHandleForm(false)}>Eliminar</button>

                    {
                        canHandleForm ?
                        <div>
                            <br/><br/>
                            <FormularioProducto
                                products={productos}
                                callbackSetProductos={setLoading}
                            />
                        </div>
                        : ""
                    }

                </div>
                <GetAllProducts products={productos} onCallbackClick={setCanHandleForm} />
            </div>
        }
    </div>
  );
}
