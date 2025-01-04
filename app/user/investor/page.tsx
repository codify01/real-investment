import React from 'react';
import { IoWallet, IoBarChart, IoTrendingUp, IoCash } from 'react-icons/io5';
import InvestmentCard from '../../components/cards/InvestmentCard';
import SummaryCard from '@/app/components/cards/SummaryCard';

interface InvestmentSummary {

}

const InvestorDashboard: React.FC = () => {


	return (
		<div className="py-6 min-h-screen overflow-y-auto">
			{/* Dashboard Header */}
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-pry">Welcome, Investor!</h1>
				<p className="text-pry/70">Here’s an overview of your investments.</p>
			</div>

			{/* Investment Summary Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				{/* Total Investment */}
				<SummaryCard icon={<IoWallet className="text-4xl" />} title='Total Investment' figure='$50,000'/>

				{/* Earnings */}
				<div className="card shadow-md bg-pry text-sec">
					<div className="card-body flex items-center">
						<IoTrendingUp className="text-4xl" />
						<div className="ml-4 text-center">
							<p className="font-bold">Total Earnings</p>
							<h2 className="text-xl">$7,500</h2>
						</div>
					</div>
				</div>

				{/* Active Investments */}
				<div className="card shadow-md bg-pry text-sec">
					<div className="card-body flex items-center">
						<IoBarChart className="text-4xl" />
						<div className="ml-4 text-center">
							<p className="font-bold">Active Investments</p>
							<h2 className="text-xl">12</h2>
						</div>
					</div>
				</div>

				{/* Withdrawable Funds */}
				<div className="card shadow-md bg-pry text-sec">
					<div className="card-body flex items-center">
						<IoCash className="text-4xl" />
						<div className="ml-4 text-center">
							<p className="font-bold">Withdrawable Funds</p>
							<h2 className="text-xl">$1,200</h2>
						</div>
					</div>
				</div>
			</div>

			{/* Recent Investments as Cards */}
			<div className="mb-8">
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-bold text-pry mb-4">
						Recent Investments
					</h2>
					<h6 className="text-pry/90">view all</h6>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Investment Card 1 */}
					<InvestmentCard />
					<InvestmentCard />
					<InvestmentCard />
				</div>
			</div>

			{/* Performance Chart Placeholder */}
			<div className="card bg-white shadow-md">
				<div className="card-body">
					<h2 className="card-title text-pry">Performance Overview</h2>
					<div className="h-64 bg-gray-100 flex items-center justify-center">
						<p className="text-pry/70">[Chart Placeholder]</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestorDashboard;
