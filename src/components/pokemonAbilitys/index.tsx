/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import { useEffect, useState, useContext } from "react";
import { getAbilitysPokemon } from "../../services/getAbilitysPokemon";
import { useParams } from "react-router";
import { Section } from "./styles";
interface Props {
  effect_entries: [object];
  name: string;
}
export const PokemonAbilitys = () => {
  const [pokemon, setPokemon] = useState<Props>({
    effect_entries: [{ effect: "" }],
    name: "",
  });
  const { name } = useParams();

  useEffect(() => {
    const fetchDate = async () => {
      const response = await getAbilitysPokemon(name);
      const listAbilitys = response.map((el) => {
        const abilitys = el;
        setPokemon(el);
      });
    };
    fetchDate();
  }, []);

  return (
    <Section>
      <h2>Ability</h2>
      <h4>Name: {pokemon.name}</h4>
      <h3>-- Skill Description --</h3>
      {pokemon.effect_entries.map((el: any, i: number) => {
        return <p key={i}>{i === 1 && el.effect}</p>;
      })}
    </Section>
  );
};
