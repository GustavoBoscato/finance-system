
import { User } from "../models/UserModel.mjs";
import { UUIDV4 } from "sequelize";
import bcrypt from 'bcrypt';
export const register = async (req, res) => {
    const {name, email, photo, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({error: 'Name, email or password is incorrect.'});
    }
    const validEmail = await User.findOne({where: {email}});
    if (validEmail) {
        return res.status(409).json({error: 'Email exist to database'})
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({
        name: name,
        email: email, 
        photo: photo,
        password: hashPassword,
        
    });
    return res.status(201).json({
        id: userCreated.id,
        name: userCreated.name,
        email: userCreated.email

    })
    
}
