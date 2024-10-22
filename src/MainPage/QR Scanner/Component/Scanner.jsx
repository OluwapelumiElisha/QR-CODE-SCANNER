import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import {  useScanner } from "../hook/useScanner";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();
  return (
    <div className="h-screen bg-customColor overflow-auto">
      <div className="flex items-center justify-center pt-10">
        <div className="flex items-center justify-center w-60 h-60 rounded-lg border-2 border-orange-400 bg-gray-800">
          <QrScanner
            // delay={300}
            onError={handleError}
            onScan={handleScan}
          />
          
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <h3>Scan Result:</h3>
        {scanResult?.text ? (
          <p className="text-blue-800">{scanResult.text}</p>
        ) : (
          <p>No QR code detected yet</p>
        )}
      </div>
    </div>
    
  );
};

export default Scanner;
