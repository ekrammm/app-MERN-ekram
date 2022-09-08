const mongoose=require("mongoose");

const  schema =mongoose.Schema;

const laptopSchema = new schema ({
       nameproduct:String,
       image:String,
       prix:Number,
       description:String
 
});

const Laptop = mongoose.model("Laptop",laptopSchema);

module.exports = Laptop;

