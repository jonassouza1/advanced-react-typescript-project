import { getPokemon } from "./getPokemonDetail";

interface Props {
  move: { name: string };
}
export const getMovesPokemon = async (name?: string) => {
  const { moves } = await getPokemon(name);
  const namesList = moves
    .filter((el: string, i: number) => i < 15)
    .map((el: Props) => el.move.name);

  return namesList;
};
