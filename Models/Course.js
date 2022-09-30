const mongoose=require("mongoose");

const  schema = mongoose.Schema;

const courseSchema = new schema ({
       namecourse:String,
       image:String,
       prix:Number,
       category:String,
       description:String,
       coach:String,
       details:String,
       
});

const Course = mongoose.model("Course",courseSchema);

module.exports = Course;
