
import { User } from "../models/UserModel.mjs";
import bcrypt from 'bcrypt';
import { getId } from "../utils/getId.mjs";
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
        id: getId()
        
    });

    return res.status(201).json({
        id: userCreated.id,
        name: userCreated.name,
        email: userCreated.email

    })
    
}
export const login = async (req, res) =>{
    const {email, password} = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({error: 'Email or password invalid.'})
        }
        const findUser = await User.findOne({where: {email}});
        if (!findUser) {
            return res.status(404).json({error: 'User not found'})
        }
        const hashPassword = findUser.password;

        const validPassword = await bcrypt.compare(password, hashPassword);

        if (!validPassword) {
            return res.status(401).json({error: 'Password incorrect'});
        }
        return res.status(200).json({
            id: findUser.id,
            name: findUser.name,
            email: findUser.email
        });
        
    } catch (error) {
        return res.status(500).json({error: 'Error server'} )
    }
}