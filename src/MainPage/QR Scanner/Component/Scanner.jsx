import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { useScanner } from "../hook/useScanner";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();


  return (
    <div className="h-screen bg-customColor overflow-auto">
      <div className="flex items-center justify-center pt-20">
        <div className="flex items-center justify-center w-90 h-90 rounded-lg border-2 border-orange-400 bg-gray-800">
        <QrReader
          delay={100}
          style={{ width: '100%', height: '100%' }}
          onError={handleError}
          onScan={handleScan}
          constraints={{
            audio: false,
            video: { facingMode: "environment" }}}
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <h3 className="text-white text-xl">Scan Result: &nbsp;</h3>
        {scanResult?.text ? (
          <p className="text-green-500">{scanResult.text}</p>
        ) : (
          <p className="text-white text-xl">No QR code detected yet</p>
        )}
      </div>
      <div className="flex items-center justify-center mt-12 mb-12">
        <p className="opacity-0 mt-8 text-white text-sm">Loading...</p>
      </div>
    
    </div>
  );
};

export default Scanner;
