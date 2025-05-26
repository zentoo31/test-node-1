import jwt from "jsonwebtoken";
import User from "../model/user.mjs";
import config from "../config/config.mjs";
import bcrypt from "bcrypt"

export class AuthService{

    static async Register(userData){
        const {email, password} = userData;

        const existingUser= await User.findOne({email});
        if(existingUser) throw new Error('El usuario ya existe');

        const hashedPassword = await bcrypt.hash(password,13);

        const user = new User({
            ...userData,
            password: hashedPassword
        });

        await user.save();
        return user;
    }


    static async Login(email, password){
        const userExists = await User.findOne({email});
        if(!userExists) throw new Error('El usuario no existe');

        const isPasswordValid = await bcrypt.compare(password, userExists.password);
        if(!isPasswordValid) throw new Error('La contraseña es incorrecta');

        return this.generateToken(userExists); 
    }

    static generateToken(user){
        return jwt.sign(
        {id:user._id, email: user.email}, 
        config.JWT_SECRET,
        {expiresIn: '1h'}
    )}

}