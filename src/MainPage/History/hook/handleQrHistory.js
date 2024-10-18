import { publicRequest } from "@/Shared/API/Request";
import { useEffect } from "react"



export const handleQrHistory = () =>{
    
    const handleHistory = async() =>{
        try {
            const res = await publicRequest.get('/')
        } catch (error) {
            
        }
    }
    useEffect(() => {
        handleHistory();
      }, [isdelete]);
}