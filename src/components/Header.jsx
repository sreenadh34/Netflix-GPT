import React, { useEffect } from 'react'
import { LOGO } from '../utils/constants';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser} from "../utils/userSlice";
import { toggleGptSearchView } from '../utils/gptSlice';
const Header = () => {

const navigate =useNavigate();
const dispatch = useDispatch();
const user =useSelector(store => store.user);
   const handleSignOut = () => {
      signOut(auth).then(() => {})
      .catch((error) => {
      navigate("/error")
      });
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL } = user;
          dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL

          })
         );
         navigate("/browse")
        }else{
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe();
    },[])

    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());
    }
  return (
     <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        
        {user && (
         <div className='flex p-2'> 
         <button 
          className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearchClick}
          >
          GPT Search 
          </button>      
         <img className='w-12 h-12' src= {user?.photoURL} alt="user Icon" />
       <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>
        )}
     </div>
  )
};

export default Header;
