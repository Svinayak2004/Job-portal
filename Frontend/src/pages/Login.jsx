import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, User, Menu, X } from 'lucide-react';




const Login = () => {
    return (
        <div  className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                        <Briefcase className="h-6 w-6 text-white" />
                    </div>
                </Link>

                <h2 className="text-2xl font-bold text-center">Welcome back</h2>
                <p className="text-gray-500 text-center mb-6">
                    Sign in to your JobPortal account
                </p>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <span className="text-sm text-blue-600 cursor-pointer">
                                Forgot password?
                            </span>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t"></div>
                    <span className="px-3 text-gray-400 text-sm">OR CONTINUE WITH</span>
                    <div className="flex-grow border-t"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <button className="border rounded-lg py-2 flex justify-center items-center gap-2">
                        Google
                    </button>
                    <button className="border rounded-lg py-2 flex justify-center items-center gap-2">
                        GitHub
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don&apos;t have an account?
                    <Link to="/register"><span className="text-blue-600 cursor-pointer ml-1">Sign up</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
