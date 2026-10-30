export function CalculadoraOperaciones({ operaciones, input1, input2 }) {
  let tipoOperacion = "";
  let resultado = 0;

  if (operaciones === "S") {
    tipoOperacion = "SUMA";
    resultado = input1 + input2;
  }
  if (operaciones === "R") {
    tipoOperacion = "Resta";
    resultado = input1 - input2;
  }
  if (operaciones === "M") {
    tipoOperacion = "Multiplicar";
    resultado = input1 * input2;
  }
  if (operaciones === "D") {
    tipoOperacion = "Dividir";

    resultado = input1 / input2;
    if (+input2 === 0 || (+input1 === 0 && +input2 === 0)) {
      resultado = "Error";
    }
  }

  return (
    <>
      <p>
        Resultado de la {tipoOperacion}: {resultado}
      </p>
    </>
  );
}
