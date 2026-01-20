import JobCard from "../components/JobCard";

const Home = () => {
  // Temporary dummy data (API later)
  const jobs = [
    {
      _id: "1",
      title: "MERN Stack Developer",
      company: "Tech Corp",
      location: "Mumbai",
      skills: ["React", "Node", "MongoDB"],
      salary: "₹6–8 LPA",
    },
    {
      _id: "2",
      title: "Frontend Developer",
      company: "Startup Inc",
      location: "Remote",
      skills: ["React", "Tailwind"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Latest Jobs</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
