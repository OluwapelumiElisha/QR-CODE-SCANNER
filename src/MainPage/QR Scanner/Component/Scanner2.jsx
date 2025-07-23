import React from "react";
import MT from "@/assets/taken.png";
import MARK from "@/assets/Check-Mark.png";
import NT from "@/assets/not-taken.png";
import CANCEL from "@/assets/Close.png";
import { useScanner } from "../hook/useScanner";
import { Link, useLocation } from "react-router-dom";
import Back from "@/assets/chevron_backward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"

const Scanner2 = () => {
  const location = useLocation()
  const scannerDetails = location?.state?.res
  const data = scannerDetails?.data?.qrCode
  return (
    <div>
 
      <div className="h-screen   bg-customColor">
        {/* <div className="h-screen   bg-customColor overflow-auto"> */}
      <Link to={"/Dashboard/History"}>
      <img src={Back} className="pt-0 ml-0 lg:ml-80 md:ml-40" alt="" />
      </Link>
        {/* QRNUMBER  */}
        <div className="flex items-center justify-center pt-10">
        {/* <h1 className='text-white'>Back</h1> */}
          <h1 className="text-3xl text-white font-bold">{data?.qrNumber}</h1>
        </div>
        {/* QRNUMBER  */}

        <div className="flex  justify-center mt-5">
          <p className="text-xl text-white font-pextralight lg:-ms-[34%] md:-ms-[34%] sm:-ms-[33%] -ml-[50%]">
            Scan History
          </p>
        </div>
        {/* FIRST BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[36%] md:-ms-[37%] sm:-ms-[37%] -ml-[55%]">
            Breakfast
          </p>
        </div>

        <div className="mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex  justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-customgray">
          <div className="flex items-center justify-between w-full ">
            <img className="w-6 h-6 ml-2" src={data?.scanHistory?.breakfast ? MT : NT} alt="MT Logo" />
            <p className="text-black text-xl font-bold">{data?.scanHistory?.breakfast ? "Meal Taken" : "Not Taken"}</p>
            <img className="w-6 h-6 mr-2" src={data?.scanHistory?.breakfast ? MARK : CANCEL} alt="Mark Logo" />
          </div>
        </div>
        {/* FIRST BOX  */}

        {/* SECOND BOX  */}
        <div className="flex  justify-center mt-5">
          <p className="text-md text-white font-pextralight lg:-ms-[38%] md:-ms-[39%] sm:-ms-[40%] -ml-[60%]">
            Lunch
          </p>
        </div>

        <div className="mt-2 ml-[15%] sm:ms-[27%] md:ml-[27%] lg:ml-[29.5%] flex justify-center w-[70%] lg:w-[40%] md:w-[50%] sm:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-customgray">
          <div className="flex items-center justify-between w-full ">
          <img className="w-6 h-6 ml-2" src={data?.scanHistory?.lunch ? MT : NT} alt="MT Logo" />
            <p className="text-black text-xl font-bold">{data?.scanHistory?.lunch ? "Meal Taken" : "Not Taken"}</p>
            <img className="w-6 h-6 mr-2" src={data?.scanHistory?.lunch ? MARK : CANCEL} alt="Mark Logo" />
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
          <img className="w-6 h-6 ml-2" src={data?.scanHistory?.dinner ? MT : NT} alt="MT Logo" />
            <p className="text-black text-xl font-bold">{data?.scanHistory?.dinner ? "Meal Taken" : "Not Taken"}</p>
            <img className="w-6 h-6 mr-2" src={data?.scanHistory?.dinner ? MARK : CANCEL} alt="Mark Logo" />
          </div>
        </div>
        {/* THRID BOX  */}
      </div>
    </div>
  );
};

export default Scanner2;
