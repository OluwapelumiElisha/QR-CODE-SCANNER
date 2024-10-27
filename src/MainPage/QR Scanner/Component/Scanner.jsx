import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import { useScanner } from "../hook/useScanner";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();

  // State to manage camera facing mode
  const [facingMode, setFacingMode] = useState('environment'); // Start with back camera
  const [key, setKey] = useState(0); // Force re-render on toggle

  // Function to toggle camera facing mode
  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
    setKey(prevKey => prevKey + 1); // Increment key to force component update
  };

  return (
    <div className="h-screen bg-customColor overflow-auto">
      <div className="flex items-center justify-center pt-10">
        <div className="flex items-center justify-center w-60 h-60 rounded-lg border-2 border-orange-400 bg-gray-800">
          <QrScanner
            key={key} // Re-render on facing mode change
            facingMode={facingMode}
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
