import React from 'react'
import { IoWallet } from 'react-icons/io5'

const InvestmentCard = () => {
  return (
    <div className="card shadow border border-pry bg-white hover:shadow-lg transition-shadow duration-300">
    <div className="card-body">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-pry">Green Energy Fund</h3>
        <span className="badge badge-success text-xs py-2 px-4">Active</span>
      </div>
      <p className="text-pry/70 text-sm mb-2">
        <strong>Date:</strong> 01/12/2024
      </p>
      <p className="text-pry/70 text-sm mb-2">
        <strong>Amount:</strong> $10,000
      </p>
      <div className="flex items-center text-pry mt-4">
        <div className="icon bg-pry text-sec p-2 rounded-full mr-2">
          <IoWallet className="text-lg" />
        </div>
        <span className="text-sm">Energy Investment</span>
      </div>
    </div>
  </div>
  )
}

export default InvestmentCard