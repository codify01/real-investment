import React from "react";
import { IoNotifications, IoLockClosed, IoPerson, IoLogOut } from "react-icons/io5";

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen text-pry py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sec/80">Manage your preferences and account settings</p>
      </div>

      {/* Settings Options */}
      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="flex items-center justify-between bg-sec p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <IoPerson className="text-2xl text-pry" />
            <div>
              <h2 className="text-lg font-bold">Profile</h2>
              <p className="text-sm text-pry/70">Update your personal information</p>
            </div>
          </div>
          <button className="text-pry text-sm font-medium">Edit</button>
        </div>

        {/* Notification Settings */}
        <div className="flex items-center justify-between bg-sec p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <IoNotifications className="text-2xl text-pry" />
            <div>
              <h2 className="text-lg font-bold">Notifications</h2>
              <p className="text-sm text-pry/70">Manage notification preferences</p>
            </div>
          </div>
          <button className="text-pry text-sm font-medium">Configure</button>
        </div>

        {/* Security Settings */}
        <div className="flex items-center justify-between bg-sec p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <IoLockClosed className="text-2xl text-pry" />
            <div>
              <h2 className="text-lg font-bold">Security</h2>
              <p className="text-sm text-pry/70">Change your password and secure your account</p>
            </div>
          </div>
          <button className="text-pry text-sm font-medium">Update</button>
        </div>

        {/* Logout */}
        <div className="flex items-center justify-between bg-sec p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <IoLogOut className="text-2xl text-red-600" />
            <div>
              <h2 className="text-lg font-bold text-red-600">Logout</h2>
              <p className="text-sm text-pry/70">Sign out of your account</p>
            </div>
          </div>
          <button className="text-red-600 text-sm font-medium">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
