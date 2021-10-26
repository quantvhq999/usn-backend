import User from "../../../model/UserModel.js";
import bcryptjs from "bcryptjs";

const PRIVATE_KEY= process.env.PRIVATE_KEY || "TLUS@/2021/"
const Register = async (req, res) => {
    try {
        const { mssv, first_name, last_name, gender, password, className, brithDay } = req.body
        if (!(mssv && password && first_name && last_name)) {
            return res.status(400).send({
                message:'All input is required',
                status: false
            });
        }
        const oldUser = await User.findOne({mssv});
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please try again");
        }
        const encryptedPassword = await bcryptjs.hash(password, 10);
        const user = new User({
            mssv,
            first_name,
            last_name,
            gender,
            password: encryptedPassword,
            className,
            brithDay
        })
        await user.save()
        // return new user
        return res.status(201).json({
            message: 'Create user successful!',
            status: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Server error')
    }
}

export default Register