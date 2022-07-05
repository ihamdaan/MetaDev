import React from 'react'

function SecondRightComponent() {
  return (
    <div className='flex justify-between m-1 w-[454.72px] h-full bg-white border border-black rounded-lg'>
        <div className='w-[213.28px] border-r border-black'>
            <img
                className='w-[213.28px] h-full object-cover object-center rounded-r-[100px]' 
                src="https://collabbi-dashboard-5yzhsg6es-ankit-cg22.vercel.app/images/career-accelerator.png" 
                alt="poster_img" 
            />
        </div>

        <div className='w-[241px] p-2 flex flex-col justify-between'>
            <div className='inter_font font-semibold '>
                From pearly whites to sparkly delights
            </div>

            <div className='text-[12px] inter_font text-gray-700'>
                Even if I had the means , I would still shoot on the iphone .Malick Kobe is one the rising talents.
            </div>

            <div class="flex justify-between items-end">
                <div class="font-semibold text-[15px] cursor-pointer text-base leading-5">
                    Shop Now
                </div>
                <div class="flex">
                    <div class=" px-[10px] py-[6px] bg-black text-white border-[1px] border-black mr-[10px] rounded-[0.5rem] cursor-pointer">
                        <svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="white" class="h-[20px]"><path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"></path></svg>
                    </div>
                    <div class=" px-[10px] py-[6px] border-[1px] border-black mr-[10px] rounded-[0.5rem] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="black" class="h-[20px]"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondRightComponent