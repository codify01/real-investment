"use client"
import React, { useState } from "react";
import { IoWallet, IoCashOutline } from "react-icons/io5";

const Withdraw: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");

  const handleWithdraw = () => {
    alert(`You are withdrawing $${amount} to ${selectedAccount}`);
    // Add withdrawal logic here
  };

  return (
    <div className="min-h-screen text-pry p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Withdraw Funds</h1>
        <IoWallet className="text-4xl text-sec" />
      </div>

      {/* Account Balance */}
      <div className="bg-sec text-pry p-6 rounded-lg shadow-lg mb-8">
        <p className="text-sm">Available Balance</p>
        <p className="text-3xl font-bold">$5,000</p>
      </div>

      {/* Withdrawal Form */}
      <div className="bg-sec p-6 rounded-lg shadow-lg space-y-6">
        {/* Select Account */}
        <label htmlFor="withdrawAccount" className="block text-pry font-medium">
          Select Withdrawal Account
        </label>
        <select
          id="withdrawAccount"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          className="w-full bg-transparent border border-pry/50 rounded-lg p-3 text-pry outline-none focus:ring-2 focus:ring-pry/80"
        >
          <option value="" disabled>
            Choose an account
          </option>
          <option value="Bank Account">Bank Account</option>
          <option value="PayPal">PayPal</option>
          <option value="Crypto Wallet">Crypto Wallet</option>
        </select>

        {/* Enter Amount */}
        <label htmlFor="withdrawAmount" className="block text-pry font-medium">
          Enter Amount
        </label>
        <input
          id="withdrawAmount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to withdraw"
          className="w-full bg-transparent border border-pry/50 rounded-lg p-3 text-pry outline-none focus:ring-2 focus:ring-pry/80"
        />

        {/* Submit Button */}
        <button
          onClick={handleWithdraw}
          disabled={!amount || !selectedAccount || Number(amount) <= 0}
          className={`w-full py-3 rounded-lg font-semibold ${
            amount && selectedAccount && Number(amount) > 0
              ? "bg-pry text-sec hover:bg-pry/80"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Withdraw Now
        </button>
      </div>

      {/* Info Section */}
      <div className="bg-sec p-4 rounded-lg shadow-lg mt-8">
        <div className="flex items-center">
          <IoCashOutline className="text-3xl text-pry mr-4" />
          <p className="text-pry/70">
            Withdrawals are processed within 1-3 business days. Ensure your account details are correct.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
