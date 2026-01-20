const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600">JobPortal</h3>
          <p className="text-gray-600 mt-2">
            Find your dream job or the perfect candidate. Connecting talent with opportunities.
          </p>
        </div>

        {/* Job Seeker */}
        <div>
          <h4 className="font-semibold mb-2">For Job Seekers</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Browse Jobs</li>
            <li>My Applications</li>
            <li>Profile</li>
          </ul>
        </div>

        {/* Recruiter */}
        <div>
          <h4 className="font-semibold mb-2">For Recruiters</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Post Job</li>
            <li>My Jobs</li>
            <li>Applicants</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-gray-600 space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t text-gray-500">
        © 2026 JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
  