import { useState, useEffect } from "react";
import { productosIniciales } from "./productosData";

export function CargaAsincrona() {
    // 1. Estados necesarios para la carga asíncrona
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // 2. useEffect para simular la petición asíncrona al montar el componente
    useEffect(() => {
        // Función simulada que tarda 2 segundos en responder
        const obtenerDatosSimulados = () => {
            setCargando(true);
            setError(null);

            setTimeout(() => {
                // Simulamos que a veces puede fallar (puedes cambiar a 'true' para probar el error)
                const simulandoFalla = false;

                if (simulandoFalla) {
                    setError("Error al conectar con el servidor simulado.");
                    setCargando(false);
                } else {
                    // Datos exitosos simulados
                    const productosDelServidor = [
                        { id: 101, nombre: "Audífonos Bluetooth", precio: 800 },
                        { id: 102, nombre: "Smartwatch Deportivo", precio: 2200 },
                        { id: 103, nombre: "Cámara Web HD", precio: 1100 },
                    ];
                    setDatos(productosDelServidor);
                    setCargando(false);
                }
            }, 2000); // 2 segundos de retraso simulado
        };

        obtenerDatosSimulados();
    }, []); // Arreglo vacío para que se ejecute solo al cargar el componente

    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "sans-serif", padding: "20px" }}>
            <h2>⏱️ Tarea 2: Carga Asíncrona Simulada</h2>

            {/* Condición 1: Si está cargando, muestra el Spinner o texto de carga */}
            {cargando && (
                <div style={{ textAlign: "center", padding: "20px", color: "#007bff" }}>
                    <p>⏳ Cargando productos del servidor...</p>
                </div>
            )}

            {/* Condición 2: Si hubo un error, lo muestra */}
            {error && (
                <div style={{ background: "#f8d7da", color: "#721c24", padding: "10px", borderRadius: "5px", marginBottom: "15px" }}>
                    <p>❌ {error}</p>
                </div>
            )}

            {/* Condición 3: Si ya cargó con éxito, muestra la lista */}
            {!cargando && !error && (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {datos.map((item) => (
                        <li key={item.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "8px", borderRadius: "5px", display: "flex", justifyContent: "space-between" }}>
                            <span>{item.nombre}</span>
                            <strong style={{ color: "green" }}>${item.precio}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}