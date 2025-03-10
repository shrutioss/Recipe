import express from "express"
import { add, getAllRecipe, getRecipebyId, getRecipeByUserId, getSavedRecipe, savedRecipeById } from '../controllers/recipe.js'

import { Authenticate }from "../middlewares/auth.js";

const router =  express.Router();


router.post('/add',Authenticate, add) 

//get all recipe
router.get('/',getAllRecipe)

//get all saved Recipe
router.get('/saved',getSavedRecipe)

//getRecipe by Id
router.get('/:id',getRecipebyId)

//get recipe by userid
router.get('/user/:id',getRecipeByUserId)

//savedRecipe by id
router.post('/:id', Authenticate,savedRecipeById)



export default router;
