import React from 'react'
import logo from "/src/assets/20240901_220956.png"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ContEmail = () => {
    
    return (

        <div className='bg-customColor h-screen flex flex-col justify-center items-center'>
            {/* Logo Section */}
            <div className='flex justify-center items-center'>
                <img className='w-60 -pt-2' src={logo} alt="Logo" />
            </div>

            {/* Text Section */}
            <h3 className='text-white lg:text-2xl md:text-2xl text-2xl font-pregular text-center'>
                Christ Authority Bible Church
            </h3>
            <p className='text-center text-white pt-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, earum?
            </p>

            {/* Button Section */}
            <div className='flex justify-center items-center w-full'>
                <Link to={'Login'}><Button  className='hover:bg-slate-100 text-black mt-9 bg-customYellow w-auto px-6 py-3 flex justify-center items-center'>Continue With Email </Button>
                </Link>
                
            </div>
        </div>




    )
}

export default ContEmail
