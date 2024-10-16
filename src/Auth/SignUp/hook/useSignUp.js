import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { publicRequest } from "@/Shared/API/Request";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";



const formSchema = z.object({
    username: z 
      .string()
      .min(6, "Username must be at least 6 characters")
      .max(20),

    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20)
      .nonempty("Password is required"),
  });

export const useSignUp = () =>{
  const [loading , setloading] = useState(false)
  const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
      });
      console.log(form.formState.errors);

    const onSubmit = async (data) => {
      setloading(true)
      console.log(data);
      
      try {
        const res = await publicRequest.post('/api/v1/signupuser', data)
        console.log(res);
        toast({
          title: "✔️✔️✔️",
          description: "You Have Sign Up Successfully",
        });
        navigate('/Login')
      } catch (error) {
        console.log(error);
        if (error) {
          toast({
            title: "ERROR",
            description: 'Invalid Login Credentail',
          });
        }
      }
      
      finally{
        setloading(false)
      }
      }

      return{
        form,
        onSubmit, 
        loading
      }
}