'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoHome, IoStatsChart, IoSettingsSharp, IoWallet, IoTrendingUp, IoNotificationsOutline, IoLogOut } from 'react-icons/io5';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentUserRole = 'admin'; // Simulated current user role (admin or investor)

  // Navigation items for admin and investor
  const navItems = {
    admin: [
      { name: 'Dashboard', href: '/admin', icon: <IoHome className="text-xl" /> },
      { name: 'Investments', href: '/investments', icon: <IoWallet className="text-xl" /> },
      { name: 'Performance', href: '/performance', icon: <IoStatsChart className="text-xl" /> },
      { name: 'Notifications', href: '/notifications', icon: <IoNotificationsOutline className="text-xl" /> },
      { name: 'Settings', href: '/settings', icon: <IoSettingsSharp className="text-xl" /> },
      { name: 'Logout', href: '/logout', icon: <IoLogOut className="text-xl" /> },
    ],
    investor: [
      { name: 'Dashboard', href: '/investor', icon: <IoHome className="text-xl" /> },
      { name: 'Investments', href: '/investments', icon: <IoWallet className="text-xl" /> },
      { name: 'Performance', href: '/performance', icon: <IoStatsChart className="text-xl" /> },
      { name: 'Notifications', href: '/notifications', icon: <IoNotificationsOutline className="text-xl" /> },
      { name: 'Logout', href: '/logout', icon: <IoLogOut className="text-xl" /> },
    ],
  };

  const navItemsToRender = currentUserRole === 'admin' ? navItems.admin : navItems.investor;

  return (
    <div className="drawer lg:drawer-open h-screen fixed left-0 hidden lg:block">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center"></div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-pry text-white w-80 p-4 h-full space-y-3">
          {/* Sidebar content */}
          {navItemsToRender.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center space-x-3">
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
