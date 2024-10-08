const express = require('express');
const path=require('path');
const mongoose=require('mongoose');
require('dotenv').config();
const cookieParser=require('cookie-parser');
const {restrictToLoggedinUserOnly}=require('./middlewares/auth');

const staticRouter=require('./routes/staticroutes');
const userRoute=require('./routes/user');
const dataRoute=require('./routes/data');
const patronRoute=require('./routes/patron');

const app=express();
const PORT=8000;
const mongoUrl=process.env.MONGOURL;


mongoose.connect(MONGOURL).
then(()=>console.log("mongodb connected"))
.catch((err)=>console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use('/',staticRouter);
app.use('/data',restrictToLoggedinUserOnly,dataRoute);
app.use('/user',userRoute);
app.use('/patron',restrictToLoggedinUserOnly,patronRoute);


app.listen(PORT,()=>console.log("server started at port 8000"));