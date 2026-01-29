import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const Login = ( {setUser}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            // ✅ SAVE LOGIN STATE
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);

            setUser(data.user);
            // ✅ REDIRECT
            window.location.href = "/";
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 justify-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                        <Briefcase className="h-6 w-6 text-white" />
                    </div>
                </Link>

                <h2 className="text-2xl font-bold text-center">Welcome back</h2>
                <p className="text-gray-500 text-center mb-6">
                    Sign in to your JobPortal account
                </p>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <span className="text-sm text-blue-600 cursor-pointer">
                                Forgot password?
                            </span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
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
                    <button className="border rounded-lg py-2">Google</button>
                    <button className="border rounded-lg py-2">GitHub</button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don&apos;t have an account?
                    <Link to="/register" className="text-blue-600 ml-1">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
