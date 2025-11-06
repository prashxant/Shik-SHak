import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {

  const Socials = [
    {
      logo:"/logo-black.png",
      href:"",
      alt:"X"
    },
    {
      logo:"/L.png",
      href:"",
      alt:"LinkdIn"
    },
    {
      logo:"/y.svg",
      href:"",
      alt:"YCombinator"
    }
  ]

  return (
    <div className="flex flex-col justify-between px-4">
  <div className="flex justify-between items-center">
    <Link href="/" className="flex items-center">
      <Image src="/image.png" width={20} height={38} alt="footer-logo" />
      <h1 className="text-sm px-4 font-medium">Magically simplify accounting and taxes.</h1>
    </Link>

    <div className="flex items-center gap-x-2">
      {Socials.map(({ href, logo, alt }, i) => (
        <Link href={href} key={i}>
          <Image src={logo} alt={alt} width={30} height={20} />
        </Link>
      ))}
    </div>
  </div>
   <hr className="h-px my-8 mask-x-from-70% bg-gray-200 border-0 dark:bg-gray-300/50"></hr>
  <div className='flex justify-between  text-sm text-neutral-500'>
      <h1 className="">Copyright © Finta Platform Inc. All rights reserved.</h1>
      <div className="flex justify-between gap-x-4 ">
        <Link href='/'>Terms and conditions</Link>
        <Link href='/'>Privacy policy</Link>
      </div>
  </div>
</div>
  )
}
