import React from 'react';
import Link from 'next/link';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

const Navbar: React.FC = () => {
	return (
		<>
			<header className="fixed flex items-center top-0 w-full text-sec z-20 md:ps-6 h-[8vh] bg-pry">
				<div className="navbar">
					<div className="flex-1 gap-2">
					<MdOutlineRealEstateAgent size={30}/>
						<a className="text-xl">Invest</a>
					</div>
					<div className="flex-none gap-2">
					
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									/>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-pry text-sec rounded-box z-[1] mt-3 w-52 p-2 shadow"
							>
								<li>
									<Link href={'/user/profile'} >
										Profile
									</Link>
								</li>
								<li>
									<Link href={'/user/notifications'} >
										Notifications
									</Link>
								
								</li>
								<li>
									<Link href={'/user/settings'}>Settings</Link>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			<div className="h-[7vh] bg-transparent"></div>
		</>
	);
};

export default Navbar;
