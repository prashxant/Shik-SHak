import { HomeIcon } from 'lucide-react'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

export const NavbarHome = () => {
  return (
    <div className="flex  w-[20vw] items-center justify-center gap-10">
      <Link href="/">
        <HomeIcon className="size-10 text-white" />
      </Link>
      <ModeToggle />
    </div>
  );
}
