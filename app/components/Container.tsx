import React from 'react'
import { cn } from '@/lib/utils'

export const Container = ({className,children}:{
  className?:string,
  children:React.ReactNode
}) => {
  return (
    <div className={cn("max-w-4xl mx-auto px-4 md:py-8",className)}>{children}</div>
  )
}
