import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PokemonsList } from "../components/pokemonsList"
import { PokemonDetails } from "../components/pokemonDetails"

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PokemonsList />} />
                <Route  path='/pokemon/:name' element={<PokemonDetails/>} />
            </Routes>
        </BrowserRouter>
    )
}
