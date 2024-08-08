const User=require('../models/user');

async function getUsers(req,res){
    const allUsers=await User.find({});
    return res.render("data",{ items: allUsers, type: 'users' });
}

module.exports=getUsers;