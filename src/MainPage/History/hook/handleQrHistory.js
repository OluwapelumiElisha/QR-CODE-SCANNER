import { publicRequest } from "@/Shared/API/Request";
import { useEffect } from "react"



export const handleQrHistory = () =>{
    
    const handleHistory = async () => {
        // console.log('hello');
        
        try {
            const res = await publicRequest.get('/api/v1/allhistory');
            if (res) {
                console.log('History Data:', res);
            }else{
                console.log('hello world');
                
            }
           // Log the response data
        } catch (error) {
            // console.error('Error fetching history:', error.response ? error.response.data : error.message);
            console.log(error);
            

        }
    };
    
    // Call the function here
    handleHistory();
    
    return {
        handleHistory
    };
    
}