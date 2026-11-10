import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";
export function Catalogo({ products }) {

    const [productos, setProductos] = useState([]);
    const [isLoading, setLoading] = useState(true);
   
     //Controlar si el formulario esta siendo abierto o si se esta edi>
    const [showForm, setShowForm] = useState(false);
    const [productSeleccionado, setProductSeleccionado] = useState(null);
    
    useEffect(() => {
         /*
        La función setTimeout() programa la ejecución de una función >
        tras un cierto retraso. El primer argumento es la función que>
        El segundo argumento es el retraso, expresado en milisegundos>
        equivale a 1000 milisegundos.
        */
        const timer = setTimeout(() => {
            setProductos(products);
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [products]);

     //*******crud: create, read, update, delete ****************** */
    const handlerSaveProduct = (nuevoOActualizado) => {
        if (productSeleccionado) {
            // Update: reemplazar el producto seleccionado con el id
            setProductos(prev =>
                prev.map(producto => {
                    if (producto.id === nuevoOActualizado.id) {
                        return nuevoOActualizado;
                    }
                    return producto;
                })
            );
        } else {
            // CREA: agregar producto nuevo
            const nuevoProducto = {
                ...nuevoOActualizado,
                id: `p${Date.now()}`
            };
            setProductos(prev => [...prev, nuevoProducto]);
        }
        //cerrar formulario y limpiarlo
        setShowForm(false);
        setProductSeleccionado(null);
    };

    // DELETE: eliminar producto
    const handlerRemoveProduct = (id) => {
        // Elimine, filtre o saque de productos el id seleccionado
        // podríamos eliminar con filter, o con slice
        const confirmar = window.confirm(
            "¿Estas seguro que deseas eliminar este producto?"
        );
        if (confirmar) {
            setProductos(prev =>
                prev.filter(producto => producto.id !== id)
            );

            // Cerrar formulario si estaba abierto
            if (productSeleccionado?.id === id) {
                setShowForm(false);
                setProductSeleccionado(null);
            }
            alert("Producto eliminado correctamente");
        }

    };
    // EDITAR: abrir formulario con datos
    const handlerIniciarEdition = (producto) => {
        console.log("", producto);
        setProductSeleccionado(producto);
        setShowForm(true);
    };

    // AGREGAR: abrir formulario vacío
    const handlerIniciarAlta = () => {
        setProductSeleccionado(null);
        setShowForm(true);
    };
    
    //******************************************

    if (isLoading) {
        return <h3>Cargando catálogo...</h3>;
    }

    return (
        <div>

            <h2>Catálogo de productos</h2>
            {isLoading ? (
                <h4>Está cargando....</h4>
            ) : (
                <>
                    <GetAllProducts
                        products={productos}
                        onEdit={handlerIniciarEdition}
                        onRemove={handlerRemoveProduct}
                    />

                    <div className="mag-btns">
                        <button
                            onClick={handlerIniciarAlta}
                            className="mag-btn mag-btn-primary"
                        >
                            Agregar producto
                        </button>
                    </div>
                     {showForm && (
                <ProductForm
                    productAEditar={productSeleccionado}
                    onSave={handlerSaveProduct}
                    onCancel={() => {
                        setShowForm(false)
                        setProductSeleccionado(null)

                    }}
                />
            )}
                </>
            )}

        </div>
    );
}