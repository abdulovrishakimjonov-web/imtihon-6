import React from 'react'
import noutbuk from '../img/noutbuk.png'

const Showcese = () => {
  return (
    <section className='py-1'>
        <div className='max-w-[1224px] m-auto px-4'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8'>
                <div className='w-full md:w-auto text-center md:text-left'>
                    <h1 className='text-[64px] text-[#042352] font-semibold mb-10'>Tech Heim</h1>
                    <h3 className='text-[32px] text-[#042352] font-semibold mb-15'>"Join the <span className='text-[#F45E0C]'>digital revolution</span> "</h3>
                    <button className='w-full md:w-[288px] bg-[#F45E0C] rounded-md p-2.5 text-[#ffffff] hover:bg-amber-700 transition-all cursor-pointer'>Explore More</button>
                </div>
                <div className='w-full md:w-auto'>
                    <img src={noutbuk} alt="bu yerda noutbuk bor" className='w-full md:w-auto max-w-full h-auto' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcese