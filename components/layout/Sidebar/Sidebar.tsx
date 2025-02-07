import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa6'
import { BiLogoOkRu, BiLogOut } from 'react-icons/bi'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import SidebarTweetButton from './SidebarTweetButton'
import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'
type Props = {}

const Sidebar = (props: Props) => {
  const { data: currentUser} = useCurrentUser();
  const items = [
    {
      label: 'home',
      href: '/',
      icon: BsHouseFill
    },
    {
      label: 'Notifications',
      href: 'notifications',
      icon: BsBellFill,
      auth: true
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: FaUser,
      auth: true
    }
  ];
  return (
    <div className='col-span-1 h-full pr-6 md:pr-6'>
        <div className='flex flex-col items-end'>
          <div className='space-y-2 lg:w-[100%]'>
              <SidebarLogo/>
              {items.map((item)=> (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  auth= {item.auth}
                  />
              ))
              }
              {currentUser && (
                 <SidebarItem onClick={()=>signOut()} icon={BiLogOut} label='Logout'/>
              )}
              <SidebarTweetButton />
          </div>
        </div>
    </div>
  )
}

export default Sidebar