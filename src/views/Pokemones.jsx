import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./pokemones.css";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonesSeleccion, setPokemonesSeleccion] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemones = async () => {
    const rest = await fetch(url);
    const { results } = await rest.json();
    setPokemones(results);
  };

  const goToPokemonDetails = async () => {
    pokemonesSeleccion
      ? navigate(`/pokemones/${pokemonesSeleccion}`)
      : alert("Debes seleccionar un Pokemon");
  };

  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <div className="mt-5 text-center">
      <h1>
        <strong>¿QUIÉN ES ESE POKEMÓN?</strong>
      </h1>
      <div className="col-5 col-sm-3 col-lg-6 mx-auto">
        <select
          id="seleccionador"
          value={pokemonesSeleccion}
          className="form-select text-center"
          onChange={({ target }) => setPokemonesSeleccion(target.value)}
        >
          <option value="" disabled>
            Conocelos más
          </option>
          {pokemones.map(({ name }, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <Button onClick={goToPokemonDetails} variant="outline-warning">
          {" "}
          <strong>DETALLES</strong>
        </Button>{" "}
      </div>
    </div>
  );
};

export default Pokemones;
