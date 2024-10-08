import { useRouter } from 'next/router'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs';

type Props = {}

const SidebarLogo = (props: Props) => {
    const router = useRouter();
  return (
    <div 
    onClick={() => router.push('/')}
    className='h-14 w-14 p-4
    rounded-full 
    flex
    items-center
    justify-center
    hover:bg-blue-300
    hover:bg-opacity-10
    cursor-pointer
    transition'
    >
        <BsTwitterX size={28} color='white'/>
    </div>
  )
}

export default SidebarLogo