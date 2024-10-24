import React, { useState } from "react";
import search from "@/assets/search.png";
import { useQrHistory } from "@/MainPage/History/hook/useQrHistory";
import block from "@/assets/block.png";
import unblock from "@/assets/unblock.png";
import deleteCode from "@/assets/Delete.png";
import { useCodeSettings } from "../hook/useCodeSettings";
import { Button } from "@/components/ui/button";

const codeSettingsPage = () => {
  
  const { response } = useQrHistory();
  const { handlePopUpHistory, handleBlockQrCode, handleUnblockQrCode, handleDeleteQrCode, isPopUpVisible, handleClosePopUp, selectedQrNumber} = useCodeSettings();
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
      <div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {response?.map((data, i) => (
          <div key={i} className="mt-2 -ml-[5%] sm:-ms-[7%] md:-ml-[2%] lg:ml-[.5%] flex justify-center w-[90%] lg:w-[90%] md:w-[90%] sm:w-[80%] h-10 rounded-lg border-2 border-gray-500 bg-gray-800">
            <div
              onClick={() => handlePopUpHistory(data.qrNumber)}
              className="flex justify-between w-full cursor-pointer"
            >
              <div className="pt-0.5">
                <h1 className="ml-4 text-white font-bold text-2xl">{data.qrNumber}</h1>
              </div>
              <div className="flex gap-2">
                <img
                  onClick={(event) => {
                    event.stopPropagation();
                    handleBlockQrCode();
                  }}
                  className="w-8 h-8 mt-0.5"
                  src={block}
                  alt="Block QR Code"
                />
                <img
                  onClick={(event) => {
                    event.stopPropagation();
                    handleUnblockQrCode();
                  }}
                  className="w-8 h-8 mt-0.5"
                  src={unblock}
                  alt="Unblock QR Code"
                />
                <img
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteQrCode();
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-bold">QR Code Details</h2>
            <p className="mt-2">QR Code Number: {selectedQrNumber}</p>
            <Button
              onClick={handleClosePopUp}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </Button>
          </div>
        </div>
      )}
      {/* div Pop Up  */}
    </div>

      <div className="flex items-center justify-center mt-12 mb-12">
        <p className=" mt-12 text-white text-xl">Loading...</p>
      </div>
     
    </div>
  );
};

export default codeSettingsPage;
