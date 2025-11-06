import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  const links =[
   {
     href:"/q",
      title:"One"
   },
   {
     href:"/qq",
      title:"Two"
   },
   {
     href:"/qqq",
      title:"Three"
   }
  ]
  return (
   <div className="flex justify-between items-center p-4 ">
    <Link href="/">
      <Image
      height={100}
      width={100}
      draggable
      loading="lazy"
      src='/logo.svg'
      alt="Finta Logo"/>
    </Link>
    <div className='flex items-center gap-8'>
      {links.map((link,index) =>(
        <Link className='font-medium text-neutral-800 hover:text-neutral-500 transtiton duration-200'
        href={link.href} key={index}>
          {link.title}
        </Link>
      ))}
    </div>
   </div>
  )
}
