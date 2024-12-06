import React from "react";
import { IoSwapVertical, IoArrowDown, IoArrowUp } from "react-icons/io5";

const transactions = [
  {
    id: 1,
    type: "Deposit",
    amount: "$1,000",
    date: "2024-12-01",
    status: "Completed",
  },
  {
    id: 2,
    type: "Withdrawal",
    amount: "$500",
    date: "2024-12-02",
    status: "Pending",
  },
  {
    id: 3,
    type: "Investment",
    amount: "$2,000",
    date: "2024-12-03",
    status: "Completed",
  },
];

const TransactionPage: React.FC = () => {
  return (
    <div className="min-h-screen  text-pry p-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Transaction History</h1>
        <IoSwapVertical className="text-4xl text-sec" />
      </div>

      {/* Transaction List */}
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center bg-sec p-4 rounded-lg shadow-md"
          >
            {/* Transaction Icon */}
            <div className="flex items-center space-x-3">
              <div
                className={`p-3 rounded-full ${
                  transaction.type === "Deposit"
                    ? "bg-green-100 text-green-600"
                    : transaction.type === "Withdrawal"
                    ? "bg-red-100 text-red-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {transaction.type === "Deposit" ? (
                  <IoArrowDown className="text-xl" />
                ) : transaction.type === "Withdrawal" ? (
                  <IoArrowUp className="text-xl" />
                ) : (
                  <IoSwapVertical className="text-xl" />
                )}
              </div>
              {/* Transaction Info */}
              <div>
                <h2 className="text-lg font-medium">{transaction.type}</h2>
                <p className="text-sm text-pry/70">{transaction.date}</p>
              </div>
            </div>

            {/* Transaction Amount and Status */}
            <div className="text-right">
              <p className="text-lg font-bold">{transaction.amount}</p>
              <p
                className={`text-sm font-medium ${
                  transaction.status === "Completed"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-pry/70">
          Showing your most recent transactions. For more details, contact
          support.
        </p>
      </div>
    </div>
  );
};

export default TransactionPage;
