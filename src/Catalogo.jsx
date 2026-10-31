import { useEffect, useState } from "react";
import { allProducts } from "./productoMock";
import { GetAllProducts } from "./ProductsList";

export function Catalogo() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [editId, setEditId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // aqui renderiza
  useEffect(() => {
    setTimeout(() => {
      setProducts(allProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  // crear
  const addProduct = (e) => {
    e.preventDefault();

    if (!nombre || !categoria || !precio) return;

    const newProduct = {
      id: Date.now(),
      nombre,
      categoria,
      precio: Number(precio),
    };

    const updatedProducts = [...products];
    updatedProducts.push(newProduct);

    setProducts(updatedProducts);

    clearForm();
  };

  // editar
  const updateProduct = (e) => {
    e.preventDefault();

    if (!nombre || !categoria || !precio) return;

    const product = products.find((product) => product.id === editId);

    if (!product) return;

    const updatedProducts = products.map((item) =>
      item.id === editId
        ? {
            ...item,
            nombre,
            categoria,
            precio: Number(precio),
          }
        : item
    );

    setProducts(updatedProducts);

    clearForm();
  };

  // borro el que elegí en la tabla
  const deleteProduct = () => {
    if (selectedId === null) return;

    setProducts(products.filter((product) => product.id !== selectedId));
    setSelectedId(null);
  };

  // cargo los datos del seleccionado al formulario
  const editProduct = () => {
    const product = products.find((product) => product.id === selectedId);

    if (!product) return;

    setEditId(product.id);
    setNombre(product.nombre);
    setCategoria(product.categoria);
    setPrecio(product.precio);
  };

  // limpio
  const clearForm = () => {
    setNombre("");
    setCategoria("");
    setPrecio("");
    setEditId(null);
  };

  return (
    <div>
      <h4>Catáloguito</h4>

      {/* formulario */}
      <form onSubmit={editId !== null ? updateProduct : addProduct}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Actualizar" : "Agregar"}
        </button>

        <button type="button" onClick={editProduct} disabled={selectedId === null}>
          Editar
        </button>

        <button type="button" onClick={deleteProduct} disabled={selectedId === null}>
          Eliminar
        </button>
      </form>

      <br />


      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <GetAllProducts
          products={products}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      )}
    </div>
  );
}
