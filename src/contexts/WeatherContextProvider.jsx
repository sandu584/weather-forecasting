import React, { useState } from 'react'
import WeatherContext from './WeatherContext'

const WeatherContextProvider = ({children}) => {
    const [city, setCity] = useState("London");
    return (
        <WeatherContext.Provider value={{city, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;