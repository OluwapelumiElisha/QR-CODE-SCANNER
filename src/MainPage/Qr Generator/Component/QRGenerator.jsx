import { Button } from "@/components/ui/button";
import React from "react";
import { useQRGenerator } from "../hook/useQRGenerator";
import plus from "@/assets/Plus.png";
const QRGenerator = () => {
  const { handleGenerateqrcode, loading, response } = useQRGenerator();
  return (
    <div className="bg-customColor h-screen overflow-auto">
      <div className="flex items-center justify-center pt-10">
        <div className="flex items-center justify-center w-60 h-60 rounded-lg border-2 border-orange-400 bg-gray-800">
          {response?.data?.qrCode?.qrCodeData ? (
            <img src={response?.data?.qrCode?.qrCodeData} alt="Code Generate" />
          ) : (
            <img src={plus} alt="Plus" />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center mt-12">
        <Button
          onClick={handleGenerateqrcode}
          disabled={loading}
          className=" text-white font-pbold text-xl mt-4 bg-customYellow w-120 px-6 py-3 flex justify-center items-center"
        >
          {loading ? "Generating..." : "Generate Code"}
        </Button>
      </div>

      <div className="flex items-center justify-center mt-12">
        <p className="text-white">{response?.data?.message}</p>
        {/* <h1>001</h1> */}
      </div>

      <div className="flex items-center justify-center mt-12">
        <h1 className="text-white text-2xl">
          {response?.data?.qrCode?.qrNumber}
        </h1>
      </div>

      {/* Add more content here to make the div scrollable */}
      <div className="flex items-center justify-center mt-12 mb-12">
        <p className="text-gray-900">More content to scroll...</p>
      </div>

      {/* <div className="flex items-center justify-center mt-12">
        <p className="text-white">More content to scroll...</p>
      </div> */}
    </div>
  );
};

export default QRGenerator;
