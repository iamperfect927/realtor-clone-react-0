import React from 'react';
import { FcGoogle } from 'react-icons/fc'

export default function OAuth() {
  return (
    <button className='w-full bg-red-600 text-white px-7 py-3 text-sm sm:text-lg font-medium uppercase rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900 relative'>
        <FcGoogle className='absolute sm:top-4 sm:ml-14 ml-10 text-xl bg-white rounded-full'/>
        Continue with Google
    </button>
  )
}
