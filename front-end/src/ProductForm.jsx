
import { useEffect, useState } from "react";
import "./form.css";

export function ProductForm({ products = [] }) {

  // Estado para almacenar los productos
  const [productos, setProductos] = useState(products);

  // Estado para controlar la carga
  const [isLoading, setLoading] = useState(true);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    precio: 0,
    stock: 0,
    categoria: "",
  });

  // Capturar los cambios de los campos
  const handleChange = (evt) => {

    const { name, value, type, checked } = evt.target;

    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  // Simular carga inicial
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  // Enviar formulario
  const handleSubmit = (evt) => {

    evt.preventDefault();
    products.push(formData)

    callbackSetProducts(products)

    console.log("Datos estan listo para ser enviador al servidor", formData, products);

    // Validar campos
    if (
      formData.id === "" ||
      formData.nombre.trim() === "" ||
      formData.precio === "" ||
      formData.stock === "" ||
      formData.categoria.trim() === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Crear nuevo producto
    const nuevoProducto = {
      id: Number(formData.id),
      nombre: formData.nombre,
      precio: Number(formData.precio),
      stock: Number(formData.stock),
      categoria: formData.categoria
    };

    // Evitar IDs repetidos
    const existe = productos.some(
      (producto) => producto.id === nuevoProducto.id
    );

    if (existe) {
      alert("El ID ya existe. Utiliza otro.");
      return;
    }

    // Agregar producto al catálogo
    setProductos([...productos, nuevoProducto]);

    alert("Producto registrado correctamente");

    // Limpiar formulario
    setFormData({
      id: "",
      nombre: "",
      precio: "",
      stock: "",
      categoria: ""
    });
  };

  // Mostrar productos
  if (isLoading) {
    return <h3>Cargando productos...</h3>;
  }

  return (
    <>

      <h2>Registro de productos</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </div>

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
            step="1"
          />
        </div>

        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Categoría del producto"
          />
        </div>

        <button type="submit">
          Enviar
        </button>

      </form>

      <h2>Catálogo de productos</h2>

      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.id} -
            {producto.nombre} -
            ${producto.precio} -
            Stock: {producto.stock} -
            {producto.categoria}
          </li>
        ))}
      </ul>

    </>
  );
}
