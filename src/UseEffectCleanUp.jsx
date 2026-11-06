import { useEffect, useState } from "react";

export function UseEffectCleanup() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalor = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("Limpiando");
      clearInterval(intervalor);
    };
  }, []);
  return <p>Segundos activos en la vista rendereada {segundos}</p>;
}
