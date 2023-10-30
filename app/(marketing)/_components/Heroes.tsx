import React from 'react'
import Image from 'next/image'
const Heroes = () => {
  return (
    <div className="flex flex-col items-center
    max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px]
        sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
          src="/document.svg"
          fill
          className="object-contain dark:hidden"
          alt='documents'
            />
            <Image
          src="/document-dark.svg"
          fill
          className="object-contain hidden dark:block"
          alt='documents'
            />
        </div>
        <div className="relative w-[360px] h-[400px] hidden md:block ">
          <Image
          src="/reading.svg"
          fill
          className="object-contain dark:hidden"
          alt='reading'
            />
             <Image
          src="/reading-dark.svg"
          fill
          className="object-contain hidden dark:block"
          alt='reading'
            />
        </div>
      </div>
    </div>
  )
}

export default Heroes
