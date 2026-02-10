import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {

  const links =[
   {
     href:"/",
      title:"Guide"
   },
    {
     href:"/",
      title:"Pricing"
   },
   {
     href:"/",
      title:"Login"
   }
  ]

  return (
   <div className="flex pt-5 justify-between items-center  ">
    <Link href="/">
      <Image
      className='flex justify-center items-center'
      height={100}
      width={100}
      draggable
      loading="lazy"
      src='/logo.svg'
      alt="Finta Logo"/>
    </Link>
    <div className='flex items-center gap-8'>
      {links.map((link,index) =>(
        <Link className='font-medium text-neutral-800 cursor-pointer hover:text-neutral-500 transtiton duration-200'
        href={link.href} key={index}>
          {link.title}
        </Link>
      ))}
      <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide'>Start free trail</button>
    </div>
   </div>
  )
}


