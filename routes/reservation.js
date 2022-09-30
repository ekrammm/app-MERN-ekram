const express = require("express");
const Reservation = require("../models/reservation");

const reservationRouter=express.Router();


//post couse
reservationRouter.post("/add",async(req,res)=>{
    try {
        let newreservation= new Reservation(req.body);
        let result=await newreservation.save();
        res.send({reservation:result,msg:"reservation is added"})
    } catch (error) {
      console.log(error)  
    }
});
//get all course
reservationRouter.get("/",async(req,res)=>{
    try {
      let result=await Reservation.find();
      res.send({reservation:result,msg:"all reservation"})
    } catch (error) {
      console.log(error)
    }
   });
   //get course by id 
   reservationRouter.get("/:id",async(req,res)=>{
    try {
      let result=await Reservation.findById(req.params.id);
      res.send({reservation:result,msg:"reservation"})
    } catch (error) {
      console.log(error)
    }
   });
// delete course
reservationRouter.delete("/:id",async(req,res)=>{
    try {
      let result=await Reservation.findByIdAndDelete(req.params.id);
      res.send({msg:"reservation is delete"})
    } catch (error) {
      console.log(error)
    }
   });
    //update course
    reservationRouter.put("/:id",async(req,res)=>{
    try {
      let result=await Reservation.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
      res.send({msg:"course is updated "})
    } catch (error) {
      console.log(error)
    }
   });
module.exports=reservationRouter;