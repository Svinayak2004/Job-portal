import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <div className="p-6 text-center">Job not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Header */}
          <div className="bg-white p-6 rounded-lg border">
            <Link to="/jobs" className="text-sm text-blue-600">
              ← Back to Jobs
            </Link>

            <h1 className="text-2xl font-bold mt-2">{job.title}</h1>
            <p className="text-gray-600">{job.company}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
              <span>{job.location}</span>
              <span>{job.salary}</span>
              <span>Posted {job.posted}</span>
              <span>{job.applicants} applicants</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="font-semibold text-lg mb-2">Job Description</h2>
            <p className="text-gray-600 mb-4">{job.description}</p>

            <h3 className="font-semibold mb-2">Requirements</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-4 mb-2">What We Offer</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              {job.benefits.map((ben, i) => (
                <li key={i}>{ben}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border text-center">
            <Link
              to={`/apply/${job.id}`}
              className="block bg-blue-600 text-white py-3 rounded-lg font-medium"
            >
              Apply Now
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Apply directly on JobPortal
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">About {job.company}</h3>
            <p className="text-gray-600 text-sm">{job.companyInfo}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;
