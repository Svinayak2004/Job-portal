import { Link } from "react-router-dom";
import { Briefcase, User } from "lucide-react";
import { useState } from "react";

const Navbar = ({ user }) => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold">JobPortal</span>
      </Link>

      {/* Center */}
      <div className="space-x-6">
        <Link to="/jobs" className="text-blue-600 font-medium">
          Find Jobs
        </Link>
      </div>

      {/* Right */}
      <div className="relative">

        {/* Not Logged In */}
        {!user && (
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600">
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Logged In → Avatar */}
        {user && (
          <>
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer"
            >
              {user.name?.charAt(0).toUpperCase()}
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg overflow-hidden">

                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>

                {user.role === "jobseeker" && (
                  <Link
                    to="/applications"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    My Applications
                  </Link>
                )}

                {user.role === "recruiter" && (
                  <>
                    <Link
                      to="/post-job"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Post Job
                    </Link>
                    <Link
                      to="/my-jobs"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Jobs
                    </Link>
                  </>
                )}

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
