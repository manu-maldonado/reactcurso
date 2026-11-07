import { useState } from "react";
import { SearchProduct } from "./sections/SearchProduct.jsx";
import { allProducts } from "./mock/productoMock.js";
import { Calculator } from "./sections/Calculator.jsx";
import { Catalogo } from "./sections/Catalogo.jsx";
import { UseEffectCleanup } from "./sections/UseEffectCleanUp.jsx";
import { UseEffectVariebles } from "./sections/UseEffectVariables.jsx";
import { SearchBox } from "./sections/SearchBox.jsx";
import { PostViewer } from "./JSONPlaceholder/PostViewer.jsx";
import { SearchTermBox } from "./sections/SearchTermBox.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { DetallePlaceHolder } from "./pages/DetallePlaceHoldeer.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState("Hola desconocido");

  return (
    <BrowserRouter>
      <nav className="border-b border-border bg-background px-4 py-3 sm:px-8">
        <Link to="/">Home</Link>
      </nav>

      <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-8">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detalle/:id" element={<DetallePlaceHolder />}></Route>
        </Routes>
        <div className="mx-auto max-w-6xl space-y-8">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Cuaderno de Karla :)))
            </h1>
          </header>

          <h3>Call Api search</h3>
          <SearchTermBox />

          <section className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
              JSONPlaceholder
            </h2>
            <PostViewer />
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
              Productos
            </h2>
            <SearchProduct allProducts={allProducts} />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
              <UseEffectVariebles />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
              <UseEffectCleanup />
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
              Catálogo
            </h2>
            <Catalogo allProducts={allProducts} />
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
              Contador
            </h2>

            <p className="mb-5 text-4xl font-bold text-primary">{count}</p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setCount((count) => count + 1)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                + Incrementar
              </button>

              <button
                type="button"
                onClick={() => setCount((count) => count - 1)}
              >
                - Decrementar
              </button>

              <button
                type="button"
                onClick={() => setCount(0)}
                className="border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Reset
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
              Saludo
            </h2>

            <input
              type="text"
              value={saludo}
              onChange={(evt) => setSaludo(evt.target.value)}
              placeholder="Escribe tu saludo..."
              className="w-full"
            />

            <h4 className="mt-4 text-lg font-medium text-primary">{saludo}</h4>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
              Calculadora
            </h2>
            <Calculator />
          </section>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
