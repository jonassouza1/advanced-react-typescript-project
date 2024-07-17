import { url } from "../variables/variable";

export const getListPokemons = async (id: number) => {
  const resolve = await fetch(`${url}pokemon?limit=${id}`);
  const result = await resolve.json();
  const getnamepokemon = result.results.map((el: any) => el.name);
  const pokemonNames = getnamepokemon.map(async (name: string) => {
    const resolve = await fetch(`${url}pokemon/${name}`);
    const result = await resolve.json();
    return result;
  });
  return Promise.all(pokemonNames);
};
