import express from "express"
import mongoose  from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import resolucion247 from "./routes/routes.cac247.js";
dotenv.config();
const PORT = process.env.PORT || 3006;
const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error(err.message));

  app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

 app.use("/res247", resolucion247);