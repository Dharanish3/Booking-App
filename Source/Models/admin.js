import mongoose from "./setup.js";


const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const adminSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true , 'The field is Required']
    },
    email : {
        type : String,
        required : [true, "The email field is Required"],
        unique : true,
        validate : [validateEmail, 'Please fill a valid email address'],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type : String,
        required : [true , 'Password is Required']

    },
    role :{
        type  : String,
        default : "Admin"
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
  },{
    collection: "admin"
  });


  

  const schema = mongoose.model('admin', adminSchema);

  export default schema