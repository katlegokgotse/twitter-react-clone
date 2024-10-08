import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa6'
import { BiLogoOkRu, BiLogOut } from 'react-icons/bi'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import SidebarTweetButton from './SidebarTweetButton'

const items = [
  {
    label: 'home',
    href: '/',
    icon: BsHouseFill
  },
  {
    label: 'Notifications',
    href: 'notifications',
    icon: BsBellFill
  },
  {
    label: 'Profile',
    href: '/users/123',
    icon: FaUser
  }
]
type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
          <div className='space-y-2 lg:w-[230px]'>
              <SidebarLogo/>
              {items.map((item)=> (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  />
              ))
              }
              <SidebarItem onClick={()=>{}} icon={BiLogOut} label='Logout'/>
              <SidebarTweetButton />
          </div>
        </div>
    </div>
  )
}

export default Sidebar