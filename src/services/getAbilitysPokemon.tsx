import { getPokemon } from "./getPokemonDetail";

interface Abilitys {
  url: string;
}
interface Props {
  name: string;
  ability: Abilitys;
  url?: string;
}
export const getAbilitysPokemon = async (name?: string) => {
  const { abilities } = await getPokemon(name);
  const abylitiPokemon = await abilities.map(async (el: Props) => {
    const listAbylities = el.ability.url;
    const resolve = await fetch(`${listAbylities}`);
    const result = await resolve.json();
    return result;
  });
  return Promise.all(abylitiPokemon);
};
