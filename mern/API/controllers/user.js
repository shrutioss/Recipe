import { User } from '../Models/user.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req,res)=>{
    const {name,gmail,password} = req.body

    try{
        let user = await User.findOne({gmail});

        if(user) return res.json({message:"User Already exist"});

        const hashPass = await bcrypt.hash(password,10)

        user = await User.create({name,gmail,password : hashPass})

        res.json({message:"User Register Successfully..!"})

    
    } catch(error){
        console.log({message:error})
    }

}

export const login = async (req,res) =>{
    const {gmail,password} = req.body
    // console.log("USer is coming from login",User)

    try{
        let user = await User.findOne({gmail});

        if(!user) return res.json({meassage:"User not exist..!"})

        const validPass = await bcrypt.compare(password, user.password);

        if(!validPass) return res.json({message:"Invalid credentials"});

        const token = jwt.sign({userId:user._id},"!@#$%^&*()", {
            expiresIn:'1d'
                 
        })

        res.json({message:`Welcome ${user.name}`,token})



    } catch(error){
        res.json({messahe:error.message})
    }
}


export const profile = async (req,res) =>{
    res.json({user : req.user})
}