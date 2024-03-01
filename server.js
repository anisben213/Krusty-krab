const mongoose = require('mongoose');
const express = require("express");
const path = require('path');
const app =express();
const {Recipe} = require('./db');
const {Employee} = require('./db');
const port = 3001;

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req,res)=>{
  try {
    const employees = await Employee.find().populate('recipeID');
    res.render('home', { employees });
  } catch (error) {
    console.log(error);
    res.send("error employees not found ");
  }
})


app.listen(port,()=>{
  console.log(`server running at ${port}`);
})

