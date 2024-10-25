import { toast } from "@/hooks/use-toast";
import { publicRequest } from "@/Shared/API/Request";
import { useEffect, useState } from "react";

export const useCodeSettings = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [selectedQrNumber, setSelectedQrNumber] = useState("");
  const [response2, setResponse2] = useState()
  const [searchTerm, setSearchTerm] = useState('');

  const handlePopUpHistory = async(qrNumber) => {
    setSelectedQrNumber(qrNumber);
    setIsPopUpVisible(true);
    try {
      const res = await publicRequest.get(`api/v1/history/${qrNumber}`)
      console.log(res);
      setResponse2(res?.data)
      toast({
        title: qrNumber,
        description: res?.data?.message,
      })
    } catch (error) {
      console.log(error);
      toast({
        title : "Error ❌❌❌",
        description : error?.response?.data?.message
      })
    }
  };

  const handleBlockQrCode = async(qrNumber) => {
    console.log(qrNumber);
    
    try {
      const res = await publicRequest.post('/api/v1/block',  {qrNumber: qrNumber})
      console.log(res);
      toast({
        title: "✅✅✅",
        description: res?.data?.message
      })
    } catch (error) {
      console.log(error);

      toast({
        title: "❌❌❌",
        description: error?.response?.data?.error
      });
      
    }
  };

  const handleUnblockQrCode = async(qrNumber) => {
    try {
      const res = await publicRequest.post('/api/v1/unblock',  {qrNumber: qrNumber})
      console.log(res);
      toast({
        title: "✅✅✅",
        description: res?.data?.message
      })
    } catch (error) {
      console.log(error);

      toast({
        title: "❌❌❌",
        description: error?.response?.data?.error
      });
      
    }
  };

  const handleDeleteQrCode = async(qrNumber) => {
    try {
      const res = await publicRequest.delete(`/api/v1/delete/${qrNumber}`)
      console.log(res);
      toast({
        title: "✅✅✅",
        description: res?.data?.message
      })
    } catch (error) {
      console.log(error);

      toast({
        title: "❌❌❌",
        description: error?.response?.data?.error
      });
      
    }
  };

  // useEffect(() => {
  //   handleDeleteQrCode();
  // }, []);

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };

  const handleSearchChange = (event) =>{
    setSearchTerm(event.target.value)
  }
  return {
    handlePopUpHistory,
    handleBlockQrCode,
    handleUnblockQrCode,
    handleDeleteQrCode,
    handleClosePopUp,
    isPopUpVisible,
    selectedQrNumber,
    response2,
    handleSearchChange, 
    searchTerm
  };
};
