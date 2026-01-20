import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, User, Menu, X } from 'lucide-react';


const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <Briefcase size={20} className="text-white" />
          </div>
        </Link>

        <h2 className="text-2xl font-bold text-center">Create an account</h2>
        <p className="text-gray-500 text-center mb-6">
          Join JobPortal to find your next opportunity
        </p>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">I want to</label>
          <div className="grid grid-cols-2 gap-3">
            <button className="border rounded-lg py-2 text-sm">
              Find a Job
            </button>
            <button className="border-2 border-blue-600 text-blue-600 rounded-lg py-2 text-sm font-medium">
              Hire Talent
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 8 characters long
            </p>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" />
            <p className="text-sm text-gray-600">
              I agree to the
              <span className="text-blue-600 cursor-pointer"> Terms of Service </span>
              and
              <span className="text-blue-600 cursor-pointer"> Privacy Policy</span>
            </p>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="px-3 text-gray-400 text-sm">OR CONTINUE WITH</span>
          <div className="flex-grow border-t"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="border rounded-lg py-2">Google</button>
          <button className="border rounded-lg py-2">GitHub</button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <Link to="/login" className="text-blue-600 cursor-pointer ml-1">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
