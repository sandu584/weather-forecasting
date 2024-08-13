import WeatherContext from '../contexts/WeatherContext';
import React, { useContext, useState, useEffect } from 'react';

const MainContent = () => {
    const { city } = useContext(WeatherContext);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=d65508a03c51496397765751240808&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log("Error while fetching : ", err));
    }, [city]);
    // console.log(data);


    if (data.error) return <h1 className='flex items-center justify-center h-4/5 w-full mt-20 text-4xl'>Oops! {data?.error?.message}</h1>

    return (
        <>
            <div className='flex items-center justify-center h-4/5 w-full mt-20'>
                <div className='w-2/4 h-full flex justify-center items-center'>
                    <div className='flex justify-center items-center flex-col bg-slate-500 rounded-md text-white p-10 pr-20 pl-20'>
                        <h1 className='text-5xl font-semibold font-sans'>{data?.location?.name}</h1>
                        <img
                            src={data?.current?.condition?.icon}
                            alt=""
                            className='mt-3'
                        />
                        <h1 className='text-6xl font-bold font-sans mt-3'>{data?.current?.temp_c}&deg;</h1>
                    </div>
                </div>
                <div className='w-2/4 h-full flex justify-center items-center flex-col'>
                    <div className='flex justify-center items-start flex-col bg-slate-500 rounded-md text-white p-6'>
                        <table className='text-2xl'>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th className='text-end'>UV :&nbsp;</th>
                                    <td className='text-start'>{data?.current?.uv}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Rain :&nbsp;</th>
                                    <td className='text-start'>{data?.current?.condition?.text}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Localtime :&nbsp;</th>
                                    <td className='text-start'>{new Date().toLocaleDateString({timeZone: 'IST'})}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Humidity :&nbsp;</th>
                                    <td className='text-start'>{data?.current?.humidity}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Wind speed/hr :&nbsp;</th>
                                    <td className='text-start'>{data?.current?.wind_kph}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Wind direction :&nbsp;</th>
                                    <td className='text-start'>{data?.current?.wind_dir}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Temparature feels :&nbsp;</th>
                                    <td className='text-start'>{data?.current?.feelslike_c}</td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent
