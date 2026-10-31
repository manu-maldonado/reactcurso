import { useEffect, useState } from "react";
import { ProductForm } from "./ProductForm";

const formVacio = { nombre: "", precio: "", stock: "", categoria: "" };

export function Catalogo({ products = [] }) {
  // definir estado para productos, cargando
  const [productos, setProductos] = useState(products);
  const [isLoading, setLoading] = useState(true);

  // estado del formulario del CRUD
  const [form, setForm] = useState(formVacio);
  const [editandoId, setEditandoId] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  function cambiarCampo(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  function limpiar() {
    setForm(formVacio);
    setEditandoId(null);
    setMensaje("");
  }

  function datosValidos() {
    if (form.nombre === "" || form.precio === "") {
      setMensaje("Escribe al menos el nombre y el precio");
      return false;
    }
    return true;
  }

  // CREATE: splice inserta el producto al final de una copia de la lista
  function agregar() {
    if (!datosValidos()) return;

    const nuevoId = String(Math.max(0, ...productos.map((p) => Number(p.id))) + 1);

    const nuevo = {
      id: nuevoId,
      nombre: form.nombre,
      precio: Number(form.precio),
      stock: Number(form.stock),
      categoria: form.categoria,
    };

    const copia = [...productos];
    copia.splice(copia.length, 0, nuevo);
    setProductos(copia);
    limpiar();
  }

  // READ (uno): find busca el producto por su id y lo lleva a los inputs
  function editar(id) {
    const producto = productos.find((p) => p.id === id);
    if (!producto) return;

    setEditandoId(producto.id);
    setMensaje("");
    setForm({
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
      categoria: producto.categoria,
    });
  }

  // UPDATE: findIndex encuentra la posición y splice reemplaza ese producto
  function guardar() {
    if (!datosValidos()) return;

    const copia = [...productos];
    const index = copia.findIndex((p) => p.id === editandoId);
    if (index === -1) return;

    copia.splice(index, 1, {
      ...copia[index],
      nombre: form.nombre,
      precio: Number(form.precio),
      stock: Number(form.stock),
      categoria: form.categoria,
    });

    setProductos(copia);
    limpiar();
  }

  // DELETE: filter crea una lista nueva sin ese producto
  function eliminar(id) {
    const producto = productos.find((p) => p.id === id);
    if (!producto) return;

    const confirmado = window.confirm(
      `¿Seguro que quieres eliminar "${producto.nombre}"?`
    );
    if (!confirmado) return;

    setProductos(productos.filter((p) => p.id !== id));
    if (id === editandoId) limpiar();
  }

  if (isLoading) {
    return <h4>esta cargando....</h4>;
  }

  return (
    <ProductForm
      productos={productos}
      form={form}
      editandoId={editandoId}
      mensaje={mensaje}
      onCambiarCampo={cambiarCampo}
      onAgregar={agregar}
      onGuardar={guardar}
      onCancelar={limpiar}
      onEditar={editar}
      onEliminar={eliminar}
    />
  );

  
}