import React from "react";
import { IoLockClosed, IoKey, IoFingerPrint } from "react-icons/io5";

const Security: React.FC = () => {
  return (
    <div className="min-h-screen text-pry py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Security</h1>
        <p className="text-sec/80">Protect your account and manage security settings</p>
      </div>

      {/* Security Options */}
      <div className="space-y-6">
        {/* Change Password */}
        <div className="flex items-center justify-between bg-sec p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <IoKey className="text-2xl text-pry" />
            <div>
              <h2 className="text-lg font-bold">Change Password</h2>
              <p className="text-sm text-pry/70">Update your account password</p>
            </div>
          </div>
          <button className="text-pry text-sm font-medium">Change</button>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between bg-sec p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <IoFingerPrint className="text-2xl text-pry" />
            <div>
              <h2 className="text-lg font-bold">Two-Factor Authentication</h2>
              <p className="text-sm text-pry/70">Enhance account security with 2FA</p>
            </div>
          </div>
          <button className="text-pry text-sm font-medium">Enable</button>
        </div>

        {/* Login Activity */}
        <div className="flex items-center justify-between bg-sec p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <IoLockClosed className="text-2xl text-pry" />
            <div>
              <h2 className="text-lg font-bold">Login Activity</h2>
              <p className="text-sm text-pry/70">View devices and login locations</p>
            </div>
          </div>
          <button className="text-pry text-sm font-medium">View</button>
        </div>
      </div>
    </div>
  );
};

export default Security;
