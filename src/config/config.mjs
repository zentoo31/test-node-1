import dotenv from "dotenv";
import path from "path";

const env = process.env.NODE_ENV || 'development';

dotenv.config({
    path: path.resolve(process.cwd(), `.env.${env}`)
});

export default{
    NODE_ENV: env,
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET
}