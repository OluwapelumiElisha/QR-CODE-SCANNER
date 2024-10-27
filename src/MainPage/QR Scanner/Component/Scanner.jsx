// import React, { useRef, useEffect } from "react";
// import { useScanner } from "../hook/useScanner";

// const Scanner = () => {
//   const { handleScan, handleError, scanResult } = useScanner();
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: { facingMode: { exact: "environment" } } // Rear camera only
//         });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         handleError(error);
//       }
//     };

//     startCamera();

//     // Stop the stream when component unmounts
//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, [handleError]);

//   return (
//     <div className="h-screen bg-customColor overflow-auto">
//       <div className="flex items-center justify-center pt-10">
//         <div className="flex items-center justify-center w-60 h-60 rounded-lg border-2 border-orange-400 bg-gray-800">
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             autoPlay
//             muted
//           />
//         </div>
//       </div>
//       <div className="flex items-center justify-center pt-10">
//         <h3 className="text-white text-xl">Scan Result: </h3>
//         {scanResult?.text ? (
//           <p className="text-green-500">{scanResult.text}</p>
//         ) : (
//           <p className="text-white text-xl">No QR code detected yet</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Scanner;




import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import { useScanner } from "../hook/useScanner";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();

  // State to manage camera facing mode
  const [facingMode, setFacingMode] = useState('rear'); // Start with back camera
  const [key, setKey] = useState(0); // Force re-render on toggle

  // Function to toggle camera facing mode
  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === 'rear' ? 'front' : 'rear'));
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
        <h3 className="text-white text-xl">Scan Result: </h3>
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

