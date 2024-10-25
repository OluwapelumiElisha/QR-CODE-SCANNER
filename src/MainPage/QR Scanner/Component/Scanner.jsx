import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import { useScanner } from "../hook/useScanner";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();
  
  // State to manage camera facing mode
  const [facingMode, setFacingMode] = useState('environment'); // Start with the back camera

  // Function to toggle camera facing mode
  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
  };

  return (
    <div className="h-screen bg-customColor overflow-auto">
      <div className="flex items-center justify-center pt-40">
        <div className="flex items-center justify-center w-60 h-60 rounded-lg border-2 border-orange-400 bg-gray-800">
          <QrScanner
            facingMode={{ exact: facingMode }} // Use state to set facing mode
            onError={handleError}
            onScan={handleScan}
           
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <h3 className="text-white text-xl">Scan Result:</h3>
        {scanResult?.text ? (
          <p className="text-green-500">{scanResult.text}</p>
        ) : (
          <p className="text-white text-xl">No QR code detected yet</p>
        )}
      </div>
      <div className="flex items-center justify-center pt-10">
        <button 
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={toggleCamera}
        >
          Switch Camera
        </button>
      </div>
    </div>
  );
};

export default Scanner;
