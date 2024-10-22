import { toast } from "@/hooks/use-toast";
import { publicRequest } from "@/Shared/API/Request";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 const qrCodeContext = createContext()
export const useQrCodeContext = ()=>{
    return useContext(qrCodeContext)
}

const QrCodeProvider = ({children})=>{

    const [eachResponse2, seteachResponse2] = useState()
    // const navigate = useNavigate()

    const handleCheckEachQrCode = async (numberSent)=>{
        alert(numberSent)
        
        try {
            const res = await publicRequest.get(`/api/v1/meal-status/${numberSent}`)
            console.log(res);
            seteachResponse2(res)
            toast({
                title: "✔️",
                description: `Checking History for Qr Code ${numberSent}`,
              });
            //   navigate(`/Dashboard/Each QR Code History?number=${numberSent}` )
        } catch (error) {
            console.log(error);
            toast({
                title: "❌❌❌",
                description: error.response.data.message,
            })
        }
        
            const value = {handleCheckEachQrCode, eachResponse2}
      

return (
    <qrCodeContext.Provider value={value}>{children}</qrCodeContext.Provider>
)

}
}
export default QrCodeProvider