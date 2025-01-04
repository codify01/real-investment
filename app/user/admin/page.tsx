import React from "react";
import { IoPeople, IoStatsChart, IoSettings, IoWallet } from "react-icons/io5";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-pry">Admin Dashboard</h1>
        <p className="text-lg text-pry/80">Manage and oversee all platform activities.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="card bg-sec text-pry shadow-lg p-4 rounded-md">
          <div className="flex items-center">
            <IoPeople className="text-4xl" />
            <div className="ml-4">
              <p className="text-lg font-medium">Total Users</p>
              <h2 className="text-xl font-bold">1,230</h2>
            </div>
          </div>
        </div>

        {/* Total Investments */}
        <div className="card bg-sec text-pry shadow-lg p-4 rounded-md">
          <div className="flex items-center">
            <IoWallet className="text-4xl" />
            <div className="ml-4">
              <p className="text-lg font-medium">Total Investments</p>
              <h2 className="text-xl font-bold">$500,000</h2>
            </div>
          </div>
        </div>

        {/* Earnings */}
        <div className="card bg-sec text-pry shadow-lg p-4 rounded-md">
          <div className="flex items-center">
            <IoStatsChart className="text-4xl" />
            <div className="ml-4">
              <p className="text-lg font-medium">Platform Earnings</p>
              <h2 className="text-xl font-bold">$25,000</h2>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="card bg-sec text-pry shadow-lg p-4 rounded-md">
          <div className="flex items-center">
            <IoSettings className="text-4xl" />
            <div className="ml-4">
              <p className="text-lg font-medium">Settings</p>
              <h2 className="text-xl font-bold">Manage</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Management Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Management */}
        <div className="card bg-sec text-pry shadow-md p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">User Management</h2>
          <p className="text-pry/80 mb-4">
            View, edit, or remove users from the platform.
          </p>
          <button className="btn btn-primary bg-pry text-sec hover:bg-pry/90">
            Manage Users
          </button>
        </div>

        {/* Investment Management */}
        <div className="card bg-sec text-pry shadow-md p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Investment Management</h2>
          <p className="text-pry/80 mb-4">
            Approve, reject, or monitor all investment activities.
          </p>
          <button className="btn btn-primary bg-pry text-sec hover:bg-pry/90">
            Manage Investments
          </button>
        </div>

        {/* Reports & Analytics */}
        <div className="card bg-sec text-pry shadow-md p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Reports & Analytics</h2>
          <p className="text-pry/80 mb-4">
            Generate and review detailed platform performance reports.
          </p>
          <button className="btn btn-primary bg-pry text-sec hover:bg-pry/90">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
