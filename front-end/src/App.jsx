import "./App.css";
import React, { useState } from "react";
import { FormularioProducto } from "./FormularioJoyeria";
import { TablaProductos } from "./ProductosJoyeria";
import { productosJoyeria as productosIniciales } from "./productosJoyeriaMock";

function App() {
 
  const [productos, setProductos] = useState(productosIniciales);
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <>
      <h2>Hola Mundo</h2>

      {/* 3. Le pasamos la lista actual de productos a la tabla */}
      <TablaProductos productos={productos} />

      <br />

      {/* 4. Le pasamos la función 'agregarProducto' al formulario */}
      <FormularioProducto onAgregarProducto={agregarProducto} />
    </>
  );
}

export default App;
