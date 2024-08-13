import React, { useContext, useState } from 'react'
import WeatherContext from '../contexts/WeatherContext';
import { TbCloudSearch } from "react-icons/tb";
// import useWeatherData from '../hooks/useWeatherData';

const Search = () => {
    const [searchCity, setSearchCity] = useState("");

    const { setCity } = useContext(WeatherContext);

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("HI");
        setCity(searchCity);
        setSearchCity("")
    }


    return (
        <div className='w-full h-8 flex flex-col mt-6'>
            <form action="" className='flex justify-center items-center' onSubmit={submitHandler}>
                <input
                autoFocus="true"
                    type="text"
                    name="city"
                    id="inputCity"
                    placeholder='Search Your city...'
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className='w-3/5 rounded-l-sm font-semibold bg-gray-300 text-black p-2 text-center capitalize text-xl border-x-slate-900'
                />
                <button
                    type="submit"
                    className='bg-slate-500 h-full w-12 flex justify-center items-center text-3xl rounded-r-sm'
                >
                    <TbCloudSearch />
                </button>
            </form>
        </div>
    )
}

export default Search;