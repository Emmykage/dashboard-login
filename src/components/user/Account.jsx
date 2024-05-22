import React from 'react'

const ProfileAccount = () => {
  return (
    <div>
        <div class="flex flex-col md:flex-row  items-center gap-10 p-3 space-y-6 md:space-y-0">
            <div
              class="w-full h-[50px] my-4 md:w-1/2 rounded-lg flex justify-between flex-col bg-gray-300 bg-cover bg-top bg-no-repeat">
              <div class="p-3">
                {/* <div class="rounded-full bg-red-400 p-2 h-10 w-10 flex justify-center items-center">
                  <img src="@/assets/img/money-wallet.png" class="h-7 w-7" alt=""/>
                </div> */}
              </div>
              <div class="border-t-[0.4px] border-black">
                <div class="px-3 py-2">
                  <p class=" text-xs text-gray-900">
                    Profits
                  </p>
                  <p class="text-4xl font-semibold text-gray-900">
                     $26,164.00
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full h-[50px] my-9 md:w-1/2 rounded-lg flex justify-between flex-col  bg-gray-300 bg-top bg-no-repeat">
              <div class="p-3">
                {/* <div class="rounded-full bg-red-400 p-2 h-10 w-10 flex justify-center items-center">
                  <img src="@/assets/img/analytics.png" class="h-7 w-7" alt=""/>
                </div> */}
              </div>
              <div class="border-t-[0.4px] border-black">
                <div class="px-3 py-2">
                  <p class="text-gray-900 text-xs">
                    Trading
                  </p>
                  <p class="text-4xl font-semibold text-gray-900">
                    $7364.00
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProfileAccount