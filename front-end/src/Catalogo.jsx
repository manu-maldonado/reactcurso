import { useEffect, useState } from "react";
import { GetAllProducts } from "./ProductList";
import { ProductForm } from "./ProductForm";

export function Catalogo({ products }) {
    const [productos, setProductos] = useState(products || []);
    const [isLoading, setLoading] = useState(true);
    const [canHandleForm, setCanHandleForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // Función para eliminar un producto con ventana de confirmación
    const handleDeleteProduct = (id) => {
        // Ventana nativa del navegador
        const confirmado = window.confirm("¿Estás seguro de que quieres eliminar este producto?");

        // Si el usuario le da a "Aceptar", 'confirmado' será true y se borra
        if (confirmado) {
            setProductos((prev) => prev.filter((p) => p.id !== id));
        }
    };

    const handleEditProduct = (producto) => {
        setSelectedProduct(producto);
        setCanHandleForm(true);
    };

    // Función para guardar (crear o actualizar en la lista)
    const handleSaveProduct = (productData) => {
        if (selectedProduct) {
            // Actualizar existente
            setProductos(productos.map(p => p.id === productData.id ? productData : p));
        } else {
            // Crear nuevo
            setProductos([...productos, productData]);
        }
        setCanHandleForm(false); // Cierra el formulario al guardar
        setSelectedProduct(null);
    };

    return (
        <div>
            {isLoading ? (
                <h4>Cargando...</h4>
            ) : (
                <GetAllProducts
                    products={productos}
                    onEditClick={handleEditProduct}
                    onDeleteClick={handleDeleteProduct}
                />
            )}

            <div className="mag-btns" style={{ marginTop: "15px" }}>
                <button
                    onClick={() => {
                        setSelectedProduct(null);
                        setCanHandleForm(true);
                    }}
                    className="mag-btn mag-btn-primary"
                >
                    Agregar Producto
                </button>
            </div>


            {canHandleForm && (
                <div style={{ marginTop: "20px" }}>
                    <ProductForm
                        selectedProduct={selectedProduct}
                        onSaveProduct={handleSaveProduct}
                    />
                </div>
            )}
        </div>
    );
}