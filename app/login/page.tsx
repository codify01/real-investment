import React from "react";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md shadow-md bg-sec p-6 rounded-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4 text-pry">Welcome Back!</h2>
        <p className="text-center text-pry mb-6">Login to your account</p>

        {/* Login Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-pry">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-pry text-pry bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pry focus:border-pry"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-pry">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-pry text-pry bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pry focus:border-pry"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-pry hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full bg-pry text-sec hover:bg-pry/90">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-6 text-pry">OR</div>

        {/* Sign In with Google */}
        <button className="btn btn-outline w-full flex items-center justify-center gap-2 border-pry text-pry hover:bg-pry/10">
          <img
            src="/google-icon.svg"
            alt="Google Icon"
            className="h-5 w-5"
          />
          Sign in with Google
        </button>

        {/* Register Link */}
        <p className="text-sm text-center mt-6 text-pry">
          Don’t have an account?{" "}
          <Link href="/register" className="text-pry hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
