import { useEffect, useState } from "react";
import { Pencil, Trash2, PackagePlus, Check } from "lucide-react";
import { allProducts } from "../mock/productoMock";
import { GetAllProducts } from "./ProductsList";

export function Catalogo() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [editId, setEditId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProducts(allProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

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

  const deleteProduct = () => {
    if (selectedId === null) return;

    setProducts(products.filter((product) => product.id !== selectedId));
    setSelectedId(null);
  };

  const editProduct = () => {
    const product = products.find((product) => product.id === selectedId);

    if (!product) return;

    setEditId(product.id);
    setNombre(product.nombre);
    setCategoria(product.categoria);
    setPrecio(product.precio);
  };

  const clearForm = () => {
    setNombre("");
    setCategoria("");
    setPrecio("");
    setEditId(null);
  };

  return (
    <div>
      <form
        className="flex gap-3"
        onSubmit={editId !== null ? updateProduct : addProduct}
      >
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
          {editId !== null ? <Check size={16} /> : <PackagePlus size={16} />}
        </button>

        <button
          type="button"
          onClick={editProduct}
          disabled={selectedId === null}
        >
          <Pencil size={16} />
        </button>

        <button
          type="button"
          onClick={deleteProduct}
          disabled={selectedId === null}
        >
          <Trash2 size={16} />
        </button>
      </form>

      <br />

      {isLoading ? (
        <p className="text-muted-foreground">Cargando...</p>
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
