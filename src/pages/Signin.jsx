import React, { useState } from 'react';
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';  

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {email, password} = formData;

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
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="images/key.jpg" alt="key-pic" className='w-full rounded-3xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="" className='space-y-3'>
            <input className='w-full pl-3  text-xl text-gray-700 border-gray-300 rounded mb-5' type="email" id='email'value={email} onChange={onChange} placeholder='Email Address' />
            <div className='relative'>
              <input className='pl-3 py-2 w-[100%] text-xl text-gray-700 border-gray-300 rounded transition ease-in-out mb-5' id='password' type={showPassword ? "text" : "password"} placeholder='Password' />

              {showPassword ? (
                <FaEyeSlash className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
              ): (<FaEye className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
            </div>
            
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-5'>Don't have an account? <Link className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out' to='/sign-up'>Register</Link>
              </p>
              <p>
                <Link to='/forgot-password' className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Forgot password?</Link>
              </p>
            </div>
              <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm sm:text-lg font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 '>Sign in</button>
            
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
