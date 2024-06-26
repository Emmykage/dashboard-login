import React from 'react'

const History = () => {
  return (
    <div class="inline-block min-w-full py-2 align-middle">
    <table class="min-w-full bg-white border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
      <thead>
        <tr>
          <th scope="col" class="sticky top-0 z-10 border-b border-gray-200/50 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Name</th>
          <th scope="col" class="sticky top-0  z-10 border-b border-gray-200/50 bg-white bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter">Amount</th>
          <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-200/50 bg-white bg-opacity-75 px-6 py-3.5  text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter sm:table-cell">Amount</th>
          <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-200/50 bg-white bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter lg:table-cell">Payment Method</th>
          <th scope="col" class="sticky top-0 z-10 border-b border-gray-200/50 bg-white bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold text-gray-600 backdrop-blur backdrop-filter">Status</th>
          <th scope="col" class="sticky top-0 z-10 border-b border-gray-200/50 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
            
      <tbody>
      <tr>
        <td class="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">

        <p class="font-medium text-gray-600 leading-5"> </p>
        </td>
        <td class="whitespace-nowrap border-b border-gray-200 hidden px-3 py-4 text-sm text-gray-900 font-normal sm:table-cell capitalize"></td>
        
        <td class="whitespace-nowrap border-b border-gray-200 hidden px-3 py-3 text-sm text-gray-600 sm:table-cell text-left"></td>
        <td class="whitespace-nowrap border-b border-gray-200 hidden px-3 py-3 lg:table-cell text-sm text-gray-600/90 font-normal"></td>

        <td class="whitespace-nowrap border-b border-gray-200 px-3 py-3 text-sm font-normal text-sm text-gray-600/90 "><span class="flex items-center"> <p class="font-normal">Completed</p> </span></td>
    
        <td class="relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-right text-sm sm:pr-8 lg:pr-8">
       
        </td>
      </tr>
      </tbody>     
    </table>
  </div>  
  )
}

export default History