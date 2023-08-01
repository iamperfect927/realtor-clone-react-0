import React, { useState } from 'react';
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function Signup() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {fullName, email, password, confirmPassword} = formData;

  function onChange(e){
    // console.log(e.target.value);
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  console.log(email);
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='hidden lg:block md:w-[67%] lg:w-[50%] mb-12 md:mb-6' >
          <img src="images/sign-up.jpg" alt="signup-pic" className='w-full rounded-3xl'/>
        </div>

        <div className='sm:hidden  w-[90%]  mb-12 mt-8  transform rotate-90' >
          <img src="images/sign-up.jpg" alt="signup-pic" className='w-full rounded-3xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20 mt-8'>
          <form action="" className='space-y-3'>
            {/* fullname  */}
            <input className='w-full pl-3  text-xl text-gray-700 border-gray-300 rounded mb-1' type="text" id='fullName'value={fullName} onChange={onChange} placeholder='Full Name' />

            {/* email  */}
            <input className='w-full pl-3  text-xl text-gray-700 border-gray-300 rounded mb-1' type="email" id='email'value={email} onChange={onChange} placeholder='Email Address' />

            {/* password  */}
            <div className='relative'>
              <input className='pl-3 py-2 w-[100%] text-xl text-gray-700 border-gray-300 rounded transition ease-in-out mb-1' id='password' type={showPassword ? "text" : "password"} placeholder='Password' />

              {showPassword ? (
                <FaEyeSlash className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
              ): (<FaEye className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
            </div>

                {/* confirm password  */}
            <div className='relative'>
              <input className='pl-3 py-2 w-[100%] text-xl text-gray-700 border-gray-300 rounded transition ease-in-out mb-5' id='confirmPassword' type={showConfirmPassword ? "text" : "password"} placeholder='Confirm Password' />

              {showPassword ? (
                <FaEyeSlash className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((prevState)=>!prevState)}/>
              ): (<FaEye className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((prevState)=>!prevState)}/>)}
            </div>
            
            {/* links  */}
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-5'>Already have an account? <Link className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out' to='/sign-in'>Login</Link>
              </p>
              <p>
                <Link to='/forgot-password' className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Forgot password?</Link>
              </p>
            </div>

                {/* buttons */}
              <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm sm:text-lg font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 '>Sign up</button>
            
            <div className='my-4 flex  items-center before:border-t before:border-gray-400 before:flex-1 after:border-t after:border-gray-400 after:flex-1 '>
              <p className='text-center font-bold mx-4 '>OR</p>
            </div>
            <OAuth/>
          </form>
          
        </div>
      </div>
    </section>
  )
}
