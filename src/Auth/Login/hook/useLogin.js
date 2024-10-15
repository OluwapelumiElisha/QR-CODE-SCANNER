import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicRequest } from "@/Shared/API/Request";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";



const formSchema = z.object({
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

export const useLogin = () =>{
    const navigate = useNavigate()
    const [loading , setloading] = useState(false)
    const form = useForm({
        resolver: zodResolver(formSchema),
      });
      console.log(form.formState.errors);

    const onSubmit = async (data) => {

        // console.log(data);
        setloading(true)
        try {
            const res = await publicRequest.post('/api/v1/loginuser', data)
            localStorage.setItem('token', res?.data?.token)
            toast({
                title: "✔️✔️✔️",
                description: "Welcome Back",
              });
              navigate('/Dashboard')
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