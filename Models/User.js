const mongoose=require("mongoose");

const  schema =mongoose.Schema;

const userSchema = new schema ({
       image: {type:String , 
                default:"https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"},
       name: {type:String, 
        required:true
    },
    Lastname: {type:String, 
      required:true
  },
  adress: {type:String, 
    required:true
    }, 

       email:{type:String, 
        required:true
    },

       password:{type:String,
         required:true
    },
    category: {
        type: String,
        default:"user",
      }
});

const User = mongoose.model("User",userSchema);

module.exports = User;