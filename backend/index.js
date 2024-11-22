import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import connectToDb from "./Db/connectToDb.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.port || 5000;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectToDb();
  console.log("the server is running on the port :", port);
});
