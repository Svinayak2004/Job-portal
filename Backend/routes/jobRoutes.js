const express = require("express");
const router = express.Router();
const { applyJob } = require("../controllers/jobController");
const { getJobApplicants } = require("../controllers/jobController");
const auth = require("../middleware/authMiddleware");


const {
  createJob,
  getAllJobs,
  getJobById,
} = require("../controllers/jobController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

// Recruiter → Post Job
router.post(
  "/",
  protect,
  roleCheck("recruiter"),
  createJob
);

// Public → View Jobs
router.get("/", getAllJobs);
router.get("/:id", getJobById);

// Candidate → Apply for Job
router.post("/:id/apply", auth, applyJob);



router.get(
  "/:id/applicants",
  protect,
  roleCheck("recruiter"),
  getJobApplicants
);


module.exports = router;
