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

const codeSettingsPage = () => {
  const { response } = useQrHistory();

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
  } = useCodeSettings();
  const filteredResponse = response?.filter((data) =>
    data.qrNumber.includes(searchTerm)
  );
  return (
    <div className="bg-customColor h-screen overflow-auto">
      {/* D word Search  */}
      <p className="pt-10 text-white ml-12 font-extralight italic">Search</p>
      {/* D word Search  */}
      
      {/* Search div, both input and img tag */}
      <div className="flex">
        <input
          className="rounded-lg border-2 ml-12 w-[50%] bg-transparent text-white"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img className="-ms-8 w-5 h-5 mt-1" src={search} alt="" />
      </div>
      {/* Search div, both input and img tag */}
      <div>
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
                    {data.qrNumber}
                  </h1>
                </div>
                <div className="flex gap-2">
                  <img
                    onClick={(event) => {
                      event.stopPropagation();
                      handleBlockQrCode(data.qrNumber);
                    }}
                    className="w-8 h-8 mt-0.5"
                    src={block}
                    alt="Block QR Code"
                  />
                  <img
                    onClick={(event) => {
                      event.stopPropagation();
                      handleUnblockQrCode(data.qrNumber);
                    }}
                    className="w-8 h-8 mt-0.5"
                    src={unblock}
                    alt="Unblock QR Code"
                  />
                  <img
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteQrCode(data.qrNumber);
                    }}
                    className="w-8 h-8 mt-0.5"
                    src={deleteCode}
                    alt="Delete QR Code"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* div Pop Up  */}
        {isPopUpVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto pt-96">
            <div className="bg-customColor rounded-lg p-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
              <div className="border-2 border-white p-8 rounded-2xl space-y-6 overflow-auto">
                {response2?.history?.map((history, i) => (
                  <div key={i} className="space-y-4 ">
                    <h1 className="text-white text-xl font-bold">
                      {history?.qrNumber}
                    </h1>
                    <p className="text-gray-300">{history?.date}</p>

                    {/* Meal Boxes */}
                    {["breakfast", "lunch", "dinner"].map((meal, index) => (
                      <div key={meal}>
                        <div className="flex justify-center mt-5">
                          <p
                            className={`text-md text-white font-extralight -ml-[50%] lg:-ml-[40%]`}
                          >
                            {meal.charAt(0).toUpperCase() + meal.slice(1)}
                          </p>
                        </div>

                        <div className="mt-2 flex justify-center w-[100%] lg:w-[40%] h-10 rounded-lg border-2 border-orange-400 bg-gray-800 mx-auto">
                          <div className="flex items-center justify-between w-full px-4">
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

        {/* div Pop Up  */}
      </div>

      <div className="flex items-center justify-center mt-12 mb-12">
        <p className=" mt-12 text-white text-xl"></p>
      </div>
    </div>
  );
};

export default codeSettingsPage;
