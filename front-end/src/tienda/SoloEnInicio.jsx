import { useLocation } from "react-router-dom";

export function SoloEnInicio({ children }) {
  const { pathname } = useLocation();
  return pathname === "/" ? children : null;
}
