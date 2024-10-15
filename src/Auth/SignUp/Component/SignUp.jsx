import React, { useState } from 'react';
import logo from '/src/assets/20240901_220956.png'
import { Form } from '@/components/ui/form';
import GenericForminput from '@/Shared/GenericFormInput';
import hidden from '@/assets/hidden_2355322.png'
import eye from '@/assets/eye_660383.png'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useSignUp } from '../hook/useSignUp';
import { SignUpInput } from '../Utils/SignUpInput';
import { SignUpInput2 } from '../Utils/SignUpInput2';
import { SignUpInput3 } from '../Utils/SignUpInput3';



const SignUp = () => {
 const { form, onSubmit} = useSignUp()
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//  const navigate = useNavigate()
 const togglePasswordVisibility = () => {
   setIsPasswordVisible(!isPasswordVisible);
 };
  return (
    <>
    {/* logo and name  */}
      <div className='bg-customColor h-[150vh] '>
        <div className='flex  justify-center  -ms-[20%] lg:pt-[10%] pt-[10%]'>
          <img className='w-20 h-20 lg:-ms-0 md:-ms-0 sm:-ms-[31%] -ms-[23%]' src={logo} alt="" />
          <p className='text-white lg:text-2xl md:text-2xl text-xl lg:mt-[1.5%] md:mt-[2.5%] sm:mt-[4%] mt-6 font-pthin'>C A B C</p>
        </div> 
    {/* logo and name  */}

    {/* signup text  */}
          <div className='flex  justify-center'>
            <h1 className='text-white font-bold  font-pbold text-xl lg:-ms-[23%] md:-ms-[27%] sm:-ms-[65.5%] -ms-[58%] mt-4'>Sign Up</h1>
            
          </div>
    {/* signup text  */}

        {/* Username div  */}
          <div  className='flex  justify-center -ms-[33%]'>
            <p className='text-white lg:mt-2 md:mt-3 sm:mt-3 mt-[3%] text-sm lg:ms-[6%] md:ms-[2%] sm:-ms-[28%] -ms-[20%]'>Username</p>
          </div>
          <div className='flex  justify-center mt-0 max-w-sm sm:max-w-sm md:max-w-md lg:ms-[36%] md:ms-[33%] ms-[12.5%] w-[80%]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full text-white'>
              {SignUpInput.map((elem, i) => (
                <div key={i + elem.name} className="relative mb-4">
                  <GenericForminput
                    form={form}
                    {...elem}
                  />
                 
                </div>
              ))}
              
            </form>
          </Form>
          </div>
        {/* Username div  */}

        {/* Email div  */}
          <div  className='flex  justify-center -ms-[33%]'>
            <p className='text-white lg:mt-2 md:mt-3 sm:mt-3 mt-[1%] text-sm lg:ms-[6%] md:ms-[2%] sm:-ms-[28%] -ms-[24%]'>Email</p>
          </div>
          <div className='flex  justify-center mt-0 max-w-sm sm:max-w-sm md:max-w-md lg:ms-[36%] md:ms-[33%] ms-[12.5%] w-[80%]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full text-white'>
              {SignUpInput2.map((elem, i) => (
                <div key={i + elem.name} className="relative mb-4">
                  <GenericForminput
                    form={form}
                    {...elem}
                  />
                 
                </div>
              ))}
              
            </form>
          </Form>
          </div>
        {/* Email div  */}

          {/* Password  div*/}
          <div  className='flex  justify-center -ms-[33%]'>
            <p className='text-white lg:mt-2 md:mt-3 sm:mt-0 mt-[0.1%] text-sm lg:ms-[8%] md:ms-[2%] sm:-ms-[26%] -ms-[20%]'>Password</p>
          </div>

          <div className='flex  justify-center mt-0 max-w-sm sm:max-w-sm md:max-w-md lg:ms-[36%] md:ms-[33%] ms-[12.5%] w-[80%]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full text-white'>
              {SignUpInput3.map((elem, i) => (
                <div key={i + elem.name} className="relative mb-4">
                  <GenericForminput
                    form={form}
                    {...elem}
                    type={elem.name === 'password' && isPasswordVisible ? 'text' : elem.type}
                    className="w-full p-2 rounded-md border border-red-500"
                  />
                 
                  {elem.name === 'password' && (
                    <span onClick={togglePasswordVisibility} className="absolute right-2 top-3 cursor-pointer text-sm text-blue-500">
                      {isPasswordVisible ? 
                        <img src={eye} className="w-4 h-4" alt="Show" /> : 
                        <img src={hidden} className="w-4 h-4" alt="Hide" />
                      }
                    </span>
                  )}
                
                </div>
              ))}
              <div className='flex justify-center items-center max-w-lg sm:max-w-sm md:max-w-md  '>
                <Button type = 'submit' className='hover:bg-slate-100 text-black mt-4 bg-customYellow w-full px-6 py-3 flex justify-center items-center'>Sign Up </Button>
                
                
            </div>
              
            </form>
          </Form>
          </div>
        {/* Password  div*/}

        {/* Login button  */}
          
        {/* Login button  */}
        
        {/* Question about having an account  */}
          <div className='flex justify-center'>
            <p className='mt-5 text-white'>Don’t have an account?</p>
            <Link to={'/Login'}>
             <p className='text-customYellow pl-2 mt-5 font-bold cursor-pointer'>Log In</p>
            </Link>
           
          </div>
          {/* Question about having an account  */}
          
      </div>
    </>
  );
};

export default SignUp;
