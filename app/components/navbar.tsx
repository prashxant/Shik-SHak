import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  const links = [
    {
      href:"/guide",
      title:"Guide",
    },
    {
      href:"/pricing",
      title:"Pricing",
    },
    {
      href:"/login",
      title:"Login",
    }
  ]


  return (
    <div className='flex items-center justify-between p-4'>
      <Link href='/'><Image
        draggable={false}
        loading="lazy"
        src='/logo.svg'
        alt='logo'
        height={50}
        width={50}/>
       </Link>
      <div className='flex items-center gap-8'>
         {links.map((link,index)=>(
          <Link href={link.href} key={index} className='text-black font-medium hover:text-neutral-800
          transition duration-200'>
            {link.title}
          </Link>
        ))}
        <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white shadow-lg text-shadow-md'>Start Free Trail</button>
      </div>
    </div>
  )
}
