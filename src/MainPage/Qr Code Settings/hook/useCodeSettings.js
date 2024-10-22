import { publicRequest } from "@/Shared/API/Request"

export const useCodeSettings = () =>{
    const handleListsOfQrCode = async() =>{
        // fetching api 
        try {
            const res = await publicRequest.get(`/api/v1/history/:qrNumber`)
        } catch (error) {
            
        }
    }



    return{
        handleListsOfQrCode
    }
}