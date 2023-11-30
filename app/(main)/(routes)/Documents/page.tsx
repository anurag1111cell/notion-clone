"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useMutation} from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'


const documentPage = () => {
const {user} = useUser();
const create = useMutation(api.documents.create);

const onCreate =()=>{
  const promise = create({title: "untitled"})

  toast.promise(promise,{
    loading: "Creating a new note...",
    success: "New note Created! ",
    error:  "Failed to create a note."
  })
}

  return (
    <div className="h-full  justify-center flex items-center flex-col space-y-4">
      <Image 
      src="/empty.svg"
      width={300}
      height={300}
      alt='empty'
      className="dark:hidden"
      />

<Image 
      src="/empty-dark.svg"
      width={300}
      height={300}
      alt='empty'
      className="hidden dark:block"
      />

      <h2 className="text-lg font-medium">
      Welcome to {user?.firstName}&apos;s Jotion 
      </h2>
      <Button onClick={onCreate} >
        <PlusCircle className="h-4 w-4 mr-2"/>
        Create a Note
      </Button>

    </div>
  )
}

export default documentPage
