import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.js'
import bodyParser from 'express'
import cors from 'cors'

import recipeRouter from './routes/recipe.js'


const app = express();

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))


//userRouter
app.use('/api',userRouter)

//recipeRouter
app.use('/api',recipeRouter)

mongoose
  .connect(
    "mongodb+srv://shrutinimbalkar28:WjYOLDuEPJbl9r0e@cluster0.qib63.mongodb.net/",
    {
      dbName: "MERN_Recipe_App",
      
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));


  const port = 3001;
  app.listen(port, () => console.log(`server is running on port ${port}`));