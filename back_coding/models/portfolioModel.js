const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeText : {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    lottieURL:{
        type:String,
        required:true,
    },

});


const aboutSchema= new mongoose.Schema({
    description1:{
        type: String,
        required: true
    },

});

const educationSchema= new mongoose.Schema({
    skill:{
        type: Array,
        required: true
    }

});

const projectsSchema = new mongoose.Schema({
    title: {
     type:String,
    requied : true,
    },
    description:{
        type: String,
        required: true
    },
   
});

// models/User.js
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    });


module.exports={
    Intros : mongoose.model("intros",introSchema),
    About: mongoose.model("abouts",aboutSchema),
    Education: mongoose.model("educations",educationSchema),
    Project:mongoose.model("projects",projectsSchema),
    User:mongoose.model('User', userSchema)
};
