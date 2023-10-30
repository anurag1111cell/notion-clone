
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const font = Poppins({
    subsets: ["latin"],
    weight:["400","600"]
})

const Logo = () => {
  return (
    <div className="hidden md:flex item-center gap-x-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40}  />
    < p className={cn("font-semibold pt-3",font.className)} >
      Jotion 
    </p>
    </div>
  )
}

export default Logo
