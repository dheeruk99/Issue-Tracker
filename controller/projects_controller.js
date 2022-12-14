const Projects = require("../models/project");
const Issue = require("../models/issue");


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


module.exports.projectDetails = async (req,res)=>{
      let project = await Projects.findById(req.params.id).populate('Issues');
      return res.render("project_Details",{
        project,
        Issue:project.Issues
      });
}

module.exports.addIssue = async (req,res)=>{
    let issue = await Issue.create({
      Title:req.body.Title,
      Description:req.body.Description,
      Author:req.body.Author,
      Category:req.body.Category
    });
    
    let project = await Projects.findById(req.body.id);
    project.Issues.push(issue)
    project.save();
    
    if(req.xhr){
      return res.status(200).json({
        data:{
          issue,
          message:"Issue created successfully"
        }
      })
    }
}
