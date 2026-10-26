import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [saludo, setSaludo] = useState("Hola Desconocido");

  return (
    <>
      <section id="center">
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

      <input
        value={saludo}
        onChange={(evt) => {
          setSaludo(evt.target.value);
        }}
      ></input>

      <h4>Hola: {saludo}</h4>
      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
