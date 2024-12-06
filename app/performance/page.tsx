import React from "react";
import { IoBarChart, IoStatsChart } from "react-icons/io5";

const Performance: React.FC = () => {
  // Example performance data
  const performanceData = {
    totalInvestment: "$50,000",
    totalReturns: "$60,000",
    roi: "20%", // Return on Investment
    performanceChartData: [10, 20, 30, 25, 40, 35, 50], // Example chart data
  };

  return (
    <div className="min-h-screen text-pry p-6">
      {/* Page Header */}
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-semibold ">Investment Performance</h1>
      </div>

      {/* Key Performance Metrics */}
      <div className="bg-sec p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-pry/70">Total Investment</p>
            <p className="text-2xl font-semibold text-pry">{performanceData.totalInvestment}</p>
          </div>
          <div>
            <p className="text-sm text-pry/70">Total Returns</p>
            <p className="text-2xl font-semibold text-pry">{performanceData.totalReturns}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-sm text-pry/70">ROI</p>
            <p className="text-2xl font-semibold text-pry">{performanceData.roi}</p>
          </div>
        </div>
      </div>

      {/* Performance Graph */}
      <div className="bg-sec p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-semibold text-pry">Performance Over Time</h2>
        <div className="mt-6 h-60 bg-gray-200 rounded-lg relative">
          {/* Placeholder for chart (you can use libraries like Chart.js, Recharts, or ApexCharts for actual graph rendering) */}
          <div className="absolute inset-0 flex items-center justify-center text-pry/70">
            <IoStatsChart className="text-4xl" />
            <span className="ml-2">Chart goes here</span>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-sec p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-xl font-semibold text-pry">Investment Summary</h3>
        <p className="mt-4 text-pry/70">
          Over the past year, your investments have shown steady growth, with a 20% return on investment. The performance
          chart above shows the monthly growth over the past 6 months. Continue monitoring your investments to maximize returns.
        </p>
      </div>

      {/* Performance Alerts */}
      <div className="bg-sec p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-xl font-semibold text-pry">Performance Alerts</h3>
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <p className="text-pry/70">Performance Improvement Alert</p>
            <button className="bg-pry text-sec py-2 px-4 rounded-lg shadow-md hover:bg-pry/80 text-sm">
              View More
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-pry/70">Risk Level Alert: Medium</p>
            <button className="bg-pry text-sec py-2 px-4 rounded-lg shadow-md hover:bg-pry/80 text-sm">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pry rounded-full p-4 shadow-xl text-sec">
        <button className="flex items-center space-x-2 text-lg font-bold">
          <IoBarChart className="text-2xl" />
          <span>View Detailed Report</span>
        </button>
      </div>
    </div>
  );
};

export default Performance;
