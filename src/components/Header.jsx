import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    // navigates without refreshing the page(without requesting from the server) which makes the website very fast
    const navigate = useNavigate(); 
    const location = useLocation();
    // console.log(location.pathname);
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div className=''>
                <img src="images/realtor-logo.svg" alt="realtor-logo" className='h-5 cursor-pointer'
                onClick={() => navigate("/")}/>
            </div>
            <div>
                {/* space-x-10 just adds the space btw the text and not the corners */}
                <ul className='flex space-x-2 md:space-x-10'>
                    <li className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-600"}`} onClick={() => navigate("/")}>Home</li>

                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-600"}`} onClick={() => navigate("/offers")}>Offers</li>

                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-600"}`}
                    onClick={() => navigate("/sign-in")}>Sign in</li>

                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-up") && "text-black border-b-red-600"}`}
                    onClick={() => navigate("/sign-up")}>Sign up</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
