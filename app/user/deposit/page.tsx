"use client"
import React, { useState } from "react";
import { IoWallet, IoCashOutline } from "react-icons/io5";

const Deposit: React.FC = () => {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    alert(`You are depositing $${amount}`);
    // Add deposit logic here
  };

  return (
    <div className="min-h-screen  text-pry py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Make a Deposit</h1>
        <IoWallet className="text-4xl text-sec" />
      </div>

      {/* Account Balance */}
      <div className="bg-sec text-pry p-6 rounded-lg shadow-lg mb-8">
        <p className="text-sm">Current Balance</p>
        <p className="text-3xl font-bold">$5,000</p>
      </div>

      {/* Deposit Form */}
      <div className="bg-sec p-6 rounded-lg shadow-lg space-y-6">
        <label htmlFor="depositAmount" className="block text-pry font-medium">
          Enter Amount
        </label>
        <input
          id="depositAmount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to deposit"
          className="w-full bg-transparent border border-pry/50 rounded-lg p-3 text-pry outline-none focus:ring-2 focus:ring-pry/80"
        />

        <button
          onClick={handleDeposit}
          disabled={!amount || Number(amount) <= 0}
          className={`w-full py-3 rounded-lg font-semibold ${
            amount && Number(amount) > 0
              ? "bg-pry text-sec hover:bg-pry/80"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Deposit Now
        </button>
      </div>

      {/* Quick Deposit Buttons */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Quick Deposit Options</h2>
        <div className="flex justify-between space-x-4">
          {["50", "100", "200", "500"].map((preset) => (
            <button
              key={preset}
              onClick={() => setAmount(preset)}
              className="flex-1 bg-pry text-sec py-3 rounded-lg shadow-md hover:bg-pry/80 transition duration-300 font-medium"
            >
              ${preset}
            </button>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-sec p-4 rounded-lg shadow-lg mt-8">
        <div className="flex items-center">
          <IoCashOutline className="text-3xl text-pry mr-4" />
          <p className="text-pry/70">
            Deposits are securely processed, and your funds will reflect in your account instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
