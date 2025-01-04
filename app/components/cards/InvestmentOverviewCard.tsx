import React from 'react'
import { IoBarChart } from 'react-icons/io5'

const InvestmentOverviewCard = () => {
  return (
      <div className="bg-sec border border-pry p-6 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <IoBarChart className="text-4xl text-pry" />
                <div>
                  <h2 className="text-xl font-semibold text-pry">Active Investments</h2>
                  <p className="text-sm text-pry/70">Investments currently generating returns</p>
                </div>
              </div>
              <span className="text-xl font-bold text-pry">5 Active</span>
            </div>
  )
}

export default InvestmentOverviewCard