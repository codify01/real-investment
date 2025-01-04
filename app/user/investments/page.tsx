"use client"
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch, IoTrendingUp } from "react-icons/io5";

const AvailableInvestments: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Example data for available investments
  const investments = [
    {
      id: 1,
      name: "Tech Startups Fund",
      type: "Equity",
      returnRate: "12%",
      minInvestment: "$1,000",
      description: "Invest in innovative tech startups.",
    },
    {
      id: 2,
      name: "Green Energy Fund",
      type: "Sustainable",
      returnRate: "8%",
      minInvestment: "$500",
      description: "Sustainable investment in renewable energy.",
    },
    {
      id: 3,
      name: "Real Estate Fund",
      type: "Property",
      returnRate: "15%",
      minInvestment: "$5,000",
      description: "Invest in residential and commercial properties.",
    },
    {
      id: 4,
      name: "Healthcare Ventures",
      type: "Venture Capital",
      returnRate: "10%",
      minInvestment: "$2,000",
      description: "Fund emerging healthcare businesses.",
    },
  ];

  // Filter investments based on the search query
  const filteredInvestments = investments.filter((investment) =>
    investment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-pry py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-pry">Available Investments</h1>
        <p className="text-pry/80 text-lg">Choose an investment opportunity that fits your goals</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex items-center bg-tranparent border border-pry p-3 rounded-lg shadow-md">
        <IoSearch className="text-pry text-2xl mr-3" />
        <input
          type="text"
          placeholder="Search investments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent placeholder-pry focus:outline-none"
        />
      </div>

      {/* Investment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInvestments.length === 0 ? (
          <p className="text-sec/60 text-xl">No investments found matching your criteria</p>
        ) : (
          filteredInvestments.map((investment) => (
            <div
              key={investment.id}
              className="bg-sec p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col space-y-4">
                {/* Investment Info */}
                <div>
                  <h3 className="text-xl font-semibold text-pry">{investment.name}</h3>
                  <p className="text-sm text-pry/70">{investment.description}</p>
                </div>

                {/* Investment Details */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-pry/70">Type: {investment.type}</p>
                    <p className="text-xs text-pry/70">Min Investment: {investment.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-pry">{investment.returnRate} Return</p>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-4 text-center">
                  <Link href={'investments/1'} className="bg-pry text-sec py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all w-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pry rounded-full p-4 shadow-xl text-sec">
        <button className="flex items-center space-x-2 text-lg font-bold">
          <IoTrendingUp className="text-2xl" />
          <span>Start Investing</span>
        </button>
      </div>
    </div>
  );
};

export default AvailableInvestments;
