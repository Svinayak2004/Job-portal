const JobCard = ({ job, user }) => {
  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600">
        {job.company} • {job.location}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-3">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-gray-700 mt-3">
        {job.salary || "Salary: Negotiable"}
      </p>

      {/* Actions */}
      <div className="mt-4">
        {user?.role === "jobseeker" && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Apply
          </button>
        )}

        {user?.role === "recruiter" && (
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">
            View Applicants
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
