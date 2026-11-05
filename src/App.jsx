import { useState } from "react";
import heroImg from "./assets/img/hero.png";
import reactLogo from "./assets/img/react.svg";
import viteLogo from "./assets/img/vite.svg";
import { SearchProduct } from "./components/SearchProduct.jsx";
import { allProducts } from "./Utils/productoMock.js";
import { Calculadora } from "./components/Calculadora.jsx";
import { Catalogo } from "./components/Catalogo.jsx";
import { UseEffectSinArreglo } from "./Utils/UseEffectSinArreglo.jsx";
import { UseEffectArregloVacio } from "./Utils/UseEffectArregloVacio.jsx";
import { UseEffectVariables } from "./Utils/UseEffectVariables.jsx";
import { UseEffectCleanup } from "./Utils/UseEffectCleanup.jsx";
import "./css/App.css";

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState("Hola x...");

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
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
          {/*Ejemplos*/}
          <UseEffectSinArreglo/>
          <UseEffectArregloVacio/>
          <UseEffectVariables/>
          <UseEffectCleanup/>
          {/*Ejemplos*/}
        </div>
        {/* Tabla Producto */}
        <SearchProduct allProducts={allProducts} />
        {/* Contador */}
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <p>Count is {count}</p>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => 0)}
        >
          Reset
        </button>
      </section>

      {/* Saludo  */}
      <input
        onInput={(evt) => {
          setSaludo(evt.target.value);
        }}
      ></input>

      <h4>{saludo}</h4>
      <div className="ticks"></div>

      <Catalogo products={allProducts} />
      <Calculadora/>


      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
