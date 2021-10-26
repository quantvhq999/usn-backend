import User from "../../../model/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const FetchUser = async (req, res) => {
    try {
        const mssv = req.params.mssv
        const user = await User.findOne({mssv})
        if(user){
            res.json(user)
        }else{
            res.json({
                message:'User not found',
                status: false
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json('Server error')
    }
}

export default FetchUser