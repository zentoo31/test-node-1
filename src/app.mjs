import express from "express";
import cors from "cors"
import config from "./config/config.mjs"; 
import connectDB from "./config/db.mjs";
import AuthRouter from "./auth/auth.router.mjs";

const app = express();
app.use(express.json())
app.use(cors())
connectDB();

app.use('/auth',AuthRouter);


app.listen(config.PORT, () => 
    console.log(`Server is running on ${config.PORT}`)
)