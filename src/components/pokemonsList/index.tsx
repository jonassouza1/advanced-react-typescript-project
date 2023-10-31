import { useContext, useEffect, useState } from "react"
import { getListPokemons } from "../../services/getListPokemons"
import { Link } from "react-router-dom";
import { ThemeTogglerButton } from "../theme-toggler-button";
import { ThemeContext } from "../../contexts";
import { Main, Nav, Ul, Li, Img, Button,Footer } from "./styles"
import { PokemonsFilterType } from "../pokemonFilterType";


interface Props {
    name: string;
    sprites: { other: { dream_world: { front_default: string } } }
    setPokemons: React.Dispatch<React.SetStateAction<Props[]>>
}

export const PokemonsList = ({ $themes }: any) => {
    const [pokemons, setPokemons] = useState<Props[]>([])
    const [count, setCount] = useState<number>(10)
    const { theme } = useContext<any>(ThemeContext)
    useEffect(() => {
        const fetchDate = async () => {
            const listPokemons = await getListPokemons(count)

            setPokemons(listPokemons)
        }
        fetchDate()
    }, [count])


    return (
        <Main $themes={theme}>
            <Nav>
                <PokemonsFilterType setPokemons={setPokemons} />
                <ThemeTogglerButton />
            </Nav>

            <Ul >
                {pokemons.map((pokemon, i) => {
                    return (
                        <Li key={i} ><h1>{pokemon.name}</h1>
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <Img src={pokemon.sprites.other.dream_world.front_default} alt='List the Pokemons' />
                            </Link>
                        </Li>
                    )

                })}
            </Ul>
            <Footer>
                <h2>Load More</h2>
                <Button onClick={() => { setCount(count => count + 10) }}><img src={theme.btnImg}/></Button>
            </Footer>
        </Main>
    )
}