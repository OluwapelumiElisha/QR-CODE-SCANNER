import React, { useRef } from "react";
import temp from "@/assets/Temp-Scan.jpg";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
const Template = () => {
  const location = useLocation();
  const response = location?.state?.res || {};
  const searchParams = new URLSearchParams(location.search);
  const num = searchParams.get("image");
  console.log(response);

  const divRef = useRef(null);

  const handleDownload = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current, {
        scale: 2, // Better quality
        useCORS: true, // Handle cross-origin images
        width: 1113.6, // A4 width in pixels at 72 DPI (11.6in * 72)
        height: 825.6, // A4 height in pixels at 72 DPI (8.6in * 72)
      });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "a4-image.png";
      link.click();
    }
  };

  const proxiedUrl = `https://qr-code-generator-objk.onrender.com/proxy-image?url=${encodeURIComponent(response?.qrCodeData)}`;
  console.log(proxiedUrl, 'here');
  
  return (
    <>
      <div>
        <div ref={divRef}>
          <div className=" w-[11.6in] h-[8.6in]">
            <img src={temp} alt="" className="w-[11.6in] h-[8.5in]" />
          </div>

            <div className="rounded-xl p-0 flex flex-col items-center w-[240px] absolute bottom-[-121px] left-[437px]">
              {/* <div className="bg-yellow-500"> */}
                <img
                src={proxiedUrl}
                alt="QR"
                className="w-[72in] mt-20"
              />
              {/* </div> */}
              
              <div className="text-white text-4xl font-bold bg-gray-800 w-[80%] h-16 rounded-lg -mt-4">
                <p className="text-center">
                {response.qrNumber}
                </p>
              </div>
            </div>
          </div>
        </div>


      <Button className="" onClick={handleDownload}>
        Download
      </Button>

      <div className="mb-20 mt-32"></div>
    </>
  );
};

export default Template;




// netsh wlan show profile name="joshgiverPC" key=clear



// import React, { useRef } from "react";
// import temp from "@/assets/Temp-Scan.jpg";
// import { useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import html2canvas from "html2canvas";

// const Template = () => {
//   const location = useLocation();
//   const response = location?.state?.res || {};
//   const searchParams = new URLSearchParams(location.search);
//   const num = searchParams.get("image");
//   console.log(response);
  
//   const divRef = useRef(null);
//   const qrImgRef = useRef(null);

//   const handleDownload = async () => {
//     const qrImg = qrImgRef.current;

//     // Ensure QR image has loaded
//     if (qrImg && !qrImg.complete) {
//       await new Promise((resolve) => {
//         qrImg.onload = resolve;
//         qrImg.onerror = resolve;
//       });
//     }

//     if (divRef.current) {
//       const canvas = await html2canvas(divRef.current, {
//         scale: 2,
//         useCORS: true,
//         width: 1113.6,
//         height: 825.6,
//       });
//       const image = canvas.toDataURL("image/png");
//       const link = document.createElement("a");
//       link.href = image;
//       link.download = "a4-image.png";
//       link.click();
//     }
//   };

//   return (
//     <>
//       <div>
//         <div ref={divRef}>
//           <div className=" w-[11.6in] h-[8.6in]">
//             <img src={temp} alt="" className="w-[11.6in] h-[8.5in]" />
//           </div>

//           <div className="rounded-xl p-0 flex flex-col items-center w-[240px] absolute bottom-[-121px] left-[437px]">
//             <img
//               ref={qrImgRef}
//               src={response?.qrCodeData}
//               alt="QR"
//               className="w-[72in] mt-20"
//               crossOrigin="anonymous"
//             />
//             <div className="text-white text-4xl font-bold bg-gray-800 w-[80%] h-16 rounded-lg -mt-4">
//               <p className="text-center">{response.qrNumber}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Button className="" onClick={handleDownload}>
//         Download
//       </Button>

//       <div className="mb-20 mt-32"></div>
//     </>
//   );
// };

// export default Template;
