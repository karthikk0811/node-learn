const Patron=require('../models/patrons');

async function getPatrons(req,res){
    const allPatrons=await Patron.find({});
    return res.render("data",{ items: allPatrons, type: 'patrons' });
}
async function addPatron(req,res){
    const{name,email}=req.body;
    Patron.create({
        name,
        email,
    })
    return res.redirect("/");
}

module.exports={
    getPatrons,
    addPatron,
}