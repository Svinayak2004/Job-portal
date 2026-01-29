import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import { jobs } from "../data/jobs";

const Home = () => {


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <div className="text-center py-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-500 mt-2">
          Search through thousands of job listings from top companies worldwide
        </p>

        <div className="mt-6 flex gap-2 max-w-3xl mx-auto bg-white p-4 rounded-lg shadow">
          <input
            className="flex-1 border rounded-md px-3 py-2"
            placeholder="Job title, keywords, or company"
          />
          <input
            className="flex-1 border rounded-md px-3 py-2"
            placeholder="City, state, or remote"
          />
          <button className="bg-blue-600 text-white px-6 rounded-md">
            Search Jobs
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 pb-10">
        {/* Filters */}
        <Filters />

        {/* Jobs */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              {jobs.length} jobs found
            </p>

            <select className="border rounded-md px-3 py-1 text-sm">
              <option>Most Recent</option>
              <option>Highest Salary</option>
            </select>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
