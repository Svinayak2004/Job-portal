import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const jobs = [
    { _id: "1", title: "Senior Frontend Developer", company: "TechCorp" },
    { _id: "2", title: "UX Designer", company: "DesignStudio" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {jobs.map(job => (
        <Link key={job._id} to={`/jobs/${job._id}`}>
          <JobCard job={job} />
        </Link>
      ))}
    </div>
  );
};

export default Jobs;
