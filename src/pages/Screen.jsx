import React from 'react'
import bg from '../assets/images/backgrounds/pure-drive-2017-racquets-banner.jpg'
import { NavLink } from 'react-router-dom'

const Screen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-screen">
        <NavLink to={'/auth/login'} className={'px-3 py-2 border bg-purple-300 rounded-md text-gray-900 text-lg font-medium hover:scale-110 transition-all duration-300 ease-out'}>
            Login
        </NavLink>

        
    </div>
  )
}

export default Screen