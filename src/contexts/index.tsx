import { FunctionComponent, createContext, useState, useEffect } from "react";
import dark from "../assets/dark.png"
import light from "../assets/light.jpg"
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"
import buttonDark from "../assets/buttonDark.png"
import buttonLight from "../assets/buttonLight.png"
export const themes = {
    light: {
        backgroundImage: `url(${light})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        color: '#000000',
        img: `${sun}`,
        btnImg: `${buttonLight}`
    },
    dark: {
        backgroundImage: `url(${dark})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        color: '#eeeeee',
        img: `${moon}`,
        btnImg: `${buttonDark}`
    }
}

export const ThemeContext = createContext({})

interface ThemesProps {
    children: React.ReactNode;
}


export const ThemeProvider: FunctionComponent<ThemesProps> = ({ children }) => {
    const date: any = localStorage.getItem('theme')
    const storage = JSON.parse(date)
    const [theme, setTheme] = useState(themes.light)

    useEffect((): any => {
        if (storage) {
            setTheme(storage)
        } else { return themes.light }

    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}