import { AuthService } from "./auth.service.mjs";

export class AuthController{
    static async register(req, res){
        try {
            const user = await AuthService.Register(req.body);
            res.status(201).json({user}); 
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

    static async login(req,res){
        try {
            const {email, password} = req.body;
            const response = await AuthService.Login(email, password);
            res.status(200).json({message: 'Usuario autenticado', response: response});
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }
}