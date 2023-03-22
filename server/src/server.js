import "./db";
import "./models/Color";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import rootRouter from "./routes/rootRouter";
import apiRouter from "./routes/apiRouter";

const app = express();
const logger = morgan("dev");

app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/", rootRouter);
app.use("/api", apiRouter);

app.listen(4000, () => console.log("Server Connnected✅"));
