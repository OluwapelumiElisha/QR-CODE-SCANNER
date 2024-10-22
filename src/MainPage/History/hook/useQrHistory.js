import { toast } from "@/hooks/use-toast";
import { publicRequest } from "@/Shared/API/Request";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";



export const useQrHistory = () =>{
    const [response, setresponse] = useState()
    const navigate = useNavigate()
   
    const handleHistory = async () => {
        
        try {
            const res = await publicRequest.get('/api/v1/allhistory');
            if (res) {
                console.log('History Data:', res);
            }else{
                console.log('hello world');
                
            }
            setresponse(res?.data?.message)
        } catch (error) {
            console.log(error);
            
        }
    };
    
    const handleCheckEachQrCode = async (numberSent)=>{
        
        try {
            const res = await publicRequest.get(`/api/v1/meal-status/${numberSent}`)
            console.log(res);
            toast({
                title: "✔️",
                description: `Checking History for Qr Code ${numberSent}`,
              });
            //   navigate(`/Dashboard/Each QR Code History?number=${numberSent}` )
            //   navigate('/Dashboard/Each QR Code History', { state: { res, numberSent } } )
            const clonedRes = JSON.parse(JSON.stringify(res)); // Deep clone of the `res` object
            navigate('/Dashboard/Each QR Code History', { state: { res: clonedRes, numberSent } });
        } catch (error) {
            console.log(error);
            toast({
                title: "❌❌❌",
                description: error.response.data.message,
            })
        }
        
            
        
    }
    useEffect(() => {
        handleHistory()
      }, []);
    
    return {
        response, 
        handleCheckEachQrCode,
    };
    
}