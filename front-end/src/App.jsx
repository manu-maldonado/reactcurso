import { useState } from "react";
import "./App.css";

import { GetAllProducts } from "./ProductsList";
import { allProducts } from "./productsMock";
import { Calculadora } from "./Calculadora";
import { Catalogo } from "./Catalogo";
import { UseEffectSinArreglo } from "./UseEffectSinArreglo";
import { UseEffectConArregloVacio } from "./UseEffectConArregloVacio";
import { UseEffectConArregloVariable } from "./UseEffectConArregloVariable";
import { UseEffectCleanup } from "./UseEffectCleanup";
import { SearchTermBox } from "./SearchTermBox";

function App() {
  const [contador, setContador] = useState(0);
  const [saludo, setSaludo] = useState("Hola Desconocido");

  return (
    <>
      <section id="center">
        <Calculadora />
        <hr />
        <h2>UseEffect sin Arreglo</h2>
        <UseEffectSinArreglo />
        <hr />
        <h2>UseEffect con Arreglo Vacío</h2>
        <UseEffectConArregloVacio />
        <hr />
        <h2>UseEffect con Arreglo con Variable</h2>
        <UseEffectConArregloVariable />
        <hr />
        <h2>UseEffect con Cleanup</h2>
        <UseEffectCleanup />
        <hr />
        <h2>Call API Search</h2>
        <SearchTermBox />
        <hr />
        <h2>Tabla con Búsqueda</h2>
        <GetAllProducts products={allProducts} />
        <hr />
        <h2>Contador</h2>
        <p>El Contador está en: {contador}</p>
        <button
          type="button"
          className="counter"
          onClick={() => setContador((contador) => contador + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setContador((contador) => contador - 1)}
        >
          -
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setContador(() => 0)}
        >
          Inicializar
        </button>
      </section>
      <hr />
      <h2>Saludo Personalizado</h2>
      <input
        value={saludo}
        onChange={(evt) => {
          setSaludo(evt.target.value);
        }}
      ></input>

      <h4>Hola: {saludo}</h4>
      <hr />
      <h2>CRUD (Create, Read, Update and Delete) en Tabla</h2>
      <Catalogo products={allProducts} />
      <section id="spacer"></section>
    </>
  );
}

export default App;
