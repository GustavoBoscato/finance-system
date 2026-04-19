    import 'dotenv/config'
    import { User } from "../models/UserModel.mjs";
    import bcrypt from 'bcrypt';
    import jwt from 'jsonwebtoken';
    
    export async function LoginService(data)  {
        const {email, password} = data.body
        
        if (!email || !password) {
            throw new Error('Email or password invalid.');
        }
        const findUser = await User.findOne({where: {email}});
        if (!findUser) {
            throw new Error('User not founded')
        }
        const hashPassword = findUser.password;

        const validPassword = await bcrypt.compare(password, hashPassword);

        if (!validPassword) {
            throw new Error('Password incorrect');
        }

        const token = jwt.sign({id: findUser.id}, process.env.JWT_SECRET, {expiresIn: '30m'});
        const findUserWithoutPassword = {
            name: findUser.name,
            email: findUser.email,
            id: findUser.id
        };
            data.user = token;

        return {
            user: findUserWithoutPassword,
            token: token
        }
    }

    export async function RegisterService(data) {
        const {name, email, photo, password} = data;
    if (!name || !email || !password) {
        throw new Error('Name, email or password is incorrect.')
    }
    const validEmail = await User.findOne({where: {email}});
    if (validEmail) {
        throw new Error('Email exist to database');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({
        name: name,
        email: email, 
        photo: photo,
        password: hashPassword,
        
    });


    return userCreated;
        
    }