import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import FollowBar from './FollowBar/FollowBar'

interface LayoutProps{
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-screen bg-black'>
        <div className='container h-full mx-auto xl:px-20 max-w-[100%]'>
            <div className='grid grid-cols-4 w-[100%] h-full'>
                <Sidebar/>
                <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800'>
                    {children}
                </div>
                <FollowBar />
            </div>
        </div>
    </div>
  )
}

export default Layout