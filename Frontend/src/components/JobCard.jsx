import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  // ✅ Safety check (VERY IMPORTANT)
  if (!job) return null;

  return (
    <div className="bg-white border rounded-lg p-5 hover:shadow transition">
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-600 text-sm">{job.company}</p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">
            <span>{job.location}</span>
            <span>{job.salary}</span>
            <span>{job.posted}</span>
          </div>
        </div>

        <span className="text-sm text-gray-500">
          {job.applicants} applicants
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {job.skills?.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="inline-block mt-4 text-blue-600 font-medium"
      >
        View Details →
      </Link>
    </div>
  );
};

export default JobCard;
