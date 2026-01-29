const Job = require("../models/Job");
const Application = require("../models/Application");


// POST JOB (Recruiter)
exports.createJob = async (req, res) => {
  try {
    const { title, company, location, skills, description } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      skills,
      description,
      recruiterId: req.user.id,
    });

    res.status(201).json({
      message: "Job posted successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL JOBS (Public)
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate(
      "recruiterId",
      "name email"
    );

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE JOB
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "recruiterId",
      "name email"
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Additional controller functions (e.g., updateJob, deleteJob) can be added here
exports.applyJob = async (req, res) => {
  try {
    if (req.user.role !== "jobseeker") {
      return res.status(403).json({ message: "Access denied" });
    }

    const alreadyApplied = await Application.findOne({
      job: req.params.id,
      applicant: req.user.id
    });

    if (alreadyApplied) {
      return res.status(400).json({ message: "Already applied" });
    }

    const application = await Application.create({
      job: req.params.id,
      applicant: req.user.id
    });

    res.status(201).json({
      message: "Job applied successfully",
      application
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// GET JOB APPLICANTS (Recruiter)2
exports.getJobApplicants = async (req, res) => {
  try {
    // Only recruiter
    if (req.user.role !== "recruiter") {
      return res.status(403).json({ message: "Access denied" });
    }

    const applications = await Application.find({
      job: req.params.id,
    })
      .populate("applicant", "name email skills resumeUrl")
      .populate("job", "title company");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
