import React, { useContext, useEffect } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const ThemeToggle = () => {
    const { state, dispatch } = useContext(WeatherContext)
    const { theme } = state;
    useEffect(() => {
        const root = window.document.documentElement;
        theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
    }, [theme])
    return (
        <div className="flex justify-end mb-8 mr-8">
            <label className="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === "dark"}
                    onChange={() =>
                        dispatch({
                            type: "SET_THEME",
                            payload: theme === "dark" ? "light" : "dark",
                        })
                    }
                    aria-label="Toggle dark mode"
                />
                <div
                    className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full relative transition-colors
                     after:content-[''] after:absolute after:top-1 after:left-1 after:w-3 after:h-3 
                     after:bg-white after:rounded-full after:transition-transform 
                     peer-checked:after:translate-x-5 after:shadow after:duration-300"
                ></div>
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-100 font-bold">
                    {theme === "dark" ? " Dark" : " Light"}
                </span>
            </label>
        </div>
    )
}

export default ThemeToggle