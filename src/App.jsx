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

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState("Hola desconocido");

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-gray-800 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Encabezado */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cuaderno de Karla :)))
          </h1>
        </header>

        <h3>Call Api search</h3>
        <SearchTermBox />

        {/* JSONPlaceholder */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            JSONPlaceholder
          </h2>
          <PostViewer />
        </section>

        {/* Tabla de productos */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Productos
          </h2>
          <SearchProduct allProducts={allProducts} />
        </section>

        {/* Hooks */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <UseEffectVariebles />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <UseEffectCleanup />
          </div>
        </section>

        {/* Catálogo */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Catálogo</h2>
          <Catalogo allProducts={allProducts} />
        </section>

        {/* Contador */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Contador</h2>

          <p className="mb-5 text-4xl font-bold text-purple-600">{count}</p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
              className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white transition hover:bg-purple-700 active:scale-95"
            >
              + Incrementar
            </button>

            <button
              type="button"
              onClick={() => setCount((count) => count - 1)}
              className="rounded-lg bg-gray-200 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-300 active:scale-95"
            >
              - Decrementar
            </button>

            <button
              type="button"
              onClick={() => setCount(0)}
              className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-600 transition hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </section>

        {/* Saludo */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Saludo personalizado
          </h2>

          <input
            type="text"
            value={saludo}
            onChange={(evt) => setSaludo(evt.target.value)}
            placeholder="Escribe tu saludo..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />

          <h4 className="mt-4 text-lg font-medium text-purple-600">{saludo}</h4>
        </section>

        {/* Calculadora */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Calculadora
          </h2>
          <Calculator />
        </section>
      </div>
    </main>
  );
}

export default App;
