const Projects = require("../models/project");

module.exports.newProject = (req, res) => {
  return res.render("create_project");
};
module.exports.addProject = async (req, res) => {
  try {
    await Projects.create({
      Name: req.body.Name,
      Description: req.body.Description,
      Author: req.body.Author,
    });

    if (req.xhr) {
      return res.status(200).json({
        message: "Project Added",
      });
    }
  } catch (err) {
    console.log(`Error ${err}`);
  }
};
