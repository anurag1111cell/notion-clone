import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { Ghost } from 'lucide-react'

const Footer = () => {
  return (
    <div className="flex item-center w-full p-6
    bg-background z-50">
      <Logo />

      <div className="md:ml-auto w-full justify-between md:justify-end
      flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
            Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
            Term & Condition

        </Button>
      </div>
    </div>
  )
}

export default Footer
