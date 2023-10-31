import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { getPokemon } from "../../services/getPokemonDetail"
import { PokemonAbilitys } from "../pokemonAbilitys"
import { PokemonsMoves } from "../pokemonMoves"
import { PokemonType } from "../pokemonType"
import { ThemeContext } from "../../contexts"
import { Section, Nav, Img } from "./styles"
import { ThemeTogglerButton } from "../theme-toggler-button"
import { Link } from "react-router-dom"
import home from "../../assets/home.gif"
interface Dream {
    front_default: string
}

interface Sprites {
    other: { dream_world: Dream }
}

interface Props {
    sprites: Sprites;
    name: string;
}
export const PokemonDetails = ({ $themes }: any) => {
    const [pokemon, setPokemon] = useState<Props>({ sprites: { other: { dream_world: { front_default: '' } } }, name: '' })
    const { name } = useParams()
    const { theme }: any = useContext(ThemeContext)

    useEffect(() => {
        const fetchDate = async () => {
            const pokemons = await getPokemon(name)

            setPokemon(pokemons)

        }
        fetchDate()
    }, [])

    return (

        <Section $themes={theme}>
            <Nav>
                <Link  to="/"><Img src={home}/></Link>  
                <ThemeTogglerButton />
            </Nav>
            <img src={pokemon.sprites.other.dream_world.front_default} alt='List the Pokemons' />
            <h1>{pokemon.name}</h1>
            <PokemonsMoves />
            <PokemonAbilitys />
            <PokemonType getPokemon={getPokemon} />

        </Section>

    )
}
