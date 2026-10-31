import { useState } from 'react'; // agrego una libreria de react
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import { GetAllProducts } from './productList';
import { allProducts } from './productosMock.js';
import { SearchProduct } from './searchProduct.jsx';
import { Calculadora } from './calculadora.jsx';
import { Catalogo } from './catalogo.jsx';
import { Crud } from './crudMock.jsx';
import { useEffectSinArreglo } from './UseEffectSinArreglo.jsx';
import { useEffectArregloVacio } from './useEffectArregloVacio.jsx';
import { UseEffectVariables } from './useEffectVariables.jsx';
import { UseEffectCleanUp } from './useEffectCleanUp.jsx';
// import ./form.css

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState('Hola desconocido');
  // const [name, setName] = useState('');

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
        <SearchProduct products={allProducts}></SearchProduct>
        <useEffectSinArreglo />
        <useEffectArregloVacio />
        <UseEffectVariables />
        <UseEffectCleanUp />
        {/* <GetAllProducts products={allProducts}></GetAllProducts> */}
        {/* <div>
          <h3>Calculadora</h3>
          <input type="text" />
          
          <hr />
          <button className="counter">Suma</button>
          <button className="counter">Resta</button>
          <button className="counter">Multiplicacion</button>
          <button className="counter">Division</button>
          
        </div> */}
        {/* <label htmlFor="">{registro}</label> */}
        {/* <label htmlFor="">{resultado}</label> */}

        <Catalogo products={allProducts} />
        <Crud />
        <Calculadora />
        <div>
          <label htmlFor="">Contador {count}</label>

          <div>
            <button
              type="button"
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >
              Incremento
            </button>
            <button
              type="button"
              className="counter"
              onClick={() => setCount((count) => count - 1)}
            >
              Decremento
            </button>
            <button
              type="button"
              className="counter"
              onClick={() => setCount((count) => (count = 0))}
            >
              Reseteo
            </button>
          </div>
        </div>
      </section>

      <input
        onInput={() => {
          setSaludo((a) => {
            console.log(a);
            ('ya no eres extraño');
          });
        }}
        type="text"
      />
      <h4> {saludo} </h4>
      {/* inyectar valor del useState */}
      <div className="ticks"></div>

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
