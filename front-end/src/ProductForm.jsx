import { useState } from "react"

export function ProductForm({products, callBackSetLoadingProduct}){
    const [formData,setFormData] = useState({
        id:0,
        nombre:"",
        stock:0,
        categoria:""
    });
const handleChange=(evt)=> {
    const {name,value,type,checked} = evt.target
    setFormData((prevData) =>({
        //...spread
        ...prevData,
        [name] : type  == "checkbox" ? checked : value
    }))

}

const handleSubmit=(evt)=>{
    evt.preventDefault(evt)
    products.push(formData)
    callBackSetLoadingProduct(true)
    console.log("productos",{products})
    console.log("datos", {formData})
};

    return (
<form class="card bg-surface-100-900 p-4 w-full max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
                <header>
                    <h3 class="h3">Producto</h3>
                </header>
                <fieldset class="fieldset space-y-2">
                    <legend class="legend">Detalles del Producto</legend>
                    <label class="label">
                        <span class="label-text">Id: </span>
                        <input class="input" name="id" type="number" onChange={handleChange} value={formData.id} />
                    </label>
                </fieldset>
                <fieldset class="fieldset space-y-2">
                    <label class="label">
                        <span class="label-text">Nombre: </span>
                        <input class="input" name="nombre" type="text" onChange={handleChange}  value={formData.nombre} />
                    </label>
                </fieldset>
                <fieldset class="fieldset space-y-2">
                    <label class="label">
                        <span class="label-text">Precio: </span>
                        <input class="input" name="precio" type="text"  onChange={handleChange}  value={formData.precio}/>
                    </label>
                </fieldset>
                <fieldset class="fieldset space-y-2">
                    <label class="label">
                        <span class="label-text">Stock :</span>
                        <input class="input" name="stock" type="text" onChange={handleChange}  value={formData.stock} />
                    </label>
                
                </fieldset>
                <fieldset>
                        <label class="label">
                        <span class="label-text">Categoria: </span>
                        <input class="input" name="categoria" type="text" onChange={handleChange} />
                    </label>
                </fieldset>
                <footer class="flex justify-end">
                    <button type="submit" class="btn preset-filled">Registrar</button>
                </footer>
            </form>
    )
}