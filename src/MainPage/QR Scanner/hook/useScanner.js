import { toast } from "@/hooks/use-toast";
import { publicRequest } from "@/Shared/API/Request";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useScanner = () => {
  const [scanResult, setScanResult] = useState(null); // To store the scan result
  const navigate = useNavigate()


  const handleScan = async (data) => {

    if (data && data.text) {
      // console.log(data);
      
      const qrNumber = data.text.includes('/redirect/')
      ? data.text.split('/redirect/')[1]
      : null;
      setScanResult(qrNumber); // Store the scanned QR code data
      
      // console.log(qrNumber);
      try {
        const res = await publicRequest.post('/api/v1/scan', { qrNumber });
        console.log(res);
        toast({
          title: "✔️ Success",
          description: "Successfully Scanned and Recorded",
        });
        const clonedRes = JSON.parse(JSON.stringify(res));
        navigate('/Dashboard/Meal Status', {
          state: { res: clonedRes },
        });

      } catch (error) {
        console.log(error);

        toast({
          title: "❌ Error",
          description: error?.response?.data?.error || "Failed to send QR code.",
        });
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    toast({
      title: "❌ Scan Error",
      description: "Error with QR scanning",
    });
  };

  return {
    handleScan,
    handleError,
    scanResult,
    // response
  };
};
