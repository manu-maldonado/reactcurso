import {useState} from "react";

export function FormularioProducto({products, callbackSetProductos}) {
    const [formData, setFormData] = useState({
        nombre: "",
        categoria: "",
        precio: 0,
        stock: 0,
    });

    const handleChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));



        console.log(evt.target);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        products.push(formData);
        callbackSetProductos(true);
        setFormData({
            nombre: "",
            categoria: "",
            precio: 0,
            stock: 0,
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                id="id"
                name="id"
                value={formData.id}
                placeholder="ID del producto"
                onlyread
            />
            <input
                onChange={handleChange}
                id="nombre"
                name="nombre"
                value={formData.nombre}
                placeholder="Nombre del producto"
            />
            <input 
                id="categoria"
                name="categoria"
                value={formData.categoria}
                placeholder="Categoría"
                onChange={handleChange}
            />
            <input 
                id="precio"
                name="precio"
                type="number"
                value={formData.precio}
                placeholder="Precio"
                onChange={handleChange}
            />
            <input 
                id="stock"
                name="stock"
                type="number"
                value={formData.stock}
                placeholder="Stock"
                onChange={handleChange}
            />
            <button type="submit">Agregar producto</button>
        </form>
    );
}
