import React from 'react'
import { LOGO } from '../utils/constants';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useSelector } from 'react-redux';
const Header = () => {

const navigate =useNavigate();
const user =useSelector(store => store.user);
   const handleSignOut = () => {
      signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
      navigate("/error")
      })
   }
  return (
     <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        
        {user && (
         <div className='flex p-2'>       
         <img className='w-12 h-12' src= {user?.photoURL} alt="user Icon" />
       <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>
        )}
     </div>
  )
};

export default Header;
