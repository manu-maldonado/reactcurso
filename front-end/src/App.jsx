import { useState } from 'react'
import { Home } from './Home.jsx'
import { DetallePlaceHolder } from './DetallePlaceHolder.jsx'
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
import { PostList } from "./PostList.jsx"
import { PostDetail } from "./PostDetail.jsx"
import { PostCreate } from './PostCreate.jsx'
import { PostUpdate } from './PostUpdate.jsx'
import { PostDelete } from './PostDelete.jsx'
import { PostFilter } from './PostFilter.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState("Hola desconocido");

  return (
    <>
    <BrowserRouter>
      <nav> <Link to="/">Home</Link> </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<DetallePlaceHolder />} />
        </Routes>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
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
        <section id="jsonplaceholder">
          <h2>Práctica JSONPlaceholder</h2>

          <PostList />
          <PostDetail />
          <PostCreate />
          <PostUpdate />
          <PostDelete />
          <PostFilter />
        </section>
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
      </main>
    </BrowserRouter>
    </> 
  );
}

export default App;
