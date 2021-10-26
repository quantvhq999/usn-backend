import jwt from "jsonwebtoken";

const PRIVATE_KEY= process.env.PRIVATE_KEY || "TLUS@/2021/"

export const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]
    if (!token) {
        return res.status(403).send({
            message:"A token is required for authentication"
        });
    }
    try {
        const decoded = jwt.verify(token, PRIVATE_KEY);
        if(req.params.mssv.toString() !==  decoded.mssv.toString()){
            return res.status(401).send({ 
                message:"Invalid Token"
            });
        }else{
            req.user = decoded;
        }
    } catch (err) {
        return res.status(401).send({ 
            message:"Invalid Token"
        });
    }
    return next();
}

export default verifyToken