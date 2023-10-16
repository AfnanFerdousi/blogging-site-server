import { verifyToken } from "../../helpers/jwtHelpers.js";

const auth = (...roles) => (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(req.headers)
        if (!token) {
            throw new Error("Unauthorized");
        }

        let verified = null;

        verified = verifyToken(token, process.env.JWT_SECRET);
        req.user = verified;

        if(!roles.includes(verified.role)) {
            throw new Error("Unauthorized");
        }
        
        next()
    } catch (error) {
        throw new Error(error);
    }
    
}

export default auth;