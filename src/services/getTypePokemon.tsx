import { url } from "../variables/variable";
import { getPokemon } from "./getPokemonDetail";

interface Props {
  pokemon: { name: string };
}

export const getTypePokemon = async (type?: string) => {
  if (
    type !== "poison" &&
    type !== "fire" &&
    type !== "fighting" &&
    type !== "flying" &&
    type !== "grass" &&
    type !== "water" &&
    type !== "normal"
  ) {
    return;
  }
  const resolve = await fetch(`${url}type/${type}?limit=10`);
  const result = await resolve.json();
  const { pokemon } = await result;
  if (pokemon === undefined) {
    return;
  }
  const PokemonsList = await pokemon
    .filter((el: string, i: number) => i < 10)
    .map((el: Props) => el.pokemon.name);
  const listNamePokemons = await PokemonsList.map(async (name?: string) => {
    const getPokemons = await getPokemon(name);
    return getPokemons;
  });
  return Promise.all(listNamePokemons);
};
