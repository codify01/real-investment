import React from "react";
import { IoArrowBack, IoTrendingUp } from "react-icons/io5";

const InvestmentDetails: React.FC = () => {
  // Example investment data
  const investment = {
    id: 1,
    name: "Tech Startups Fund",
    type: "Equity",
    returnRate: "12%",
    minInvestment: "$1,000",
    totalRaised: "$50,000",
    description:
      "Invest in cutting-edge technology startups focused on innovation and growth. Our portfolio includes high-potential companies in sectors such as AI, IoT, and blockchain. With a proven track record, we're aiming to provide high returns for early investors.",
    keyMetrics: {
      projectedReturn: "$120,000",
      investmentDuration: "3 years",
      riskLevel: "Medium",
    },
    investmentLink: "/invest/tech-startups-fund", // Link to start investing
  };

  return (
    <div className="min-h-screen text-pry p-6">
      {/* Back Button */}
      <div className="flex items-center mb-8">
        <a href="/investments" className="text-sec hover:text-pry flex items-center space-x-2">
          <IoArrowBack className="text-2xl" />
          <span className="text-lg">Back to Investments</span>
        </a>
      </div>

      {/* Investment Info */}
      <div className="flex flex-col space-y-8">
        <div className="bg-sec p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-pry">{investment.name}</h1>
          <p className="text-sm text-pry/70">{investment.description}</p>

          {/* Key Metrics */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-pry/70">Investment Type</p>
              <p className="text-lg font-semibold text-pry">{investment.type}</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Min Investment</p>
              <p className="text-lg font-semibold text-pry">{investment.minInvestment}</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Total Raised</p>
              <p className="text-lg font-semibold text-pry">{investment.totalRaised}</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Projected Return</p>
              <p className="text-lg font-semibold text-pry">{investment.keyMetrics.projectedReturn}</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Duration</p>
              <p className="text-lg font-semibold text-pry">{investment.keyMetrics.investmentDuration}</p>
            </div>
            <div>
              <p className="text-xs text-pry/70">Risk Level</p>
              <p className="text-lg font-semibold text-pry">{investment.keyMetrics.riskLevel}</p>
            </div>
          </div>

          {/* Investment Action */}
          <div className="mt-8 text-center">
            <a
              href={investment.investmentLink}
              className="bg-pry text-sec py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all w-full"
            >
              Invest Now
            </a>
          </div>
        </div>

        {/* Progress Bar for Funding Status */}
        <div className="bg-sec p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-pry">Funding Progress</h3>
          <div className="mt-4 h-2 bg-pry/50 rounded-full">
            <div
              className="h-2 bg-pry rounded-full"
              style={{ width: "60%" }} // Example progress bar width (60%)
            ></div>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-sm text-pry/70">Raised: {investment.totalRaised}</span>
            <span className="text-sm text-pry/70">Target: $100,000</span>
          </div>
        </div>

        {/* Investment Benefits */}
        <div className="bg-sec p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-pry">Why Invest?</h3>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>High potential returns in the rapidly growing tech sector</li>
            <li>Expert team with a track record of successful exits</li>
            <li>Low entry barrier with a minimum investment of $1,000</li>
            <li>Access to exclusive investment opportunities</li>
          </ul>
        </div>
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

export default InvestmentDetails;
