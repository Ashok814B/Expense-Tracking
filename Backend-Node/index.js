const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require('./models/Post');
const Register = require('./models/Register');


app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

mongoose
  .connect("mongodb://localhost/expense"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.get('/api/posts',(req,res)=>{
     Post.find().then((result)=>{
      console.log("success",result);
      res.status(200).json({
        message:"Data is fetched successfully",
        list:result
       })
     }).catch((error)=>{
      res.status(200).json({
        message:"Data is fetched successfully",
        list:error
       })
     })
});

app.post('/api/posts',(req,res)=>{
  console.log(req.body);

  const list = new Post({
    title:req.body.title,
    category:req.body.category,
    amount:Number(req.body.amount),
    date:req.body.date
  });

  list.save().then((result)=>{
    console.log("success",result);
    res.status(201).json({
      message:"Data is added successfully",
      result:result
     })
  }).catch((error)=>{
    console.log("error",error);
    res.status(500).json({
      message:"Error occured",
      result:error
     })
  })



});

app.post('/api/auth/register',(req,res)=>{
     let register = new Register({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      password:req.body.password
     });

     register.save().then((response)=>{
      res.status(201).json({
        message:"Data successfully added"
      });
     }).catch((error)=>{
        res.status(500).json({
          message:"There is some error"
        })
     })
})


app.post('/api/auth/login',(req,res)=>{
  Register.findOne({email:req.body.email,password:req.body.password}).then((response)=>{
    console.log(response);
    if(!response){
     return res.status(401).json({
        message:"user is not defined"
      });
    }
    return res.status(200).json({
      message:"users is fetched successfully"
    });

  }).catch((error)=>{
     res.status(500).json({
       message:"There is some error"
     })
  })
})

app.patch('/api/posts/:id',(req,res)=>{
  console.log(req.params.id,req.body);
  let filter={
     _id:req.params.id
  }
  let update={
    title:req.body.title,
    category:req.body.category,
    amount:Number(req.body.amount),
    date:req.body.date
  }

  Post.update(filter,update).then((resposne)=>{
    res.status(200).json({
      message:"Data is updated successfully"
     })
  }).catch((error)=>{
    res.status(500).json({
      message:"Some error occured",
      error:error
     })
  })

});


app.delete('/api/posts/:id',(req,res)=>{
  console.log(req.params.id);
  Post.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(201).json({
      message:"Data is deleted successfully"
     })
  }).catch((error)=>{
    res.status(500).json({
      message:"Not able to delete the data"
     })
  })
});

app.listen(3000);