import { useState, useEffect, FunctionComponent } from "react"
import { useParams } from "react-router"
import { getMovesPokemon } from "../../services/getMovesPokemon"
import { Section,Ul, Li } from "./styles"

export const PokemonsMoves:FunctionComponent = () => {
    const [pokemon, setPokemon] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const fetchDate = async () => {
            const result = await getMovesPokemon(name)
            setPokemon(result)
        }
        fetchDate()
    },[])

    return (
        <Section>
            <h2>Moves</h2>
            <Ul>
                {pokemon.map((moves: string, i) => {
                    return <Li key={i}>{moves}</Li>
                })}
            </Ul>
        </Section>
    )
}