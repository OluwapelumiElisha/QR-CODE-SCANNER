import React from 'react'
import search from "@/assets/search.png";
import { useQrHistory } from '@/MainPage/History/hook/useQrHistory';
const codeSettingsPage = () => {
  const { response } = useQrHistory()
  return (
    <div className='bg-customColor h-screen'>
       {/* D word Search  */}
       <p className="pt-10 text-white ml-12 font-extralight italic">Search</p>
        {/* D word Search  */}

        {/* Search div, both input and img tag */}
        <div className="flex">
          <input
            className="rounded-lg border-2 ml-12 w-[50%] bg-transparent"
            placeholder="Search"
            type="text"
          />
          <img className="-ms-8 w-5 h-5 mt-1" src={search} alt="" />
        </div>
        {/* Search div, both input and img tag */}
        <div className='flex justify-center'>
        <div className="mt-2 -ml-[15%] sm:ms-[27%] md:-ml-[27%] lg:ml-[29.5%] flex  justify-center w-[80%] lg:w-[40%] md:w-[70%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-gray-800">
          </div>
        </div>
        {/* <h1>
        {response?.map((data, i) => (
          <div>
            <h1>{data.qrNumber}</h1>
          </div>
        ))}
        </h1> */}

    </div>
  )
}

export default codeSettingsPage
