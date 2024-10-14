import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRequest } from "../API/Request";
import { toast } from "@/components/ui/use-toast";


export const useCurrentUser = ()=>{
    const [currentUser, setcurrentUser] = useState();
    const token = localStorage.getItem("token");
   const navigate = useNavigate()
   async function getCurrentUser() {
    if (!token) {
      navigate('/')
     }
     try {
      //    const res = await axios.get(
      //   "http://localhost:4000/checkAuth",
      //   { headers: { Authorization: "Bearer " + token } }
      // );
    const res = await UserRequest().get("/checkAuth");
      setcurrentUser(res?.data)
      console.log(res);
     
     } catch (error) {
      
         console.log(error);
         if (error?.response?.data == "Your token expire pls login") {
          toast({
            title: "An Error Occured",
            description: "Your Token Expire Pls Login Again",
          })

          navigate('/')
          console.log("hello");
         }
         else{
          toast({
            title: "Hello",
            description: "Please Check your Network",
          })
         }
     }
   }
//    function handleLogout() {
//     localStorage.removeItem("token");
//     setcurrentUser(null);
//     navigate("/");
//   }
   useEffect(() => {
    getCurrentUser();
}, []);

return{
    currentUser, 
    // handleLogout,
}
}