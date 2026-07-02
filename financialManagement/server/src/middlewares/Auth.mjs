import 'dotenv/config';
import jwt from "jsonwebtoken";

export async function AuthMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({error: 'Token Missing'});
    }
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({error: 'Invalid token format'});
    }
    const token = authHeader.split(' ')[1];
    try {
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({error: 'Invalid Token, log in do over'});
        }

        req.user = verifyToken;
        console.log(req.user)
        console.log('Auth middleware funcionando')
        next()
    } catch (error) {
        return res.status(500).json({error: error});   
    }
    
}