const express= require('express');
const cors = require('cors');

const app =express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
const dbconfig =require("../back_coding/config/dbconfig");


const portfolioRoute =require("./routes/portfolioRoutes");

app.use("/api/portfolio",portfolioRoute);
const port =process.env.PORT || 5000
app.listen(port,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
});