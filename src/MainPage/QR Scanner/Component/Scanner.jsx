// import React, { useState } from "react";
// import QrReader from "react-qr-scanner";
// import { useScanner } from "../hook/useScanner";
// import { Button } from "@/components/ui/button";
// import { useCurrentUser } from "@/Shared/hook/useCurrentUser";

// const Scanner = () => {
//   const { handleScan, handleError, scanResult } = useScanner();
//   const { currentUser } = useCurrentUser()

//   return (
//     <div className="h-screen bg-customColor overflow-auto">
//       <div className="flex justify-center text-center pt-10">
//       <p className="text-white font-pregular text-xl">You are Welcome back, {currentUser?.data?.username} ❤️</p>
//       </div>
//       <div className="flex items-center justify-center pt-10">
//         <div className="flex items-center justify-center w-90 h-90 rounded-lg border-2 border-orange-400 bg-gray-800">
//         <QrReader
//           delay={100}
//           style={{ width: '100%', height: '100%' }}
//           onError={handleError}
//           onScan={handleScan}
//           constraints={{
//             audio: false,
//             video: { facingMode: "environment" }}}
//           />
//         </div>
//       </div>
//       <div className="flex items-center justify-center pt-10">
//         <h3 className="text-white  text-md lg:text-xl md:text-xl sm:text-xl">Scan Result: &nbsp;</h3>
//         {scanResult?.text ? (
//           <p className="text-green-500">{scanResult.text}</p>
//         ) : (
//           <p className="text-white text-md lg:text-xl md:text-xl sm:text-xl">No QR code detected yet</p>
//         )}
//       </div>
//       <div className="flex items-center justify-center mt-12 mb-12">
//         <p className="opacity-0 mt-8 text-white text-sm">Loading...</p>
//       </div>
    
//     </div>
//   );
// };

// export default Scanner;



// Grok 

// import React, { useState } from "react";
// import QrReader from "react-qr-scanner";
// import { useScanner } from "../hook/useScanner";
// import { Button } from "@/components/ui/button";
// import { useCurrentUser } from "@/Shared/hook/useCurrentUser";

// const Scanner = () => {
  // const { handleScan, handleError, scanResult } = useScanner();
//   const { currentUser } = useCurrentUser();
//   const [isScanning, setIsScanning] = useState(false); // State to control scanner activation

//   // Function to handle button click and start scanning
//   const handleScanClick = () => {
//     setIsScanning(true); // Activate scanner
//   };

//   // Modified handleScan to stop scanning after a result is captured
//   const onScan = (data) => {
//     if (data) {
//       handleScan(data); // Process the scan result
//       setIsScanning(false); // Stop scanning after capturing
//     }
//   };

//   // Function to stop scanning manually
//   const handleStopScan = () => {
//     setIsScanning(false);
//   };

//   return (
//     <div className="h-screen bg-customColor overflow-auto">
//       <div className="flex justify-center text-center pt-10">
//         <p className="text-white font-pregular text-xl">
//           Welcome back, {currentUser?.data?.username} ❤️
//         </p>
//       </div>
//       <div className="flex items-center justify-center pt-10">
//         <div className="flex items-center justify-center w-90 h-90 rounded-lg border-2 border-orange-400 bg-gray-800">
//           {isScanning ? (
//             <QrReader
//               delay={300} // Increased delay to reduce performance strain
//               style={{ width: "100%", height: "100%" }}
//               onError={handleError}
//               onScan={onScan} // Use modified onScan
//               constraints={{
//                 audio: false,
//                 video: { facingMode: "environment" },
//               }}
//             />
//           ) : (
//             <p className="text-white text-md">Press the button to start scanning</p>
//           )}
//         </div>
//       </div>
//       <div className="flex items-center justify-center pt-10">
//         <h3 className="text-white text-md lg:text-xl md:text-xl sm:text-xl">Scan Result: </h3>
//         {scanResult?.text ? (
//           <p className="text-green-500"> {scanResult.text}</p>
//         ) : (
//           <p className="text-white text-md lg:text-xl md:text-xl sm:text-xl">No QR code detected yet</p>
//         )}
//       </div>
//       <div className="flex items-center justify-center mt-12 mb-12 gap-4">
//         {!isScanning ? (
//           <Button
//             onClick={handleScanClick}
//             className="bg-orange-400 text-white hover:bg-orange-500"
//           >
//             Start Scan
//           </Button>
//         ) : (
//           <Button
//             onClick={handleStopScan}
//             className="bg-red-500 text-white hover:bg-red-600"
//           >
//             Stop Scan
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Scanner;


// ChatGPT 

import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { useScanner } from "../hook/useScanner";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/Shared/hook/useCurrentUser";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();
  const { currentUser } = useCurrentUser();

  const [isScanning, setIsScanning] = useState(false); // Scanner active state

  // Start scanning when button is clicked
  const handleScanClick = () => {
    setIsScanning(true);
  };

  // Manually stop scanning
  const handleStopScan = () => {
    setIsScanning(false);
  };

  // When QR code is scanned
  const onScan = (data) => {
    if (data) {
      console.log(data);
      
      handleScan(data); // Pass result to hook
      setIsScanning(false); // Stop scanner
    }
  };

  return (
    <div className="h-screen bg-customColor overflow-auto">
      <div className="flex justify-center text-center pt-10">
        <p className="text-white font-pregular text-xl">
          You are Welcome back, {currentUser?.data?.username} ❤️
        </p>
      </div>

      <div className="flex items-center justify-center pt-10 flex-col gap-4">
        <div className="w-[90%] m-auto h-80 rounded-lg border-2 border-orange-400 bg-gray-800 flex items-center justify-center">
          {isScanning ? (
            <QrReader
              delay={300}
              style={{ width: "100%", height: "100%" }}
              onError={handleError}
              onScan={onScan}
              constraints={{ video: { facingMode: "environment" } }}
            />
          ) : (
            <p className="text-white">Click "Start Scan" to begin</p>
          )}
        </div>

        {!isScanning ? (
          <Button onClick={handleScanClick} className="bg-orange-500 text-white">
            Start Scan
          </Button>
        ) : (
          <Button onClick={handleStopScan} className="bg-red-500 text-white">
            Stop Scan
          </Button>
        )}
      </div>

      <div className="flex items-center justify-center pt-5 mb-32">
        <h3 className="text-white text-md lg:text-xl md:text-xl sm:text-xl">
          Scan Result:&nbsp;
        </h3>
        {scanResult?.text ? (
          <p className="text-green-500">You are Scanning QRCode {scanResult.text}</p>
        ) : (
          <p className="text-white text-md lg:text-xl md:text-xl sm:text-xl">
            No QR code detected yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Scanner;
