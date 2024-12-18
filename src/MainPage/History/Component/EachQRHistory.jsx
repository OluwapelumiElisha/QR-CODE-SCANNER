import React, { useEffect } from "react";
import MT from "@/assets/taken.png";
import MARK from "@/assets/Check-Mark.png";
import NT from "@/assets/not-taken.png";
import CANCEL from "@/assets/Close.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Back from "@/assets/chevron_backward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
const EachQRHistory = () => {
  const location = useLocation();
  const response = location?.state?.res || {};
  const searchParams = new URLSearchParams(location.search);
  const num = searchParams.get("number");


  return (
    <div>
      
      <div className="h-screen   bg-customColor overflow-auto">
      <Link to={"/Dashboard/History"}>
      <img src={Back} className="pt-0 ml-0 lg:ml-80 md:ml-40" alt="" />
      </Link>
    
        {/* QRNUMBER  */}
        <div className="flex items-center justify-center ">
          <h1 className="text-3xl text-white font-bold">{num}</h1>
        </div>
        {/* QRNUMBER  */}

        <div className="flex  justify-center mt-5">
          <p className="text-xl text-white font-pextralight lg:-ms-[34%] md:-ms-[34%] sm:-ms-[33%] -ml-[50%]">
            Scan History
          </p>
        </div>
        <div></div>
        {/* FIRST BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[36%] md:-ms-[37%] sm:-ms-[37%] -ml-[55%]">
            Breakfast
          </p>
        </div>

        <div className="mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex  justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-customgray">
          <div className="flex items-center justify-between w-full ">
            <img
              className="w-6 h-6 ml-2"
              src={response.data.mealStatus.breakfast ? MT : NT}
              alt="Meal Icon"
            />
            <p className="text-black text-xl font-bold">
              {response.data.mealStatus.breakfast ? "Meal Taken" : "Not Taken"}
            </p>
            <img
              className="w-6 h-6 mr-2"
              src={response.data.mealStatus.breakfast ? MARK : CANCEL}
              alt="Status Icon"
            />
          </div>
          {/* <p>{
          console.log(response.data.mealStatus.dinner)
           }</p> */}
        </div>
        {/* FIRST BOX  */}

        {/* SECOND BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[38%] md:-ms-[39%] sm:-ms-[40%] -ml-[60%]">
            Lunch
          </p>
        </div>

        <div className="bg-customgray mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400">
          <div className="flex items-center justify-between w-full ">
            <img
              className="w-6 h-6 ml-2"
              src={response.data.mealStatus.lunch ? MT : NT}
              alt="MT Logo"
            />
            <p className="text-black text-xl font-bold">
              {response.data.mealStatus.lunch ? "Meal Taken" : "Not Taken"}
            </p>
            <img
              className="w-6 h-6 mr-2"
              src={response.data.mealStatus.lunch ? MARK : CANCEL}
              alt="Mark Logo"
            />
          </div>
        </div>

        {/* SECOND BOX  */}

        {/* THRID BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[38%] md:-ms-[38%] sm:-ms-[40%] -ml-[59%]">
            Dinner
          </p>
        </div>

        <div className="mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex  justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-customgray">
          <div className="flex items-center justify-between w-full ">
            <img
              className="w-6 h-6 ml-2"
              src={response.data.mealStatus.dinner ? MT : NT}
              alt="MT Logo"
            />
            <p className="text-black text-xl font-bold">
              {response.data.mealStatus.dinner ? "Meal Taken" : "Not Taken"}
            </p>
            <img
              className="w-6 h-6 mr-2"
              src={response.data.mealStatus.dinner ? MARK : CANCEL}
              alt="Mark Logo"
            />
          </div>
        </div>
        {/* THRID BOX  */}

        <div className="flex items-center justify-center mt-8 mb-12">
        <p className="opacity-0 mt-8 text-white text-sm">Loading...</p>
      </div>
      </div>

      
   
    </div>
  );
};

export default EachQRHistory;
