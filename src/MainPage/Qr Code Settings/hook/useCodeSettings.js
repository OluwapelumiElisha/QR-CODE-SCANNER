import { publicRequest } from "@/Shared/API/Request"
import { useState } from "react";

export const useCodeSettings = () =>{

    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [selectedQrNumber, setSelectedQrNumber] = useState('');



    const handleListsOfQrCode = async() =>{
        // fetching api 
        try {
            const res = await publicRequest.get(`/api/v1/history/:qrNumber`)
        } catch (error) {
            
        }
    }


    const handleBlockQrCode = () =>{
        alert('Block')
    }

    const handleUnblockQrCode = () =>{
        alert('Unblock')
    }

    const handleDeleteQrCode = () =>{
        alert('Delete')
    }


  

  const handlePopUpHistory = (qrNumber) => {
    setSelectedQrNumber(qrNumber);
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };

    return{
        handleListsOfQrCode,
        handlePopUpHistory,
        handleBlockQrCode,
        handleUnblockQrCode,
        handleDeleteQrCode,
        handleClosePopUp, 
        isPopUpVisible,
        selectedQrNumber
    }
}