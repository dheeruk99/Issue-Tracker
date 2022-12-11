const express = require("express");
const router = express.Router();

const homeController = require("../controller/home_controller");
const projectController = require("../controller/projects_controller");

router.get("/", homeController.home);
router.get("/createProject", projectController.newProject);
router.post("/addProject", projectController.addProject);
module.exports = router;
