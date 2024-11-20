import React, { useState } from "react";
import search from "@/assets/search.png";
import { useQrHistory } from "@/MainPage/History/hook/useQrHistory";
import block from "@/assets/block.png";
import unblock from "@/assets/unblock.png";
import deleteCode from "@/assets/Delete.png";
import { useCodeSettings } from "../hook/useCodeSettings";
import { Button } from "@/components/ui/button";
import MT from "@/assets/taken.png";
import MARK from "@/assets/Check-Mark.png";
import NT from "@/assets/not-taken.png";
import CANCEL from "@/assets/Close.png";
import load from "@/assets/progress_activity_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import { useCurrentUser } from "@/Shared/hook/useCurrentUser";

const codeSettingsPage = () => {
  // const { response, isloading } = useQrHistory();
  const storedArray = JSON.parse(localStorage.getItem('QrCodeHistory'));
  const {handleLogout} = useCurrentUser()
  const {
    response2,
    handlePopUpHistory,
    handleBlockQrCode,
    handleUnblockQrCode,
    handleDeleteQrCode,
    isPopUpVisible,
    handleClosePopUp,
    selectedQrNumber,
    handleSearchChange,
    searchTerm,
    loading,
    loadingUnblock,
    loadingBlock,
    loadingDelete
  } = useCodeSettings();

  const filteredResponse = storedArray?.filter((data) =>
    data.qrNumber.includes(searchTerm)
  );

  // if (isloading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-customColor">
  //       <div className="relative flex space-x-2">
  //         <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-100"></div>
  //         <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></div>
  //         <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="bg-customColor h-screen overflow-auto">
      {/* <p className="pt-10 text-white ml-16 font-extralight itali6">Search</p> */}
      <div className="flex w-full justify-between ">
        <div className="flex">
        <input
          className="rounded-lg border-2 lg:ml-16 md:ml-9 sm:ml-10 ml-4 w-[120%] bg-transparent text-white mt-10"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img className="-ms-8 w-5 h-5 mt-11" src={search} alt="Search icon" />
      </div>
      <Button onClick={handleLogout} className="mr-5 bg-red-600 mt-10">Log Out</Button>
      </div>
      

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {filteredResponse?.map((data, i) => (
          <div
            key={i}
            className="mt-2 -ml-[5%] sm:-ms-[7%] md:-ml-[2%] lg:ml-[.5%] flex justify-center w-[90%] lg:w-[90%] md:w-[90%] sm:w-[80%] h-10 rounded-lg border-2 border-gray-500 bg-gray-800"
          >
            <div
              onClick={() => handlePopUpHistory(data.qrNumber)}
              className="flex justify-between w-full cursor-pointer"
            >
              <div className="pt-0.5">
                <h1 className="ml-4 text-white font-bold text-2xl">
                  {loading == data.qrNumber ? 
                    <img
                      src={load} // Ensure this is the correct path to your loading icon
                      alt="Loading"
                      className="w-8 h-8 inline-block animate-spin -mt-2 "
                    />
                   : data.qrNumber}
                </h1>
              </div>
              <div className="flex gap-2">
                <img
                  onClick={(event) => {
                    event.stopPropagation();
                    handleBlockQrCode(data.qrNumber);
                  }}
                  className={`w-8 h-8 mt-0.5 ${
                    loadingBlock == data.qrNumber ? "animate-spin" : ""
                  }`}
                  src={loadingBlock == data.qrNumber ? load : block}
                  alt="Block QR Code"
                />
                <img
                  onClick={(event) => {
                    event.stopPropagation();
                    handleUnblockQrCode(data.qrNumber);
                  }}
                  className={`w-8 h-8 mt-0.5 ${
                    loadingUnblock == data.qrNumber ? "animate-spin" : ""
                  }`}
                  src={loadingUnblock == data.qrNumber ? load : unblock}
                  alt="Unblock QR Code"
                />
                <img
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteQrCode(data.qrNumber);
                  }}
                  // className="w-8 h-8 mt-0.5"
                  // src={deleteCode}
                  className={`w-8 h-8 mt-0.5 ${
                    loadingDelete == data.qrNumber ? "animate-spin" : ""
                  }`}
                  src={loadingDelete == data.qrNumber ? load : deleteCode}
                  alt="Delete QR Code"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isPopUpVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto pt-96">
          <div className="bg-customColor rounded-lg p-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
            <div className="border-2 border-white p-8 rounded-2xl space-y-6 overflow-auto">
              {response2?.history?.map((history, i) => (
                <div key={i} className="space-y-4">
                  <h1 className="text-white text-xl font-bold">
                    {history?.qrNumber}
                  </h1>
                  <p className="text-gray-300">{history?.date}</p>

                  {["breakfast", "lunch", "dinner"].map((meal) => (
                    <div key={meal}>
                      <div className="flex justify-center mt-5">
                        <p className="text-md text-white font-extralight -ml-[50%] lg:-ml-[40%]">
                          {meal.charAt(0).toUpperCase() + meal.slice(1)}
                        </p>
                      </div>

                      <div className="mt-2 flex justify-center w-full lg:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-gray-800 mx-auto">
                        <div className="flex items-center justify-between w-full px-2">
                          <img
                            className="w-7 h-7"
                            src={history?.scanHistory?.[meal] ? MT : NT}
                            alt={`${meal} icon`}
                          />
                          <p className="text-white lg:text-xl font-bold md:text-xl sm:text-xl text-xs">
                            {history?.scanHistory?.[meal]
                              ? "Meal Taken"
                              : "Not Taken"}
                          </p>
                          <img
                            className="w-7 h-7"
                            src={history?.scanHistory?.[meal] ? MARK : CANCEL}
                            alt="status icon"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <Button
                onClick={handleClosePopUp}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center mt-12 mb-12">
        <p className="opacity-0 mt-8 text-white text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default codeSettingsPage;
