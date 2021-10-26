import User from "../../../model/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "TLUS@/2021/"

const Login = async (req, res) => {
    try {
        const { mssv, password } = req.body
        if (!(mssv && password)) {
            return res.status(400).send({
                message: 'All input is required',
                status: false
            });
        }
        const user = await User.findOne({ mssv })
        if (user && (await bcryptjs.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, mssv, firstName: user.first_name, lastName: user.last_name, className: user.className },
                PRIVATE_KEY,
                {
                    expiresIn: "30 days",
                }
            )
            user.token = token;
            delete user._doc.password
            return res.status(200).json({
                user: { ...user._doc },
                access_token: token,
                status: true
            });
        }
        return res.status(401).json({
            error: "Invalid user or password",
            status: false
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json('Server error')
    }
}

export default Login