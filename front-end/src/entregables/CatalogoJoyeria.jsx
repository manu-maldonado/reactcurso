import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { productosIniciales } from "./data/productos";
import { MiniCatalogo } from "./MiniCatalogo";
import { DetalleProducto } from "./pages/DetalleProducto";
import { Pagina404 } from "./pages/Pagina404";

export function CatalogoJoyeria() {

    // Estado compartido de los productos
    const [productos, setProductos] = useState(productosIniciales);

    // Agregar un nuevo producto
    function agregarProducto(datosProducto) {

        setProductos((anteriores) => {

            const nuevoId = anteriores.length > 0
                ? Math.max(...anteriores.map((producto) => producto.id)) + 1
                : 1;

            const nuevoProducto = {
                id: nuevoId,
                ...datosProducto
            };

            return [...anteriores, nuevoProducto];
        });
    }

    return (
        <Routes>
            <Route
                index
                element={
                    <MiniCatalogo
                        productos={productos}
                        onAgregar={agregarProducto}
                    />
                }
            />

            <Route
                path=":id"
                element={<DetalleProducto productos={productos} />}
            />

            <Route
                path="*"
                element={<Pagina404 />}
            />
        </Routes>
    );
}