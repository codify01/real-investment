'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoHome, IoStatsChart, IoSettingsSharp, IoWallet,IoNotificationsOutline, IoLogOut } from 'react-icons/io5';

const Sidebar: React.FC = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentUserRole = 'investor' 

  // Navigation items for admin and investor
  const navItems = {
    admin: [
      { name: 'Dashboard', href: '/user/admin', icon: <IoHome className="text-xl" /> },
      { name: 'Investments', href: '/user/investments', icon: <IoWallet className="text-xl" /> },
      { name: 'Performance', href: '/user/performance', icon: <IoStatsChart className="text-xl" /> },
      { name: 'Notifications', href: '/user/notifications', icon: <IoNotificationsOutline className="text-xl" /> },
      { name: 'Settings', href: '/user/settings', icon: <IoSettingsSharp className="text-xl" /> },
      { name: 'Logout', href: '/logout', icon: <IoLogOut className="text-xl" /> },
    ],
    investor: [
      { name: 'Dashboard', href: '/user/investor', icon: <IoHome className="text-xl" /> },
      { name: 'My Investments', href: '/user/my-investments', icon: <IoWallet className="text-xl" /> },
      { name: 'Investments', href: '/user/investments', icon: <IoWallet className="text-xl" /> },
      { name: 'Performance', href: '/user/performance', icon: <IoStatsChart className="text-xl" /> },
      { name: 'Notifications', href: '/user/notifications', icon: <IoNotificationsOutline className="text-xl" /> },
      { name: 'Logout', href: '/login', icon: <IoLogOut className="text-xl" /> },
    ],
  };

  const navItemsToRender = currentUserRole === 'investor' ? navItems.admin : navItems.investor;

  return (
    <div className="drawer lg:drawer-open h-screen fixed left-0 hidden lg:block bg-pry w-[16.6667%]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center"></div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu text-white p-4 h-full space-y-3">
          {/* Sidebar content */}
          {navItemsToRender.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center space-x-3">
                {item.icon}
                <span className='text-xl'>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
