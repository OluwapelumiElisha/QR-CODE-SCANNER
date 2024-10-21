import React from "react";
import search from "@/assets/search.png";
import { useQrHistory } from "../hook/useQrHistory";
const QRHISTORY = () => {
  const {  response, handleCheckEachQrCode } = useQrHistory();

  if (!response) {
    return (
      <div className="flex justify-center">
        <h1 className="text-white">No Qr Code have been Generate...</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-black h-screen overflow-auto">
        <p className="pt-10 text-white ml-12 font-extralight italic">Search</p>
        <div className="flex">
          <input
            className="rounded-lg border-2 ml-12 w-[50%] bg-transparent"
            placeholder="Search "
            type="text"
          />
          <img className="-ms-8 w-5 h-5 mt-1" src={search} alt="" />
        </div>
        <button  className="text-white"></button>
        <div className="flex flex-wrap justify-center gap-6">
          {response?.map((data, i) => (
            <div
              key={i}
              onClick={() => handleCheckEachQrCode(data.qrNumber)}
              className="p-3 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/8 flex flex-col items-center border-2 border-white rounded-xl shadow-lg"
            >
              <div className="bg-transparent rounded-xl p-0 flex flex-col items-center ">
                <img
                  src={data.qrCodeData}
                  alt={`QR Code ${i}`}
                  className="max-w-full h-auto border-4 border-white w-72 shadow-md"
                />
                <p className="text-white mt-2 text-4xl font-bold bg-gray-800 w-full h-full text-center flex items-center justify-center rounded-lg">
                  {data.qrNumber}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 mb-12">
          <p className=" mt-12 text-white text-xl">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default QRHISTORY;
