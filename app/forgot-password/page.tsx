import React from "react";
import Link from "next/link";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md shadow-md bg-sec p-6 rounded-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4 text-pry">Forgot Password</h2>
        <p className="text-center text-pry mb-6">
          Enter your email to reset your password.
        </p>

        {/* Forgot Password Form */}
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

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full bg-pry text-sec hover:bg-pry/90">
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-sm text-center mt-6 text-pry">
          Remembered your password?{" "}
          <Link href="/login" className="text-pry hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
