import { url } from "../variables/variable"

export const getPokemon = async (name?:string) => {
    const resolve = await fetch(`${url}pokemon/${name}`)
    const result = await resolve.json()
    return result
    
}

