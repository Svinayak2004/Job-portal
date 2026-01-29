import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ApplyJob = () => {
  const { id } = useParams();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/login";
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2>Apply for this position</h2>
      {/* Your existing form UI here */}
    </div>
  );
};

export default ApplyJob;
