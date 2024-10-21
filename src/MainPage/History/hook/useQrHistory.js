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
    
    const handleCheckEachQrCode = async (number)=>{
        alert(number)
        navigate('/Dashboard/Each QR Code History' )
        try {
            const res = await publicRequest.get(`/api/v1/history/${number}`)
            console.log(res);
            toast({
                title: "✔️",
                description: `hecking History for Qr Code${number}`,
              });
        } catch (error) {
            console.log(error);
            
        }
        

        
    }
    useEffect(() => {
        handleHistory()
      }, []);
    
    return {
        response, 
        handleCheckEachQrCode

    };
    
}