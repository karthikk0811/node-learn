const express=require('express');
const { getPatrons, addPatron } = require('../controllers/patron');
const router=express.Router();

router.get("/",getPatrons);
router.post("/addPatron", addPatron);

module.exports=router;