const mongoose=require("mongoose");

const  schema = mongoose.Schema;

const reservationSchema = new schema ({
       namecourse:String,
       prix:Number,
       category:String,
       coach:String,
       date:String,
       user:String,
       
});

const Reservation = mongoose.model("Reservation",reservationSchema);

module.exports = Reservation;
