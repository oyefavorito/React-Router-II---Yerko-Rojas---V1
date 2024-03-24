import { useParams } from "react-router-dom";
import TarjetaPokemon from "../components/TarjetaPokemon";
import { useEffect, useState } from "react";

const Detalles = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";
  const getPokemon = async (name) => {
    try {
      const res = await fetch(`${url}/${name}`);
      if (!res.ok) {
        throw new Error("Network reponse was not ok");
      }
      const data = await res.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const type = data.types.map(({ type }) => type.name).join(" ");
      setPokemon({ name, stats, src, type });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return <TarjetaPokemon pokemon={pokemon} />;
};

export default Detalles;