import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRequest } from "../API/Request";
import { toast } from "@/hooks/use-toast";

export const useCurrentUser = () => {
  const [currentUser, setcurrentUser] = useState();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getCurrentUser = async () => {
    if (!token) {
      navigate("/");
    }
    try {
      const res = await UserRequest().post("/api/v1/checkAuth");
      console.log(res);
      
      setcurrentUser(res);
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        toast({
          title: "An Error Occured",
          description: "Your Token Expire Pls Login Again",
        });
      }
    }
  };
     const handleLogout = () =>  {
      localStorage.removeItem("token");
      setcurrentUser(null);
      navigate("/");
      toast({
        title: "Log Out",
        description: res?.data?.username + 'you have Log Out Successfully',
      });
    }
  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    currentUser,
    handleLogout,
    // getCurrentUser
  };
};
