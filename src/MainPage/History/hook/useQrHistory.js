import { toast } from "@/hooks/use-toast";
import { publicRequest } from "@/Shared/API/Request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useQrHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isloading, setIsLoading] = useState(false);
  //   using dis for navigating
  const navigate = useNavigate();
  //   using dis for navigating

  // function handleHistory
  const handleHistory = async () => {
    // fetching result from backend
    setIsLoading(true);
    try {
      const res = await publicRequest.get("/api/v1/allhistory");
      // console.log(res, 'hello');

      let data = res?.data?.qrCodes;
      localStorage.setItem("QrCodeHistory", JSON.stringify(data));
      // console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    // fetching result from backend
  };
  // function handleHistory

  // function handleCheckEachQrCode
  const handleCheckEachQrCode = async (numberSent) => {
    // fetching result from backend
    try {
      const res = await publicRequest.get(`/api/v1/meal-status/${numberSent}`);

      toast({
        title: "✔️",
        description: `Checking History for Qr Code ${numberSent}`,
      });

      const clonedRes = JSON.parse(JSON.stringify(res)); // Deep clone of the `res` object
      navigate(`/Dashboard/Each QR Code History?number=${numberSent}`, {
        state: { res: clonedRes },
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "❌❌❌",
        description: error.response.data.message,
      });
    }
    // fetching result from backend
  };

  const handleSearchWord = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    handleHistory();
  }, []);

  

  useEffect(() => {
    // Detect browser refresh
    const navType = performance.getEntriesByType("navigation")[0]?.type;

    if (navType === "reload") {
      localStorage.removeItem("QrCodeHistory");
    }
  }, []);

  return {
    handleCheckEachQrCode,
    handleSearchWord,
    searchTerm,
    isloading,
  };
};
