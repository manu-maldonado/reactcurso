import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { GetAllProducts } from './ProductList.jsx'
import { allProducts}  from './productosMock.js'
import { SearchProduct } from './SearchProduct.jsx'
import { Calculator } from './Calculator.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [saludo, setSaludo] = useState("Hola, desconocido")
  const [busqueda, setBusqueda] = useState("")   // Estado para almacenar la búsqueda
  const [orden, setOrden] = useState("idAsc") // Estado para el ordenamiento
  // Filtrar los productos por nombre
  const productosFiltrados = allProducts.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )
  // Ordenar productos
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {

      if (orden === "precioAsc") {
          return a.precio - b.precio
      }

      if (orden === "precioDesc") {
          return b.precio - a.precio
      }

      if (orden === "idAsc") {
          return a.id.localeCompare(b.id, undefined, { numeric: true })
      }

      if (orden === "idDesc") {
          return b.id.localeCompare(a.id, undefined, { numeric: true })
      }

      return 0
  })
  
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
        <SearchProduct
            busqueda={busqueda}
            setBusqueda={setBusqueda}
        />

        <div>
            <label htmlFor="ordenProductos">Ordenar por: </label>

            <select
                id="ordenProductos"
                value={orden}
                onChange={(evt) => setOrden(evt.target.value)}
            >
                <option value="idAsc">ID: Ascendente</option>
                <option value="idDesc">ID: Descendente</option>
                <option value="precioAsc">Precio: Menor a mayor</option>
                <option value="precioDesc">Precio: Mayor a menor</option>
            </select>
        </div>

        <GetAllProducts products={productosOrdenados} />
        <Calculator />
        <label>Count is {count}</label>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >+
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >-
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => 0)}
        >reset
        </button>
      </section>

      <input onInput= {(evt)=> {
        setSaludo(evt.target.value)}
      }></input>
      
      <h4>{saludo}</h4>
      
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
  )
}

export default App
