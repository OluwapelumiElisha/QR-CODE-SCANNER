import { toast } from "@/hooks/use-toast";
import { publicRequest } from "@/Shared/API/Request";
import { useState } from "react";

export const useQRGenerator = () => {
  const [loading, setloading] = useState(false);
  const [response, setresponse] = useState();
  const handleGenerateqrcode = async () => {
    setloading(true);
    try {
      const res = await publicRequest.post("/api/v1/generate");
      console.log(res);
      setresponse(res);
      toast({
        title: "✔️✔️✔️",
        description: res?.data?.message,
      });
    } catch (error) {
      console.log(error);
      // toast({
      //     title: "✔️✔️✔️",
      //     description: res?.data?.message,
      //   });
    } finally {
      setloading(false);
    }
  };

  return {
    handleGenerateqrcode,
    loading,
    response,
  };
};
