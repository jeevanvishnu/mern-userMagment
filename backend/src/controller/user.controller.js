import User from "../model/user.model.js"

export const getAllUser = async (req , res) =>{
    try {
       const user = await User.find()
       res.status(200).json(user)
        
    } catch (error) {
        console.log("Error in getAllUser controller",error.message);
        res.status(500).json({message:"Internal server error"})
    }
}

export const createUser = async (req , res) =>{
    try {
        const {name , email} = req.body
        const newUser = new User({name , email})
        await newUser.save()
        res.status(201).json({message:"User created sucessfully !"})
        
    } catch (error) {
        console.log("Error in createUser controller",error.message);
        res.status(500).json({message:"Internal server error" })
    }
}

export const updateUser = async (req , res) =>{
    try {
        const {name , email} = req.body
        const id = req.params.id;
        
        const update = await User.findByIdAndUpdate(id,
            {name,email},
            {new:true}
        )

        if(!update) res.status(404).json({message:"User is not found"})
            res.status(200).json({message:"User update sucessfully"})

    } catch (error) {
        console.log("Error in updateUser controller" , error.message);
        res.status(500).json({message:"Internal server error"})
    }
}

export const deleteUser = async (req , res) =>{
    const id = req.params.id
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        if(!deleteUser) return res.status(404).json({messsage:"User not found !"})
            res.status(200).json({message:"User deleted sucessfully"})
    } catch (error) {
        console.log("Error in deleteUser controller", error.message);
        res.status(500).json({message:"Internal server error"})
        
    }
}