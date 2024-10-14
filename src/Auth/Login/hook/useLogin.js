import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicRequest } from "@/Shared/API/Request";
import { toast } from "@/hooks/use-toast";



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
    const form = useForm({
        resolver: zodResolver(formSchema),
      });
      console.log(form.formState.errors);

    const onSubmit = async (data) => {

        // console.log(data);
        try {
            const res = await publicRequest.post('/api/v1/loginuser', data)
            localStorage.setItem('token', res?.data?.token)
            toast({
                title: "✔️✔️✔️",
                description: "Welcome Back",
              });
            
        } catch (error) {
            console.log(error);
            if (error) {
                toast({
                  title: "ERROR",
                  description: 'Invalid Login Credentail',
                });
              }
            
        }




      }


      return{
        form,
        onSubmit
      }
}