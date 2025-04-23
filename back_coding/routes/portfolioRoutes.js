const router = require('express').Router();
const { Router } = require('express');
const{Intros,About,Education,Project} = require('../models/portfolioModel');
const mongoose=require('mongoose');
const { PiProjectorScreenChartBold, PiProjectorScreenChartFill } = require('react-icons/pi');

// get all portfolio data
router.get('/get-portfolio-data', async(req,res)=>{
    try {
        const intros =await Intros.find();
        const about=await About.find();
        const education=await Education.find();
        const projects=await Project.find();

        res.status(200).send({
            intros: intros[0],
            about:about[0],
            education,
            projects:projects,
        })
    } catch (error) {
        res.status(500).send(error);
        
    }

});


//update intro
router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intros.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(req.body._id) },  // Find by _id
            { welcomeText: req.body.welcomeText, description: req.body.description, lottieURL: req.body.lottieURL }, // Update fields
            { new: true }  // Return updated document
        );

        if (!intro) {
            return res.status(404).send({
                success: false,
                message: "Intro not found"
            });
        }

        console.log("Updated Intro:", intro);
        console.log("Request Body:", req.body);

        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro updated successfully"
        });
    } catch (error) {
        console.error("Error updating intro:", error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
});


// Update about
router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(req.body._id) }, // Find by _id
            { description1: req.body.description1 }, // Replace description
            { new: true }  // Return the updated document
        );

        if (!about) {
            return res.status(404).send({
                success: false,
                message: "About not found"
            });
        }

        console.log("about", about);
        console.log("req.body",req.body);
        
        res.status(200).send({
            data: about,
            success: true,
            message: "About updated successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
});


//add skills
router.post('/add-Skills', async (req, res) => {
    try {
      const ObjectId = '67d5805ce72c9344cdd7cbfb';
      const { skill } = req.body;
  
      console.log("Request Body:", req.body); // 🔍 Debug incoming data
  
      if (!skill || typeof skill !== "string") {
        return res.status(400).json({ success: false, message: 'Skill (string) is required.' });
      }
  
      const updatedSkills = await Education.findByIdAndUpdate(
        ObjectId,
        { $push: { skill: skill } },
        { new: true }
      );
  
      if (!updatedSkills) {
        return res.status(404).json({ success: false, message: 'Education document not found.' });
      }
  
      res.status(200).json({
        message: 'Skill added successfully',
        data: updatedSkills,
        success: true
      });
  
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({
        message: 'Server error',
        error: err.message,
        success: false
      });
    }
  });
  
// delete-skill
  router.post('/delete-skill', async (req, res) => {
    try {
      const ObjectId = '67d5805ce72c9344cdd7cbfb';
      const { skill } = req.body;
  
      console.log("Delete Request Body:", req.body);
  
      if (!skill || typeof skill !== "string") {
        return res.status(400).json({ success: false, message: 'Skill (string) is required for deletion.' });
      }
  
      const updatedSkills = await Education.findByIdAndUpdate(
        ObjectId,
        { $pull: { skill: skill } }, // 🧹 Remove the specific skill from array
        { new: true }
      );
  
      if (!updatedSkills) {
        return res.status(404).json({ success: false, message: 'Education document not found.' });
      }
  
      res.status(200).json({
        message: 'Skill deleted successfully',
        data: updatedSkills,
        success: true
      });
  
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({
        message: 'Server error',
        error: err.message,
        success: false
      });
    }
  });
  

//add-project
router.post("/add-project", async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save(); // ✅ Corrected this line
      res.status(200).send({
        data: project,
        success: true,
        message: "Project added successfully",
      });
    } catch (error) {
      console.error("Error adding project:", error);
      res.status(500).send({
        success: false,
        message: "Failed to add project",
        error: error.message,
      });
    }
  });
  

//update-project
router.post("/update-project", async (req, res) => {
    try {
      const { id, ...updateFields } = req.body;
  
      const project = await Project.findOneAndUpdate(
        { _id: id },       // ✅ Proper filter
        updateFields,      // ✅ Update only the other fields
        { new: true }      // ✅ Return the updated document
      );
  
      res.status(200).send({
        data: project,
        success: true,
        message: "Project updated successfully",
      });
    } catch (error) {
      console.error("Error updating project:", error);
      res.status(500).send({
        success: false,
        message: "Failed to update project",
        error: error.message,
      });
    }
  });
  

//delete-project
router.post("/delete-project", async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.body.id); // ✅ Changed this line
      res.status(200).send({
        data: project,
        success: true,
        message: "Project deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting project:", error);
      res.status(500).send({
        success: false,
        message: "Failed to delete project",
        error: error.message,
      });
    }
  });
  



module.exports = router;