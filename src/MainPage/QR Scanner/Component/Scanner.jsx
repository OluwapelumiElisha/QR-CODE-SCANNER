import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import {  useScanner } from "../hook/useScanner";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();
  return (
    <div className="h-screen bg-customColor overflow-auto">
      <div className="flex items-center justify-center pt-40">
        <div className="flex items-center justify-center w-80 h-80 rounded-lg border-2 border-orange-400 bg-gray-800">
          <QrScanner
            // delay={300}
            facingMode={{ exact: 'environment' }} 
            onError={handleError}
            onScan={handleScan}
          />
          
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <h3 className="text-white text-xl">Scan Result: &nbsp; </h3>
        {scanResult?.text ? (
          <p className="text-green-500">{scanResult.text}</p>
        ) : (
          <p className="text-white text-xl">No QR code detected yet</p>
        )}
      </div>
    </div>
    
  );
};

export default Scanner;
