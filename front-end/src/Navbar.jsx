import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#282c34", color: "#fff" }}>
      <ul
        style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0 }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#61dafb" : "#fff",
              textDecoration: "none",
            })}
          >
            Catálogo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agregar"
            style={({ isActive }) => ({
              color: isActive ? "#61dafb" : "#fff",
              textDecoration: "none",
            })}
          >
            Agregar Producto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
