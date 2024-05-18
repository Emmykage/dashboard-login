import React from 'react'
import { NavLink } from 'react-router-dom'
import photo from '../../assets/images/pictures/istockphoto-827305528-612x612.jpg'
import photo1 from '../../assets/images/pictures/pngegg.png'
import photo2 from '../../assets/images/pictures/pngwing.com.png'
const Offering = () => {
  return (
    <div className='max-w-7xl w-full m-auto bg--400 py-8 bg-white my-3 rounded-md px-4 md:px-10'>
        <h2 className='text-left text-2xl font-medium text-gray-700'>
        transportcointech Investment Offerings

        </h2>
            <p className='flex text-gray-500 text-sm'>
            transportcointech  is a leading crypto investment platform focused on providing access to diverse digital assets. We're committed to making cryptocurrency investment accessible and transparent for everyone..
           </p>

           
           <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo1} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-gray-700'>TcoinTech</h3> 
                <p className='text-gray-500'>Custom  Investment</p>
                <p className='text-xs text-gray-500 my-3'>We can custom-tailor an investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$500</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-gray-200 text-sm py-3 rounded my-5 text-gray-600 font-medium text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

           <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo2} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-purple-900'>TcoinTech Platinum</h3> 
                <p className='text-gray-500'>Platinum Offer</p>
                <p className='text-xs text-gray-500 my-3'>Our Platinum Offer Starts with  $1000.</p>
                <span className='text-green-600 text-2xl font-medium'>$1K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-gray-200 text-sm py-3 rounded my-5 text-gray-600 font-medium text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

           <div className='my-4 border rounded-md p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg'>
              <div className='flex-1 bg-blue-40 h-60'>
                  <img src={photo} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='flex-1 px-1 w-full md:max-w-lg py-7 text-left '>
                <h3 className='text-xl font-medium text-orange-900'>TcoinTech Gold</h3> 
                <p className='text-gray-500'>Gold Investment</p>
                <p className='text-xs text-gray-500 my-3'>Ultimate investment for you.</p>
                <span className='text-green-600 text-2xl font-medium'>$10K</span> <span className='text-sm text-gray-500'>or More </span>

                <NavLink to={'#'} className={'bg-gray-200 text-sm py-3 rounded my-5 text-gray-600 font-medium text-center block'}> LEARN MORE</NavLink>

              </div>

           </div>

           
        
    </div>
  )
}

export default Offering