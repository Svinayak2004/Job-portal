const Filters = () => {
  return (
    <div className="bg-white border rounded-lg p-4 space-y-6">
      <h3 className="text-sm font-semibold">Filters</h3>

      {/* Job Type */}
      <div>
        <p className="font-medium text-sm mb-2">Job Type</p>
        {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
          <label key={type} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <input type="checkbox" />
            {type}
          </label>
        ))}
      </div>

      {/* Experience */}
      <div>
        <p className="font-medium text-sm mb-2">Experience Level</p>
        {["Entry Level", "Mid Level", "Senior", "Lead", "Executive"].map((lvl) => (
          <label key={lvl} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <input type="checkbox" />
            {lvl}
          </label>
        ))}
      </div>

      {/* Salary */}
      <div>
        <p className="font-medium text-sm mb-2">Salary Range</p>
        {["$0 - $50k", "$50k - $100k", "$100k - $150k", "$150k+"].map((sal) => (
          <label key={sal} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <input type="checkbox" />
            {sal}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
