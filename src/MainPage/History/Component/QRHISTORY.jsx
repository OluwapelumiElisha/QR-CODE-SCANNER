import React from "react";
import search from "@/assets/search.png";
import { useQrHistory } from "../hook/useQrHistory";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const QRHISTORY = () => {
  const {
    response,
    handleCheckEachQrCode,
    handleSearchWord,
    searchTerm,
    isloading,
  } = useQrHistory();
  const storedArray = JSON.parse(localStorage.getItem("QrCodeHistory"));
  const navigate = useNavigate();

  // if (response === null) {
  //   return (
  //     <div className="flex justify-center">
  //       <h1 className="text-white">No Qr Code have been Generate...</h1>
  //     </div>
  //   );
  // }
  const filteredResponse = storedArray?.filter((data) =>
    data.qrNumber.includes(searchTerm)
  );

  const skeletonArray = new Array(10).fill(null);
  // const clickTimeoutRef = useRef(null); // Shared reference

  const clickTimeoutRef = useRef(null);
  const clickedRef = useRef(false); // NEW: track double click cancel flag

  const handleClick = (qrNumber) => {
    clickedRef.current = false; // assume it's a single click first

    clickTimeoutRef.current = setTimeout(() => {
      if (!clickedRef.current) {
        handleCheckEachQrCode(qrNumber);
      }
    }, 250); // small delay
  };

  const handleDoubleClick = (data) => {
    clearTimeout(clickTimeoutRef.current);
    clickedRef.current = true; // block single click
    const clonedRes = JSON.parse(JSON.stringify(data)); // Deep clone of the `res` object

    navigate(`/Dashboard/Template/?.image=${data}`, {
        state: { res: clonedRes },
    }); // route to double-click page
  };

  return (
    <div>
      <div className="bg-customColor h-screen overflow-auto">
        {/* D word Search  */}
        <p className="pt-10 text-white ml-12 font-semibold italic">Search</p>
        {/* D word Search  */}

        {/* Search div, both input and img tag */}
        <div className="flex">
          <input
            className="rounded-lg border-2 ml-12 w-[50%] bg-transparent text-white p-2"
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={handleSearchWord}
          />
          <img className="-ms-8 w-5 h-5 mt-3" src={search} alt="" />
        </div>

        {/* Search div, both input and img tag */}

        {/* Looping through an array where to display each qr images */}
        {/* <div className="flex flex-wrap justify-center gap-6 mt-5">
          {filteredResponse?.map((data, i) => (
            <div
              key={i}
              onClick={() => handleCheckEachQrCode(data.qrNumber)}
              className="p-4 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/8 flex flex-col items-center border-2 border-white rounded-xl shadow-lg"
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
        </div> */}
        {/* <div className="flex flex-wrap justify-center gap-6 mt-5">
          {isloading ? (
            skeletonArray.map((_, i) => (
              <div
                key={i}
                className="p-4 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/8 flex flex-col items-center border-2 border-gray-600 rounded-xl shadow-lg animate-pulse"
              >
                <div className="bg-gray-700 rounded-xl p-0 flex flex-col items-center w-full">
                  <div className="max-w-full h-32 border-4 border-white w-72 mb-4"></div>
                  <div className="h-10 bg-gray-600 w-full rounded-lg"></div>
                </div>
              </div>
            ))
          ) : filteredResponse?.length > 0 ? (
            filteredResponse?.map((data, i) => (
              <div
                key={i}
                onClick={() => handleCheckEachQrCode(data.qrNumber)}
                className="p-4 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/8 flex flex-col items-center border-2 border-white rounded-xl shadow-lg cursor-pointer"
                onDoubleClick={() => alert('')}
              >
                <div className="bg-transparent rounded-xl p-0 flex flex-col items-center">
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
            ))
          ) : (
            <div className="text-white text-xl font-medium mt-10">
              No QR codes found.
            </div>
          )}
        </div> */}
        <div className="flex flex-wrap justify-center gap-6 mt-5">
          {isloading ? (
            skeletonArray.map((_, i) => (
              <div
                key={i}
                className="p-4 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/8 flex flex-col items-center border-2 border-gray-600 rounded-xl shadow-lg animate-pulse z-0"
              >
                <div className="bg-gray-700 rounded-xl p-0 flex flex-col items-center w-full">
                  <div className="max-w-full h-32 border-4 border-white w-72 mb-4"></div>
                  <div className="h-10 bg-gray-600 w-full rounded-lg"></div>
                </div>
              </div>
            ))
          ) : filteredResponse?.length > 0 ? (
            filteredResponse.map((data, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleClick(data.qrNumber)}
                  onDoubleClick={() => handleDoubleClick(data)}
                  className="p-4 w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/8 flex flex-col items-center border-2 border-white rounded-xl shadow-lg cursor-pointer"
                >
                  <div className="bg-transparent rounded-xl p-0 flex flex-col items-center">
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
              );
            })
          ) : (
            <div className="text-white text-xl font-medium mt-10">
              No QR codes found.
            </div>
          )}
        </div>

        {/* Looping through an array where to display each qr images */}

        {/* Loading div  */}
        <div className="flex items-center justify-center mt-8 mb-12">
          <p className="opacity-0 mt-12 text-white text-xl">Loading...</p>
        </div>
        {/* Loading div  */}
      </div>
    </div>
  );
};

export default QRHISTORY;
