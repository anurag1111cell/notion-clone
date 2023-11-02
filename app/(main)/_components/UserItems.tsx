"use client";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUser } from '@clerk/clerk-react';
import React from 'react'


const UserItems = () => {
    const {user} = useUser();
    
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div role="button"  className=" flex items-center w-full p-3 text-sm 
            hover:bg-primary/5">
                <div className="flex flex-item gap-x-2 max-w-[150px]">
                    <Avatar className="h-4 w-4">
                        <AvatarImage src={user?.imageUrl} />

                    </Avatar>
                </div>
            </div>
             
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserItems
