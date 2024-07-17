/* eslint-disable react-hooks/exhaustive-deps */

import { FunctionComponent, useState, useEffect } from "react";
import { useParams } from "react-router";
import { H2, Ul } from "./styles";
interface Props {
  getPokemon: (name?: string) => any;
}
interface PropsState {
  type: { name: string };
}
export const PokemonType: FunctionComponent<Props> = ({ getPokemon }) => {
  const [pokemon, setPokemon] = useState<PropsState[]>([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchDate = async () => {
      const result = await getPokemon(name);
      const { types } = await result;
      setPokemon(types);
    };
    fetchDate();
  }, []);
  return (
    <>
      <H2>Type</H2>
      <Ul>
        {pokemon.map((el, i) => {
          return <li key={i}>{el.type.name}</li>;
        })}
      </Ul>
    </>
  );
};
