import { use, useEffect, useState } from "react"
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";

export function Catalogo({ products }) {
    //definir estado para catalogo, cargando
    const [productos, setProductos] = useState([...products]);
    const [isLoading, setLoading] = useState(true);
    //const [addButton,setIsAdd]=useState(false)

    //controlar si el formulario esta sinedo avierto y editando
    const [showForm, setShowForm ] =useState(false)
    const [productoSelecionado,setProductSeleccionado]= useState(null)



    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            setProductos(products)
        }, 1500);
    },[])

  
//CRUD

    const handlerSaveProduct = (nuevoOActualizado)=>{
        //update:remplazar el producto seleccionado con el id
        if(productoSelecionado){
            //reemplacemos el product que coincida con el id
            setProductos(prev=>prev.map(p=> p.id == productoSelecionado.id ? nuevoOActualizado : p))
        }else{
            //agrega nuevo elemento
             setProductos(prev=>[...prev,{...nuevoOActualizado, id:`p${Date.now()}`}])
        }

        //cerrar formulario y limpiarlo
        setShowForm(false)
        setProductSeleccionado(null)
    };

    const handleRemoveProduct=(id) =>{

         const confirmar = window.confirm(
        "¿Estás seguro de que deseas eliminar este producto?"
    );
    if(confirmar){
        //Elimine, filtre o saque de productos el id seleccionado
        //prodriamos eliminar con filter o con slice
        setProductos(prev => prev.filter(p=> p.id != id))
    }
    }

    const handleInicarEdicion=(producto) =>{
        setProductSeleccionado(producto);
        setShowForm(true)

    }

    return (
        <>
        <div>
            {isLoading ? (
                 <h4>Esta cargando</h4>
                ) : (
                <GetAllProducts products={productos}
                onEdit= {handleInicarEdicion}
                onRemove= {handleRemoveProduct}
                
                />
                )}
        <div class="mag-btns">
            <button onClick={()=>{
                setProductSeleccionado(null)
                setShowForm(true)
            }}> Agregar</button>
 
        </div>
            
            <div>
                {showForm ? (<ProductForm key={productoSelecionado ? productoSelecionado.id : ""}
                produdctAEditar={productoSelecionado} 
                onSave={handlerSaveProduct}
                onCancel={()=>{
                    setShowForm(false)
                    setProductSeleccionado(null)
                }}
                />) : (
                    ""
                )}
            </div>
        </div>
        </>
    );
}