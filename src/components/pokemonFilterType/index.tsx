import { FunctionComponent, useState } from "react";
import { getTypePokemon } from "../../services/getTypePokemon";
import { useForm } from "react-hook-form";
import { Div, Input, inputError, P, Button } from "./styles";
import pokeball from "../../assets/pokeball.png";

interface TypeProps {
  setPokemons: any;
}

export const PokemonsFilterType: FunctionComponent<TypeProps> = ({
  setPokemons,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const onSubmit = (name?: any) => {
    const fetchDate = async () => {
      const typeName = name.name.toLowerCase();
      if (
        typeName !== "poison" &&
        typeName !== "fire" &&
        typeName !== "grass" &&
        typeName !== "flying" &&
        typeName !== "water" &&
        typeName !== "fighting" &&
        typeName !== "normal"
      ) {
        return setError(" invalid type");
      }
      const pokemonsType = await getTypePokemon(typeName);
      const pokemon: any = pokemonsType;

      setPokemons([...pokemon]);
      setError("");
    };
    fetchDate();
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Div>
      <div>
        <Input
          {...register("name", { required: true })}
          type="text"
          className={`${errors.name && inputError}`}
          onKeyDown={handleKeyDown}
          placeholder="Search Pokemons by Type..."
        />
        <P>{error}</P>
        {errors?.name?.type === "required" && <P>Type is Required</P>}
      </div>
      <Button onClick={() => handleSubmit(onSubmit)()} id="click">
        <img src={pokeball} alt="pokeboll" />
      </Button>
    </Div>
  );
};
