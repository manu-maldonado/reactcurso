const HINTS = {
  0:   "No se pudo conectar. ¿El servidor está activo? ¿Problema de CORS?",
  400: "La solicitud tiene datos inválidos.",
  401: "Tu sesión expiró. Vuelve a iniciar sesión.",
  403: "No tienes permisos para esta acción.",
  404: "El recurso que buscas no existe.",
  408: "La solicitud tardó demasiado. Intenta de nuevo.",
  500: "Error interno del servidor. Intenta más tarde.",
  503: "Servicio temporalmente no disponible.",
};

/**
 * Panel de error presentacional. NO captura errores, solo los pinta.
 * @param {{ error: Error & { status?: number } | null, onRetry?: () => void, title?: string }} props
 */
export function ErrorPanel({ error, onRetry, title = "Algo salió mal" }) {
  if (!error) return null;

  const status = error.status ?? 0;
  const hint = HINTS[status];

  return (
    <div role="alert" aria-live="assertive" className="mag-error">
      <h3 className="mag-error-title">{title}</h3>
      <p className="mag-error-message">{error.message}</p>

      {hint && <p className="mag-error-hint">💡 {hint}</p>}

      {import.meta.env.DEV && error.stack && (
        <details className="mag-error-details">
          <summary>Stack (solo en dev)</summary>
          <pre>{error.stack}</pre>
        </details>
      )}

      {onRetry && (
        <button
          type="button"
          className="mag-btn mag-btn-primary"
          onClick={onRetry}
        >
          Reintentar
        </button>
      )}
    </div>
  );
}