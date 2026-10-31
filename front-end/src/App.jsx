import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
// import { GetAllProducts } from "./ProductList";
import listaProductos from "./productosMock";
import { SearchProduct } from "./SearchProduct";
import { Calculadora } from "./Calculadora";
import { Catalogo } from "./Catalogo";
import { Formulario } from "./agregarFormulario";

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState("Hola desconocido");

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <SearchProduct products={listaProductos}></SearchProduct>
        {/* <GetAllProducts products={listaProductos}></GetAllProducts> */}

        <div>
          <h2>Count is {count}</h2>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is ++
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          Count is --
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => (count = 0))}
        >
          Count reset
        </button>
      </section>

      <section>
        <Catalogo products={listaProductos}></Catalogo>
      </section>

      {/* <input type="text" onInput={(evt) => setSaludo(evt.target.value)} /> */}

      <h4>{saludo}</h4>
      <div className="ticks">-----------------------------------</div>

      <Calculadora></Calculadora>

      <section>
        <Formulario products={listaProductos}></Formulario>
      </section>
    </>
  );
}

export default App;
