import { useEffect, useState } from "react";
import "./form.css"
import { ProductForm } from "./ProductFrom";

export function Catalogo({products}){

    //definir estado para productos
    //const [productos,setProductos] = useState([products]);
    const [productos, setProductos] = useState(products);
    const [isLoading,setLoading] = useState(true);
    const [canHandleForm, setCanHandleForm] = useState(false);

    // Estados para los campos del formulario
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [categoria, setCategoria] = useState("");

    const [mensaje, setMensaje] = useState("")
    
    
    useEffect(()=> {
        let active = true 
        const timer = setTimeout(() => {
            if(active)
            setLoading(false)
        },2500);

        return () =>{
            active = false
            clearTimeout(timer)
        }
    })

    // CREATE: Crear producto
    function crearProducto() {

        //Validar que los campos no estén vacios
        if (!id.trim() || !nombre.trim() ||
            precio === "" || stock === "" || !categoria.trim()) {
            setMensaje("Completa todos los campos");
            return;
        }

        //Verificar que el producto no exista
        if (productos.some((producto) => producto.id === id)) {
            setMensaje("Ya existe un producto con ese ID");
            return;
        }

        //Validar precio y stock
        if (!Number.isFinite(Number(precio)) ||
            Number(precio) < 0 ||
            !Number.isInteger(Number(stock)) ||
            Number(stock) < 0) {
            setMensaje("Precio o stock inválidos");
            return;
        }

        //Creamos el objeto
        const nuevoProducto = {
            id: id,
            nombre: nombre,
            precio: Number(precio),
            stock: Number(stock),
            categoria: categoria
        };

        //Agregamos el producto al estado
        setProductos([...productos, nuevoProducto]);

        setMensaje("Producto agregado correctamente");
    }

    // READ: Buscar producto
    function leerProducto() {

        const producto = productos.find(
            (producto) => producto.id === id
        );

        //Si existe, devuelve el objeto
        if (producto) {
            setNombre(producto.nombre);
            setPrecio(String(producto.precio));
            setStock(String(producto.stock));
            setCategoria(producto.categoria);

            setMensaje("Producto encontrado");
        } else {
            setMensaje("Producto no encontrado");
        }
    }

    // UPDATE: Actualizar producto
    function actualizarProducto() {

        //Validar que los datos sean correctos antes de modificar un producto

        //Verificar que los campos estén completos
        if (!id.trim() || !nombre.trim() ||
            precio === "" || stock === "" || !categoria.trim()) {
            setMensaje("Completa todos los campos");
            return;
        }

        //VAlidar que precio y stock sean correctos
        if (!Number.isFinite(Number(precio)) ||
            Number(precio) < 0 ||
            !Number.isInteger(Number(stock)) ||
            Number(stock) < 0) {
            setMensaje("Precio o stock inválidos");
            return;
        }

        //Comprobar que el producto exista
        if (!productos.some((producto) => producto.id === id)) {
            setMensaje("Producto no encontrado");
            return;
        }

        //Si se cumplen las condiciones:
        //Recorre el arreglo y devuelve el producto
        const productosActualizados = productos.map((producto) => {

            if (producto.id === id) {
                return {
                    ...producto,
                    nombre: nombre,
                    precio: Number(precio),
                    stock: Number(stock),
                    categoria: categoria
                };
            }

            return producto;
        });

        setProductos(productosActualizados); //Actualiza la lista completa

        setMensaje("Producto actualizado correctamente");
    }

    // DELETE: Eliminar producto
    function eliminarProducto() {

        //Verificamos que exista un producto con ese ID
        const existe = productos.some(
            (producto) => producto.id === id
        );

        if (!existe) {
            setMensaje("Producto no encontrado");
            return;
        }

        //Filtramos los productos, devuelve los elementos que cumplan la condición
        const productosRestantes = productos.filter(
            (producto) => producto.id !== id //Conserva todos los productos cuyo ID sea diferente del que queremos eliminar
        );

        setProductos(productosRestantes); //Actualizamos el estado y el producto desaparece

        setMensaje("Producto eliminado correctamente");
    }

    return (
        <div>

            <h2>Catálogo de productos</h2>

            {isLoading
                ? <h4>Está cargando...</h4>
                : <h4>Terminó de cargar</h4>
            }

            <div class="mag-btns">
                <button onClick={()=> setCanHandleForm(true)}>Agregar producto</button>
                <button onClick={()=> setCanHandleForm(true)}>Actualizar producto</button>
                <button onClick={()=> setCanHandleForm(false)}>Eliminar producto</button>

            </div>
            {canHandleForm ? <ProductForm products = {productos} callbackSetLoadingProducts={setLoading}/>: ""}

            <h3>Administrar productos</h3>

            <input
                placeholder="ID"
                value={id}
                onChange={(evt) => setId(evt.target.value)}
            />

            <input
                placeholder="Nombre"
                value={nombre}
                onChange={(evt) => setNombre(evt.target.value)}
            />

            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(evt) => setPrecio(evt.target.value)}
            />

            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(evt) => setStock(evt.target.value)}
            />

            <input
                placeholder="Categoría"
                value={categoria}
                onChange={(evt) => setCategoria(evt.target.value)}
            />

            <div>
                <button onClick={crearProducto}>Create</button>
                <button onClick={leerProducto}>Read</button>
                <button onClick={actualizarProducto}>Update</button>
                <button onClick={eliminarProducto}>Delete</button>
            </div>

            <p>{mensaje}</p>

            <h3>Lista de productos</h3>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                    </tr>
                </thead> 

                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.categoria}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}