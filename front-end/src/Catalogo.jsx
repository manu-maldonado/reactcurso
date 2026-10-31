import { useEffect, useState } from "react";

export function Catalogo({ products }) {
  const [productos, setProductos] = useState(...products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (active) setIsLoading(false);
    }, 2500);

    let active = true;

    return () => {
      active = false;
      clearTimeout(timer);
    };
  });

  return (
    <div>
      {isLoading ? <h4>esta cargando......</h4> : <h4>termino de cargar</h4>}
      {products.map((product) => (
        <h4>{product.id}</h4>
      ))}
    </div>
  );
}
