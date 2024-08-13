import React from 'react'

const Loader = () => {
    return (
        <div className='h-5/6 w-full  flex justify-center items-center animate-spin'>
            <div className='h-16 w-1 bg-white rounded-full border-t-orange-500 animate-spin'></div>
        </div>
    )
}

export default Loader;