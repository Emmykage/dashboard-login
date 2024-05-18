import React, { createContext, useContext, useEffect, useState } from 'react'
import { BiCustomize } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { FaQuestionCircle, FaRegUser } from "react-icons/fa";
import { GrDocumentDownload } from 'react-icons/gr';
import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { MdSupervisorAccount } from 'react-icons/md';
import logo from '../assets/images/icons/logo.PNG'
import { NavLink, json, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../redux/action/auth';
import { logOut } from '../redux/auth/auth';

const UserProfileContext = createContext()

// export const UserProfileProvider = ({ children }) => {
//     const [userProfile, setUserProfile] = useState({});
    
//     return (
//       <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
//         {children}
//       </UserProfileContext.Provider>
//     );
//   };
  

const UserLayout = ({children}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [toggle, setToggle] = useState(false)
    const {userProfile} = useSelector(state => state.auth)
    const {isLogged, loading} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(userProfile, isLogged)
    useEffect(()=> {
        
        dispatch(getUserProfile())
        if (!loading) {
            if (!isLogged) {
              navigate('/auth/login');
            }
          }
      
    },[])
  return (
    <div className='h-full flex flex-col bg-gray-200 overflow-y-auto'>
        <header className='bg-white flex justify-between py-10 shadow px-2 md:px-10 items-center border-b'>
            <NavLink to={'/'} className={'px-2 w-52 text-3xl text-green-700 font-semibold'}>
                <img src={logo} alt="" />
            </NavLink>

                <nav className='flex-1 md:block hidden'>
                    <ul className='flex gap-6 text-sm font-medium text-gray-600'>
                        <li><NavLink to={'/dashboard/offering'}>Offerings</NavLink></li>
                        <li><NavLink to={'/dashboard/portfolio'}>Portfolio</NavLink></li>
                        <li><NavLink to={'/dashboard/account'}>My Account</NavLink></li>
                        <li><NavLink to={'/dashboard/document'}>My Document</NavLink></li>
                    </ul>
                </nav>
                <ul className=' gap-8 items-center md:flex hidden'>
                <li><NavLink><FaQuestionCircle /></NavLink></li>
                <li><NavLink to={''}><IoMdNotificationsOutline /></NavLink></li>
                <li><NavLink to={''}><FaRegUser /></NavLink></li>
                <li><NavLink to={''}>{userProfile.email}</NavLink></li>
                </ul>
                <a onClick={()=> setToggle(prev => !prev)} target="_blank" rel="noopener noreferrer" className='flex sm:hidden'><IoMdMenu className='text-4xl'/></a>
        </header>
        
        <div className='flex bg-green-20 flex-1 relative'>
            <aside className={`${toggle ? "w-0 " : "w-20 px-2"}  left-ful absolute md:relative z-10 shadow h-full bg-white border-t md:pl-2 py-4 overflow-hidden`}>
                {/* <a href="/account">Accounts</a> */}
                <ul>
                    <li className='my-3'>
                    <NavLink to={'/dashboard/account/'} className="block m-auto w-max">
                <MdSupervisorAccount className='text-xl' />
                </NavLink>
                    </li>
                    <li className='my-3'>
                    <NavLink to={'/dashboard/offering/'}  className="block m-auto w-max">
                <BiCustomize  className='text-xl' />
                </NavLink>

                    </li>
                    <li className='my-3 text-center'>
                    <NavLink to={'/dashboard/portfolio/'}  className="block m-auto w-max -300">
                <BsBriefcase className='text-xl' />
                </NavLink>
                    </li>
                    <li className='flex justify-center items-center '>
                    <NavLink to={'/dashboard/document/'}  className="block m-auto w-max" >
                <GrDocumentDownload  className='text-xl' />
                </NavLink>
                    </li>
                 
                </ul>

                <span className='block my-24 text-gray-700 text-gray-600 font-medium cursor-pointer'
                 onClick={()=> {dispatch(logOut()); navigate('/auth/login');  }}
                 >log out</span>

            
                
               
              
              
            </aside>

            <div className='flex-1 pr-6'>
                {/* <UserProfileContext.Provider value={{userProfile, setUserProfile}}> */}
            
                    {children}
                {/* </UserProfileContext.Provider> */}

            </div>
        </div>
       

    </div>
  )
}
export const useUserProfile = () => useContext(UserProfileContext);

export default UserLayout