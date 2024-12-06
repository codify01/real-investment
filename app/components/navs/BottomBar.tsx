"use client"
import React from "react";
import { usePathname } from "next/navigation"; // Next.js 13 App Router
import { IoHome, IoInformationCircle, IoStatsChart } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { BiStats } from "react-icons/bi";

const Bottombar: React.FC = () => {
  const pathname = usePathname();

  // Define menu items
  const menuItems = [
    { name: "Home", path: "/home", icon: <GoHome />, aria: "Navigate to Home" },
    {
      name: "About",
      path: "/about",
      icon: <CiCircleInfo />,
      aria: "Navigate to About",
    },
    {
      name: "Stats",
      path: "/stats",
      icon: <BiStats />,
      aria: "Navigate to Stats",
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-pry text-sec shadow-lg lg:hidden"
      role="navigation"
      aria-label="Bottom navigation bar"
    >
      <div className="flex justify-around items-center py-3">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => window.location.assign(item.path)}
            className={`flex flex-col items-center text-sm ${
              pathname === item.path
                ? "text-white bg-pry/90 active"
                : "text-gray-400"
            } p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pry`}
            aria-label={item.aria}
          >
            <span className="text-2xl">{item.icon}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Bottombar;
