import { useEffect, useState } from "react";

export function UseEffectCleanup() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    //Inicializar un Temporizador
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Limpiando Intervalo para Evitar Fugas de Memoria...");
      clearInterval(intervalo);
    };
  }, []);

  return <p>Segundos Activos en la Vista Renderizada: {segundos}</p>;
}
