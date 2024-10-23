import React from "react";
import search from "@/assets/search.png";
import { useQrHistory } from "@/MainPage/History/hook/useQrHistory";
const codeSettingsPage = () => {
  const { response } = useQrHistory();
  return (
    <div className="bg-customColor h-screen overflow-auto">
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
      <div className='flex  flex-wrap justify-center gap-4 mt-4'>
           {
            response?.map((data, i) => (
           <div className="mt-2 -ml-[5%] sm:-ms-[7%] md:-ml-[22%] lg:ml-[.5%] flex  justify-center w-[90%] lg:w-[90%] md:w-[70%] sm:w-[80%] h-10 rounded-lg border-2 border-gray-500 bg-gray-800">
               <div className='flex justify-between w-full'>
              <div className='pt-0.5'>
                <h1 className="ml-4 text-white font-bold text-2xl">{data.qrNumber}</h1>
              </div>
              <div className='pt-1.5'>
                  <h1 className='bg-red-500'>jhhjhj</h1>
              </div>
          </div>
           </div>
            ))}
          
        </div>
      
        <div className="flex items-center justify-center mt-12 mb-12">
          <p className=" mt-12 text-white text-xl">Loading...</p>
        </div>
      {/* <h1>
        {response?.map((data, i) => (
          <div>
            <h1>{data.qrNumber}</h1>
          </div>
        ))}
        </h1> */}

    </div>
  );
};

export default codeSettingsPage;
