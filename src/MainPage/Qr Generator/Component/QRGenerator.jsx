import { Button } from "@/components/ui/button";
import React from "react";
import { useQRGenerator } from "../hook/useQRGenerator";
import plus from "@/assets/Plus.png";
const QRGenerator = () => {
  const { handleGenerateqrcode, loading, response} = useQRGenerator();
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




// import React, { useEffect, useRef, useState } from 'react';
// import QRCode from 'react-qr-code'; // ✅ Clean working QR solution
// import axios from 'axios';

// import plus from '@/assets/Plus.png'; // adjust this path as needed
// import campFlyer from '@/assets/scan.jpg';
// import { Button } from '@/components/ui/button';
// import { publicRequest } from '@/Shared/API/Request';

// const QrCodeOverlay = () => {
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const canvasRef = useRef(null);
//   const qrRef = useRef(null);

//   const scanBox = { x: 200, y: 150, width: 200, height: 200 };

//   const handleGenerateqrcode = async () => {
//     setLoading(true);
//     try {
//       const res = await publicRequest.post('/api/v1/generate');
//       setResponse(res);
//     } catch (error) {
//       console.error('QR Generation Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGenerateqrWithTem = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post('/api/v1/generate-with-template');
//       setResponse(res);
//     } catch (error) {
//       console.error('Template QR Generation Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');
//     const img = new Image();
//     img.src = campFlyer;

//     img.onload = () => {
//       if (!canvas || !ctx) return;
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);

//       const qrSVG = qrRef.current?.querySelector('svg');
//       if (qrSVG) {
//         const svgData = new XMLSerializer().serializeToString(qrSVG);
//         const imgObj = new Image();
//         const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//         const url = URL.createObjectURL(svgBlob);

//         imgObj.onload = () => {
//           ctx.drawImage(imgObj, scanBox.x, scanBox.y, scanBox.width, scanBox.height);
//           URL.revokeObjectURL(url);
//         };

//         imgObj.src = url;
//       }
//     };

//     img.onerror = () => {
//       console.error('Failed to load flyer background image');
//     };
//   }, [response]);

//   return (
//     <div className="bg-gray-900 min-h-screen overflow-auto pt-60">
//       <div className="flex items-center justify-center pt-10">
//         <div className="relative w-60 h-60 rounded-lg border-2 border-orange-400 bg-gray-800 flex items-center justify-center">
//           <canvas ref={canvasRef} />
//           {!response?.data?.qrCode?.qrCodeData && (
//             <img src={plus} alt="Plus" className="w-12 h-12 absolute" />
//           )}

//           {/* Hidden QR code generator (SVG-based) */}
//           <div style={{ display: 'none' }} ref={qrRef}>
//             <QRCode
//               value={response?.data?.qrCode?.qrCodeData || ''}
//               size={scanBox.width}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col items-center gap-6 mt-12 mb-60">
//         <Button
//           onClick={handleGenerateqrcode}
//           disabled={loading}
//           className="text-white font-bold bg-yellow-500 w-60 py-3"
//         >
//           {loading ? 'Generating...' : 'Generate Code'}
//         </Button>

//         <Button
//           onClick={handleGenerateqrWithTem}
//           disabled={loading}
//           className="text-white font-bold bg-yellow-500 w-60 py-3"
//         >
//           {loading ? 'Generating...' : 'Generate QR with Template'}
//         </Button>
//       </div>

//       {/* Message */}
//       <div className="flex justify-center mt-6 text-white">
//         {response?.data?.message}
//       </div>

//       {/* QR Number */}
//       <div className="flex justify-center mt-2 text-white text-2xl">
//         {response?.data?.qrCode?.qrNumber}
//       </div>
//     </div>
//   );
// };

// export default QrCodeOverlay;

