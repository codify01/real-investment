'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
	IoHome,
	IoNotificationsOutline,
	IoSettingsSharp,
	IoStatsChart,
	IoWallet,
} from 'react-icons/io5';
import Link from 'next/link';

const Bottombar: React.FC = () => {
	const pathname = usePathname();

	const currentUserRole = 'investor';

	// Define menu items
	const navItems = {
		admin: [
			{
				name: 'Dashboard',
				href: '/user/admin',
				icon: <IoHome className="text-xl" />,
			},
			{
				name: 'Investments',
				href: '/user/investments',
				icon: <IoWallet className="text-xl" />,
			},
			{
				name: 'Performance',
				href: '/user/performance',
				icon: <IoStatsChart className="text-xl" />,
			},
			{
				name: 'Notifications',
				href: '/user/notifications',
				icon: <IoNotificationsOutline className="text-xl" />,
			},
			{
				name: 'Settings',
				href: '/user/settings',
				icon: <IoSettingsSharp className="text-xl" />,
			},
			// { name: 'Logout', href: '/logout', icon: <IoLogOut className="text-xl" /> },
		],
	    investor: [
        { name: 'Dashboard', href: '/user/investor', icon: <IoHome className="text-xl" /> },
        { name: 'My Investments', href: '/user/my-investments', icon: <IoWallet className="text-xl" /> },
        { name: 'Investments', href: '/user/investments', icon: <IoWallet className="text-xl" /> },
        { name: 'Performance', href: '/user/performance', icon: <IoStatsChart className="text-xl" /> },
        // { name: 'Notifications', href: '/user/notifications', icon: <IoNotificationsOutline className="text-xl" /> },
        // { name: 'Logout', href: '/login', icon: <IoLogOut className="text-xl" /> },
      ],
	};

	const navItemsToRender =
		currentUserRole === 'investor' ? navItems.admin : navItems.investor;

	return (
		<>
			<nav
				className="fixed bottom-0 left-0 w-full bg-pry text-sec shadow-lg lg:hidden"
				role="navigation"
				aria-label="Bottom navigation bar"
			>
				<div className="flex justify-around items-center py-3">
					{navItemsToRender.map((item) => (
						<Link href={item.href}
							key={item.name}
							className={`flex flex-col items-center text-sm ${
								pathname === item.href
									? 'text-white bg-pry/90 active'
									: 'text-gray-400'
							} p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pry`}
						>
							<span className="text-2xl">{item.icon}</span>
							<span className="text-[11px] font-medium">{item.name}</span>
						</Link>
					))}
				</div>
			</nav>
      <div className=' md:hidden h-[9vh]'></div>
		</>
	);
};

export default Bottombar;
