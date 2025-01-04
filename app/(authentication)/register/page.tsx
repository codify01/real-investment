"use client"
import React from "react";
import Link from "next/link";
import { FormikValues, useFormik } from "formik";

const RegisterPage: React.FC = () => {

  const formik = useFormik(
    {
      initialValues:{
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },

      onSubmit: (values)=>{
        console.table(values)
      }
    }
  )
  
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md shadow-md bg-sec p-6 rounded-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4 text-pry">Create an Account</h2>
        <p className="text-center text-pry mb-6">Sign up to get started</p>

        {/* Registration Form */}
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-pry">
              Full Name
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 border border-pry text-pry bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pry focus:border-pry"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-pry">
              Email Address
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              type="email"
              name="email"
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
              onChange={formik.handleChange}
              value={formik.values.password}
              id="password"
              type="password"
              name="password"
              placeholder="Enter a secure password"
              className="w-full mt-1 px-4 py-2 border border-pry text-pry bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pry focus:border-pry"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-pry">
              Confirm Password
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full mt-1 px-4 py-2 border border-pry text-pry bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-pry focus:border-pry"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full bg-pry text-sec hover:bg-pry/90">
            Register
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
          Sign up with Google
        </button>

        {/* Login Link */}
        <p className="text-sm text-center mt-6 text-pry">
          Already have an account?{" "}
          <Link href="/login" className="text-pry hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
