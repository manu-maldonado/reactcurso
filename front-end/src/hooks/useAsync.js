import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hook genérico para operaciones asíncronas.
 * Encapsula: loading, error, data, cancelación, reintento.
 *
 * @param {(signal: AbortSignal) => Promise<any>} asyncFn
 * @param {any[]} deps
 */
export function useAsync(asyncFn, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const abortRef = useRef(null);

  const run = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setState((s) => ({ ...s, loading: true, error: null }));

    try {
      const data = await asyncFn(controller.signal);
      if (abortRef.current === controller) {
        setState({ data, loading: false, error: null });
      }
    } catch (err) {
      if (err.name === "AbortError") return; // cancelada a propósito
      if (abortRef.current === controller) {
        setState({ data: null, loading: false, error: err });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    run();
    return () => abortRef.current?.abort();
  }, [run]);

  return { ...state, recargar: run };
}
