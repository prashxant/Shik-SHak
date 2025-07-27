import React from 'react'

export const Hero = () => {
  return (
    <div className='p-4 py-6 items-center flex flex-col w-ful my-20 '>
      <button className='border px-4 py-1 border-neutral-300 bg-neutral-300 text-neutral-900 rounded-full  hover:bg-red-500 transition duration-200'>
        What are early stage tax requirements?
      </button>

    <div>
        <h1 className='font-medium mt-10 text-7xl text-black tracking-tighter text-center'>
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className='w-2xl mx-auto text-md  text-neutral-600 text-center mt-4'>
          Automated bookkeeping, effortless tax filing, real‑time insights. <br />
           Set up in 10 mins. Back to building by 6:31pm.
        </p>
        <div className="flex  justify-center items-center gap-4 mt-8">
          <button className='bg-[#2579F4] cursor-pointer px-4 py-2 rounded-lg text-white shadow-lg text-shadow-md'>Start Free Trial</button>
           <button className='cursor-pointer px-4 py-2 rounded-lg text-slate-600 text-shadow-md'>Pricing &rarr;</button>

        </div>
    </div>
    </div>
  )
}
