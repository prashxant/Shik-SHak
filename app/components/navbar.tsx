import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <Link href="/finta">
      <Image draggable={false} loading="lazy" src="/logo.svg" alt='Logo' height={50} width={50}/>
      </Link>

    </div>
  )
}
