<<<<<<< HEAD
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
// import { UseEffectSinArreglo } from './UseEffectSinArreglo';
import { UseEffectArregloVacio } from './useEffectArregloVacio.jsx';
import { UseEffectVariables } from './useEffectVariables.jsx';
import { UseEffectCleanUp } from './useEffectCleanUp.jsx';
import { SearchBox } from './SearchBox.jsx';
import { SearchTermBox } from './SearchTermBox.jsx';
// import ./form.css

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState('Hola desconocido');
  // const [name, setName] = useState('');
=======
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { allProducts }  from './productosMock.js'
import { Catalogo } from './Catalogo.jsx'
import { UseEffectSinArreglo } from './UseEffectSinArreglo.jsx'
import { UseEffectArregloVacio } from './UseEffectArregloVacio.jsx'
import { UseEffectVariables } from './UseEffectVariables.jsx'
import { UseEffectCleanup } from './UseEffectCleanup.jsx'
import { SearchTermBox } from './SearchTermBox.jsx'
import { SearchProduct } from "./SearchProduct"
import { Calculadora } from "./Calculadora.jsx"

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState("Hola desconocido");
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4

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
<<<<<<< HEAD
          <h3>SearchBox Nueva</h3>
          <SearchTermBox />
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

=======
          <h3>Call Api search</h3>
          <SearchTermBox/>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
          <UseEffectSinArreglo/>
          <UseEffectArregloVacio/>
          <UseEffectVariables/>
          <UseEffectCleanup/>
        </div>
        <Calculadora />
        <SearchProduct products={allProducts} />
        <label>Count is {count}</label>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
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
          onClick={() => setCount(() => 0)}
        >
          {" "}
          reset
        </button>
      </section>

      <input
        onInput={(evt) => {
          setSaludo(evt.target.value);
        }}
      ></input>

      <h4>{saludo}</h4>
      <div className="ticks"></div>
      <Catalogo products={allProducts}/>
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
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
