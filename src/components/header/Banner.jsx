import React from 'react'
import Nav from './Nav'
import HeaderBg from '../../assets/images/backgrounds/ranch-bg.jpg'
import LivestockBg from '../../assets/images/backgrounds/livestock.jpg'
import LivestockBg_ from '../../assets/images/backgrounds/livestock_.jpg'
import foodTank from '../../assets/images/backgrounds/Food-Tank-28-Livestock-Farmers.jpeg'
import PigeryFarm from '../../assets/images/backgrounds/pexels-matthiaszomer-66627.jpg'
import safety from '../../assets/images/backgrounds//saftey-calf.jpg'
import { useLocation } from 'react-router-dom'
const Banner = ({children}) => {
    const location = useLocation()
    const route = location.pathname


    let header = {}

    switch (route) {
        case '/investment':
            header = {HeaderBg: LivestockBg_, title: "Investment Properties"}
            break;
        case "/compliance_regulation":
          header = {HeaderBg: safety, title: "Compliance & Regulation"}
            break;
        case '/resources':
          header = {HeaderBg, title: "Resources"}
          break;
        case '/about_us':
            header = {HeaderBg, title: "About US"}
  
            break;   
            case '/contact':
              header = {HeaderBg: foodTank, title: "Contact"}
    
              break;      
          case '/access_investment':
              header = {HeaderBg: PigeryFarm, title: "Access Investment"}
    
              break;
    
        default:
            break;
    }
    console.log( HeaderBg)

  return (
    <div className='relative'>
        <Nav/>
        <header className='h-[600px] bg-black/40'>
          <img src={header.HeaderBg} alt="header" className='w-full h-full object-cover'  />
          <div className='absolute top-0 w-full left-0 h-full z-0 flex items-center justify-center bg-black/40'>
            <div>
            <h2 className='text-3xl font-bold text-white'>          {header.title}</h2>
            <div className='flex gap-2 w-52 m-auto pt-9'>
            <div className='bg-gray-300 h-[1px] flex-1'></div>
            <div className='bg-sky-500 h-[1px] flex-1'></div>
            <div className='bg-gray-300 h-[1px] flex-1'></div>
            </div>

            </div>
          </div>

          
             
        </header>
    </div>
  )
}

export default Banner