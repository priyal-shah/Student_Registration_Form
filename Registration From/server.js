const express = require("express");

const app=express();
const mongoose= require("mongoose");
const bodyParser= require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://registration:1234@cluster0.vj7p57k.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true}, {useUnifiedTopology:true});

// create a dataschema

const notesSchema={
    fname:{
        type:String,
        required:true
    },
    mname: {
        type:String,
    },
    lname: {
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String
    },
    sate:{
        type:String
    },
    pin:{
        type:Number
    },
    semail:{
        type:String
    },
    mob:{
        type:Number,
        required:true
    },
    programe:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    foqupation:{
        type:String
    },
    fmob:{
        type:Number,
    },
    mothername:{
        type:String,
        required:true
    },
    moqupation:{
        type:String
    },
    mmob:{
        type:Number,
    }
}

const Note= mongoose.model("Note", notesSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    let newNote = new Note({
        fname:req.body.fname,
            mname:req.body.mname,
            lname:req.body.lname,
            dob:req.body.dob,
            gender:req.body.gender,
            address:req.body.address,
            city:req.body.city,
            sate:req.body.sate,
            pin:req.body.pin,
            semail:req.body.semail,
            mob:req.body.mob,
            programe:req.body.programe,
            branch:req.body.branch,
            year:req.body.year,
            college:req.body.college,
            fatherName:req.body.fathername,
            foqupation:req.body.focqupation,
            fmob:req.body.fmob,
            mothername:req.body.mothername,
            moqupation:req.body.mocqupation,
            mmob:req.body.mmob
    });
    newNote.save();
    res.redirect('/');
});

app.listen(3000,function(){
    console.log("server is running on 3000");
});