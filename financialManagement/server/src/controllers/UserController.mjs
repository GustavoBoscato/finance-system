
import { User } from "../models/UserModel.mjs";
import { LoginService, RegisterService } from "../service/UserService.mjs";
import bcrypt from 'bcrypt';
export const register = async (req, res) => {
    try {
        const userCreated = await RegisterService(req.body);
        
    return res.status(201).json({
        id: userCreated.id,
        name: userCreated.name,
        email: userCreated.email

    });
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
    
    
}
export const login = async (req, res) =>{
    
    try {
        const login = await LoginService(req);

        return res.status(200).json(login);
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}