import { use, useEffect, useState } from "react"
import { ProductForm } from "./ProductForm";

export function Catalogo({ products }) {
    //definir estado para catalogo, cargando
    const [productos, setProductos] = useState([...products]);
    const [isLoading, setLoading] = useState(true);
    const [editando, setEditando] = useState(false);

    const [producto,setProducto]= useState({
        id: "",
        nombre:"",
        precio: "",
        stock: "",
        categoria: ""
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    })

function inputOnChange(evt){
    const {name, value} = evt.target;
    setProducto({
        ...producto,
        [name]:value
    });
}

function create(e){
        e.preventDefault();
        if (editando){
            productos.map((item) => {

            })
        }else{


    const newProduct={
        id: producto.id,
        nombre:producto.nombre,
        precio: producto.precio,
        stock: Number(producto.stock),
        categoria:producto.categoria
    }
    
    setProducto(productos.push(newProduct));
    setProducto({
         id: "",
         nombre:"",
        precio: "",
        stock: Number(""),
        categoria:""
    })
    }
}

function edit(id){
    const prooductoEncontrado= productos.find((item) => item.id === id);
    if (productoEncontrado){
    setProducto({
        id:productoEncontrado.id,
        nombre: productoEncontrado.nombre,
        precio: productoEncontrado.precio,
        stock: productoEncontrado.stock,
        categoria: productoEncontrado.categoria
    });
    setEditando(true);
    }
}

    return (
        <>

        <div class="mag-btns">
            <button> Agregar</button>
            <button>Actualizar</button>
            <button>Eliminar</button>
        </div>
            {/* <form class="card bg-surface-100-900 p-4 w-full max-w-md mx-auto space-y-4" onSubmit={create}>
                <header>
                    <h3 class="h3">Producto</h3>
                </header>
                <fieldset class="fieldset space-y-2">
                    <legend class="legend">Detalles del Producto</legend>
                    <label class="label">
                        <span class="label-text">Id: </span>
                        <input class="input" name="id" type="number" onChange={inputOnChange} />
                    </label>
                </fieldset>
                <fieldset class="fieldset space-y-2">
                    <label class="label">
                        <span class="label-text">Nombre: </span>
                        <input class="input" name="nombre" type="text" onChange={inputOnChange} />
                    </label>
                </fieldset>
                <fieldset class="fieldset space-y-2">
                    <label class="label">
                        <span class="label-text">Precio: </span>
                        <input class="input" name="precio" type="text"  onChange={inputOnChange}/>
                    </label>
                </fieldset>
                <fieldset class="fieldset space-y-2">
                    <label class="label">
                        <span class="label-text">Stock :</span>
                        <input class="input" name="stock" type="text" onChange={inputOnChange} />
                    </label>
                
                </fieldset>
                <fieldset>
                        <label class="label">
                        <span class="label-text">Categoria: </span>
                        <input class="input" name="categoria" type="text" onChange={inputOnChange} />
                    </label>
                </fieldset>
                <footer class="flex justify-end">
                    <button type="submit" class="btn preset-filled">Registrar</button>
                </footer>
            </form> */}
            <div>
                <ProductForm></ProductForm>
                {isLoading ? <h4>Esta cargando</h4> : <h4>Termino de cargar</h4>}
                {productos.map((producto) => (<h4>{producto.id} </h4>))
                }
            </div>
        </>
    )
}