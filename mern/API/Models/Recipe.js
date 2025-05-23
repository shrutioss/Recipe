import mongoose from "mongoose";
// import { SavedRecipe } from "./SavedRecipe";
// import { savedRecipeById } from "../controllers/recipe";


const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    ist:{
        type: String,
        require: true,
    },
    ing1: {type:String},
    ing2: {type:String},
    ing3: {type:String},
    ing4: {type:String},
    qty1: {type:String},
    qty2: {type:String},
    qty3: {type:String},
    qty4: {type:String},
    _imgurl: { type: String, require: true },
    get imgurl() {
        return this._imgurl;
    },
    set imgurl(value) {
        this._imgurl = value;
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    
});

export const Recipe = mongoose.model("recipe", recipeSchema)