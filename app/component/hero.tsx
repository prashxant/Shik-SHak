import Image from "next/image"


 export const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
        <button className="border px-4 py-1 cursor-pointer rounded-full border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200 transition duration-200 shadow-sm">
          What are early stage requirements?
        </button>

        <div >
          <h1 className="font-medium mt-10  text-7xl text-black tracking-tighter text-center">
            Magically simplify <br /> accounting and taxes
          </h1>
          <p className="max-w-2xl mx-auto text-center text-neutral-500 mt-4 text-lg">Automated bookkeeping, effortless tax filing, real‑time insights. <br /> Set up in 10 mins. Back to building by 7:29pm.</p>
        </div>
        <div className="flex items-center gap-4 mt-10">
           <button className='bg-[#2579F4] cursor-pointer px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide'>Get started</button>
             <button className='px-4 py-2 cursor-pointer rounded-lg text-black   text-shadow-md tracking-wide'>Pricing &rarr;</button>
        </div>
        <div className=" max-w-5xl mx-auto mt-30">
            <Image className="rounded-xl w-full object-cover object-left-top border-neutral-200 shadow-md mask-b-from-0% to-100%"src='/hh.webp' alt="dashboard" height={1000} width={1500}/>
        </div>

    </div>
  )
}


