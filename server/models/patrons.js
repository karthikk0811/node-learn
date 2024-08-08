const mongoose=require('mongoose')

const patronSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true});

const Patron=mongoose.model('patron',patronSchema);

module.exports=Patron;