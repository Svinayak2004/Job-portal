import { Link } from "react-router-dom";
import { Briefcase, User, Menu, X } from 'lucide-react';

const Navbar = ({ user }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold text-foreground">JobPortal</span>
      </Link>
      {/* Center */}
      <div className="space-x-6">
        <Link to="/jobs" className="text-blue-600 font-medium">
          Find Jobs
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        {!user && (
          <>
            <Link to="/login" className="text-gray-600">
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Sign Up
            </Link>
          </>
        )}

        {user?.role === "jobseeker" && (
          <>
            <Link to="/applications">My Applications</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/logout" className="text-red-500">
              Logout
            </Link>
          </>
        )}

        {user?.role === "recruiter" && (
          <>
            <Link to="/post-job">Post Job</Link>
            <Link to="/my-jobs">My Jobs</Link>
            <Link to="/logout" className="text-red-500">
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
