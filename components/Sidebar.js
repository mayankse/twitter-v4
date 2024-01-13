import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import {HomeIcon} from '@heroicons/react/solid'
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    <div>
    {/* Twitter Logo*/}
    <div className='hoverEffect'>
        <Image width={50} alt=""  height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png" />
    </div>
    {/*Menu */}
    <div className=' hidden sm:flex flex-col'>
    <SidebarMenuItem text="Home" Icon={HomeIcon} active></SidebarMenuItem>
    <SidebarMenuItem text="Explore" Icon={HashtagIcon}></SidebarMenuItem>
    <SidebarMenuItem text="Notifications" Icon={BellIcon}></SidebarMenuItem>
    <SidebarMenuItem text="Messages" Icon={InboxIcon}></SidebarMenuItem>
    <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}></SidebarMenuItem>
    <SidebarMenuItem text="Lists" Icon={ClipboardIcon}></SidebarMenuItem>
    <SidebarMenuItem text="Profile" Icon={UserIcon}></SidebarMenuItem>
    <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}></SidebarMenuItem>
    </div>
    {/*Button */}
    <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>
    
    {/* Mini-Profile*/}
    <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
    <Image src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" width={50} height={50} alt=""/>
    <div className=''>
        <h4>Mayank Setiya</h4>
        <p>@mayanksetiya</p>
    </div>
    <DotsHorizontalIcon  className='h-5'/>
    </div>
    </div>
  )
}
