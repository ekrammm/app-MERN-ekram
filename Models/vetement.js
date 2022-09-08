const mongoose=require("mongoose");

const  schema = mongoose.Schema;

const vetementSchema = new schema ({
       nameproduct:String,
       image:String,
       prix:Number,
       size:String,
       category:String,
       description:String,
       gender:String
       
});

const Vetement = mongoose.model("Vetement",vetementSchema);

module.exports = Vetement;
