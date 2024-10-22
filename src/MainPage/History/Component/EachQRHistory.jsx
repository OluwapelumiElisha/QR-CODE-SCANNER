import React, { useEffect } from 'react'
import MT from "@/assets/taken.png";
import MARK from "@/assets/Check-Mark.png";
import NT from "@/assets/not-taken.png";
import CANCEL from "@/assets/Close.png";
import { useLocation } from 'react-router-dom';
const EachQRHistory = () => {
  // const searchParams = new URLSearchParams(location.search);
  //   const num = searchParams.get('number');
  const location = useLocation();
  const response = location?.state?.res || {};  
  const num = location?.state?.numberSent || "Unknown"; 

  return (
    <div>
      <div className="h-screen   bg-customColor">
        {/* QRNUMBER  */}
        <div className="flex items-center justify-center pt-10">
          <h1 className="text-3xl text-white font-bold">{num}</h1>
        </div>
        {/* QRNUMBER  */}

        <div className="flex  justify-center mt-5">
          <p className="text-xl text-white font-pextralight lg:-ms-[34%] md:-ms-[34%] sm:-ms-[33%] -ml-[50%]">Scan History</p>
        </div>
        <div>
          
        </div>
        {/* FIRST BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[36%] md:-ms-[37%] sm:-ms-[37%] -ml-[55%]">
            Breakfast
          </p>
        </div>

        <div className="mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex  justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-gray-800">
          <div className="flex items-center justify-between w-full ">
            <img className="w-7 h-7" src={response.data.mealStatus.breakfast ? MT : NT} alt="MT Logo" />
            <p className="text-black text-xl font-bold">{response.data.mealStatus.breakfast ? "Meal Taken" : "Not Taken"}</p>
            <img className="" src={response.data.mealStatus.breakfast ? MARK : CANCEL} alt="Mark Logo" />
          </div>
        </div>
        {/* FIRST BOX  */}

        {/* SECOND BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[38%] md:-ms-[39%] sm:-ms-[40%] -ml-[60%]">
            Lunch{" "}
          </p>
        </div>

        <div className="mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-gray-800">
          <div className="flex items-center justify-between w-full ">
          <img className="w-7 h-7" src={response.data.mealStatus.breakfast ? MT : NT} alt="MT Logo" />
            <p className="text-black text-xl font-bold">{response.data.mealStatus.breakfast ? "Meal Taken" : "Not Taken"}</p>
            <img className="" src={response.data.mealStatus.breakfast ? MARK : CANCEL} alt="Mark Logo" />
          </div>
        </div>

        {/* SECOND BOX  */}

        {/* THRID BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[38%] md:-ms-[38%] sm:-ms-[40%] -ml-[59%]">
            Dinner{" "}
          </p>
        </div>

        <div className="mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex  justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-gray-800">
          <div className="flex items-center justify-between w-full ">
          <img className="w-7 h-7" src={response.data.mealStatus.breakfast ? MT : NT} alt="MT Logo" />
            <p className="text-black text-xl font-bold">{response.data.mealStatus.breakfast ? "Meal Taken" : "Not Taken"}</p>
            <img className="" src={response.data.mealStatus.breakfast ? MARK : CANCEL} alt="Mark Logo" />
          </div>
        </div>
        {/* THRID BOX  */}
      </div>
    </div>
  )
}

export default EachQRHistory
