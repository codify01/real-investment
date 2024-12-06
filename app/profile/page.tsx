import React from "react";
import { IoPersonCircle, IoLockClosed, IoPencil, IoMail, IoCall } from "react-icons/io5";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-pry">Profile</h1>
        <p className="text-lg text-pry/80">Manage your account information and settings.</p>
      </div>

      {/* Profile Card */}
      <div className="bg-sec p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center">
          <IoPersonCircle className="text-6xl text-pry" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-pry">John Doe</h2>
            <p className="text-pry/80">johndoe@example.com</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-sec p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-pry mb-4">Edit Profile</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-pry mb-2">Full Name</label>
            <div className="flex items-center border border-pry/50 rounded-lg bg-transparent p-3">
              <IoPencil className="text-pry mr-2" />
              <input
                type="text"
                className="bg-transparent w-full text-pry outline-none"
                placeholder="Enter your full name"
                defaultValue="John Doe"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-pry mb-2">Email Address</label>
            <div className="flex items-center border border-pry/50 rounded-lg bg-transparent p-3">
              <IoMail className="text-pry mr-2" />
              <input
                type="email"
                className="bg-transparent w-full text-pry outline-none"
                placeholder="Enter your email address"
                defaultValue="johndoe@example.com"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-pry mb-2">Phone Number</label>
            <div className="flex items-center border border-pry/50 rounded-lg bg-transparent p-3">
              <IoCall className="text-pry mr-2" />
              <input
                type="tel"
                className="bg-transparent w-full text-pry outline-none"
                placeholder="Enter your phone number"
                defaultValue="+1234567890"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-pry text-sec py-3 rounded-lg hover:bg-pry/90">
            Save Changes
          </button>
        </form>
      </div>

      {/* Security Section */}
      <div className="bg-sec p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold text-pry mb-4">Security Settings</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoLockClosed className="text-2xl text-pry mr-4" />
            <p className="text-pry">Change Password</p>
          </div>
          <button className="bg-pry text-sec px-4 py-2 rounded-lg hover:bg-pry/90">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
