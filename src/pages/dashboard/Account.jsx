import React from 'react'
import user from "../../assets/images/icons/avatar-1299805_1280.png"
import { NavLink, Outlet } from 'react-router-dom'
// import { MdReportGmailerrorred } from 'react-icons/md'
const Account = () => {
  const activeLink = "active text-gray-600 px-5 py-1 text-sm font-medium"
  const inactiveLink = "text-gray-600 px-5 py-1 text-sm font-medium"
  return (
    <div className='max-w-7xl mx-0 sm:m-auto  px-2 account'>
      <div className='flex justify-between'>
      <h2 className='text-left text-gray-900 text-2xl font-semibold my-8'><NavLink to={'dashboard/account/'} className={'hover:text-gray-500'}> My Account </NavLink> </h2>
      {/* <div className='flex-1 max-w-md flex bg-red-50/50 shadow-red-300 p-4 rounded items-center gap-8 border border-red-300 '>
      <MdReportGmailerrorred className='text-[90px] text-red-500' />

        <p className='text-justify text-red-600 text-base font-medium leading-6'>
        Your payout was declined!!! <br/>
This is because your account is now a hold only wallet. 
You can continue to hold assets or receive assets. For withdrawals, you have to contact Transportcoin support for assistance.
        </p>
      </div> */}

      </div>

      <div className='w-full bg-white shadow-md p-8 flex items-center gap-4 rounded-md'>
        <div className='h-28 w-28 shadow-md rounded-full border'>
          <img src={user} alt="user icon" className='w-full h-full p-5 text-gray-500' />
        </div>
        <div className='flex justify-between flex-1' >
        <div className=' flex-1 text-left'>

          <h3 className='text-gray-700 font-semibold text-base md:text-xl'>Nathan Devlin</h3>
          <p className='text-sm text-gray-500 text-left font-semibold'>4263410275</p>

        </div>
        <div className='flex-1'>
          <p className=' text-lg md:text-2xl font-semibold'>Balance </p>
          <span className='md:text-xl text-base text-gray-600 font-semibold'>$00.00</span>
        </div>

        </div>
      
      </div>
      <ul className='flex mt-8'>
      <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/identity">ACCOUNT</NavLink> </li>
      <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/profile">PROFILE</NavLink> </li>
      <li className='relative border-b py-2'><NavLink className={({isActive}) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/payment-method">PAYMENT METHOD</NavLink> </li>
      </ul>
      <div className='min-h-96 shadow my-4 p-4 bg-white rounded-md'>
              <Outlet/>


      </div>
    </div>
  )
}

export default Account