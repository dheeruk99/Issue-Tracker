const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Category:[{
        type:String
    }]
});


const Issue = mongoose.model("Issue",issueSchema);
module.exports = Issue;
