import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoPokemon from "../assets/img/logoPokemon.png";

import "./barraNavegacion.css";

const BarraNavegacion = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar
      className="d-flex justify-content-between"
      style={{ background: "yellow" }}
    >
      <NavLink to="/">
        <img id="logo" src={logoPokemon} alt="logo pokemon" />
      </NavLink>

      <div className="d-flex align-items-center justify-content-end">
        <NavLink id="linkUno" className={activeClass + "m-3"} to="/">
          <strong>Home</strong>
        </NavLink>

        <NavLink id="linkDos" className={activeClass} to="/pokemones">
          <strong>Pokemones</strong>
        </NavLink>
      </div>
    </Navbar>
  );
};

export default BarraNavegacion;
