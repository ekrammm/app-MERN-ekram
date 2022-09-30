const express = require("express");
const Course = require("../models/Course");

const CourseRouter=express.Router();


//post couse
CourseRouter.post("/add",async(req,res)=>{
    try {
        let newCourse= new Course(req.body);
        let result=await newCourse.save();
        res.send({course:result,msg:"course is added"})
    } catch (error) {
      console.log(error)  
    }
});
//get all course
CourseRouter.get("/",async(req,res)=>{
    try {
      let result=await Course.find();
      res.send({course:result,msg:"all course"})
    } catch (error) {
      console.log(error)
    }
   });
   //get course by id 
   CourseRouter.get("/:id",async(req,res)=>{
    try {
      let result=await Course.findById(req.params.id);
      res.send({course:result,msg:"course"})
    } catch (error) {
      console.log(error)
    }
   });
// delete course
CourseRouter.delete("/:id",async(req,res)=>{
    try {
      let result=await Course.findByIdAndDelete(req.params.id);
      res.send({msg:"course is delete"})
    } catch (error) {
      console.log(error)
    }
   });
    //update course
    CourseRouter.put("/:id",async(req,res)=>{
    try {
      let result=await Course.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
      res.send({msg:"course is updated "})
    } catch (error) {
      console.log(error)
    }
   });
module.exports=CourseRouter;