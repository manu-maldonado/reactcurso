import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormularioProducto } from "./FormularioJoyeria";
import { TablaProductos } from "./ProductosJoyeria";
import { DetalleProducto } from "./DetalleProducto";
import { Navbar } from "./Navbar";
import { Pagina404 } from "./ErrorVista";
import { productosJoyeria as productosIniciales } from "./productosJoyeriaMock";

function App() {
  const [productos, setProductos] = useState(productosIniciales);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <BrowserRouter>
      
      <Navbar />

      <div >
        <Routes>
          
          <Route path="/" element={<TablaProductos productos={productos} />} />

         
          <Route
            path="/agregar"
            element={<FormularioProducto onAgregarProducto={agregarProducto} />}
          />

          
          <Route
            path="/producto/:modelo"
            element={<DetalleProducto productos={productos} />}
          />

          
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
