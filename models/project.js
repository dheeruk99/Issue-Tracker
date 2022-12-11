const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  
},{
  timestamps:true
});

const Projects = mongoose.model("Projects", projectSchema);
module.exports = Projects;
