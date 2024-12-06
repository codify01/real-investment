import React from "react";
import { IoTrendingUp, IoBarChart, IoCash } from "react-icons/io5";

const Investment: React.FC = () => {
  return (
    <div className="min-h-screen  text-pry p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sec">Your Investments</h1>
        <p className="text-sec/80 text-lg">Manage and track your investments with ease</p>
      </div>

      {/* Investment Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Investments */}
        <div className="bg-sec p-6 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IoBarChart className="text-4xl text-pry" />
            <div>
              <h2 className="text-xl font-semibold text-pry">Active Investments</h2>
              <p className="text-sm text-pry/70">Investments currently generating returns</p>
            </div>
          </div>
          <span className="text-2xl font-bold text-pry">5 Active</span>
        </div>

        {/* Earnings */}
        <div className="bg-sec p-6 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IoTrendingUp className="text-4xl text-pry" />
            <div>
              <h2 className="text-xl font-semibold text-pry">Total Earnings</h2>
              <p className="text-sm text-pry/70">Overall earnings from all investments</p>
            </div>
          </div>
          <span className="text-2xl font-bold text-pry">$12,500</span>
        </div>

        {/* Withdrawable Funds */}
        <div className="bg-sec p-6 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IoCash className="text-4xl text-pry" />
            <div>
              <h2 className="text-xl font-semibold text-pry">Withdrawable Funds</h2>
              <p className="text-sm text-pry/70">Funds available for withdrawal</p>
            </div>
          </div>
          <span className="text-2xl font-bold text-pry">$3,000</span>
        </div>
      </div>

      {/* Recent Investments List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-sec">Recent Investments</h2>
        <div className="space-y-4 mt-4">
          {/* Investment Card 1 */}
          <div className="bg-sec p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow">
            <div>
              <h3 className="text-lg font-semibold text-pry">Real Estate Fund</h3>
              <p className="text-sm text-pry/70">Investment in property development</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Date: 01/12/2024</p>
              <p className="text-xl font-semibold text-pry">$10,000</p>
            </div>
          </div>

          {/* Investment Card 2 */}
          <div className="bg-sec p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow">
            <div>
              <h3 className="text-lg font-semibold text-pry">Green Energy Fund</h3>
              <p className="text-sm text-pry/70">Investing in sustainable energy</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Date: 15/11/2024</p>
              <p className="text-xl font-semibold text-pry">$7,500</p>
            </div>
          </div>

          {/* Investment Card 3 */}
          <div className="bg-sec p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow">
            <div>
              <h3 className="text-lg font-semibold text-pry">Tech Startups Fund</h3>
              <p className="text-sm text-pry/70">Funding for new tech ventures</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Date: 05/11/2024</p>
              <p className="text-xl font-semibold text-pry">$5,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Performance Graph */}
      <div className="mt-8 bg-sec p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-pry">Investment Performance</h2>
        <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg mt-4">
          <p className="text-sec">[Graph or Chart Placeholder]</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pry rounded-full p-4 shadow-xl text-sec">
        <button className="flex items-center space-x-2 text-lg font-bold">
          <IoTrendingUp className="text-2xl" />
          <span>Make New Investment</span>
        </button>
      </div>
    </div>
  );
};

export default Investment;
