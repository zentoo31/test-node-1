import mongoose from "mongoose";
import config from "./config.mjs";

const connectDB = async () => {
    try {
        await mongoose.connect(config.DB_URI, {
            dbName: config.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Base de datos conectada");
    } catch (error) {
        console.error("❌ Error en la conexión a base de datos", error.message);
        process.exit(1);
    }
}

export default connectDB;