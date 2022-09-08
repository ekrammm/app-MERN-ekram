const mongoose=require("mongoose");

const  schema =mongoose.Schema;

const commandeSchema = new schema ({
       image:{type:String, 
              required:true
          },
       name:{type:String, 
              required:true
          },
       product:{type:String, 
              required:true
          },
       price:{type:Number, 
              required:true
          },
       date:{type:String, 
              required:true
          },
       quantity:{type:Number, 
              required:true
          }
 
});

const Commande = mongoose.model("Commande",commandeSchema);

module.exports = Commande;
