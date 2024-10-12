import React, { useState } from 'react';
import logo from '/src/assets/20240901_220956.png'
import { LoginInput } from '../utils/LoginInput';
import { Form } from '@/components/ui/form';
import GenericForminput from '@/Shared/GenericFormInput';
import { useLogin } from '../hook/useLogin';
import hidden from '@/assets/hidden_2355322.png'
import eye from '@/assets/eye_660383.png'



const LoginForm = () => {
 const { form, onSubmit} = useLogin()
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//  const navigate = useNavigate()
 const togglePasswordVisibility = () => {
   setIsPasswordVisible(!isPasswordVisible);
 };
  return (
    <>
      <div className='bg-customColor h-screen '>
        <div className='flex  justify-center pt-[9%] -ms-[20%]'>
          <img className='w-20 h-20' src={logo} alt="" />
          <p className='text-white lg:text-2xl md:text-2xl text-xl lg:mt-[1.5%] md:mt-[2.5%] sm:mt-[4%] mt-6 font-pthin'>C A B C</p>
        </div> <br />
          <div className='flex  justify-center'>
            <h1 className='text-white font-bold -ms-[30%] font-pbold text-xl'>Sign in</h1>
            
          </div>
          <div  className='flex  justify-center -ms-[33%]'>
            <p className='text-white mt-[2%] text-sm -ms-[3%]'>Email:</p>
            
          </div>
          <div className='flex  justify-center'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {LoginInput.map((elem, i) => (
                <div key={i + elem.name} className="relative mb-4">
                  <GenericForminput
                    form={form}
                    {...elem}
                    type={elem.name === 'password' && isPasswordVisible ? 'text' : elem.type}
                  />
                 
                  {elem.name === 'password' && (
                    <span onClick={togglePasswordVisibility} className="absolute right-2 top-2 cursor-pointer text-sm text-blue-500">
                      {isPasswordVisible ? 
                        <img src={eye} className="w-6 h-6" alt="Show" /> : 
                        <img src={hidden} className="w-6 h-6" alt="Hide" />
                      }
                    </span>
                  )}
                </div>
              ))}
             
              {/* <div className="flex items-center justify-center">
                <Button className='w-full bg-red-600 p-3' disabled={loading} type="submit">
                  {loading ? "Loading..." : "Sign in"}
                </Button>
              </div> */}
            </form>
          </Form>
          </div>
        
      
      </div>
    </>
  );
};

export default LoginForm;
