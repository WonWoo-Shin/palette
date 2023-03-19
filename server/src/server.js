import "./db";
import "./models/Color";
import express from "express";
import cors from "cors";
import rootRouter from "./routes/rootRouter";
import apiRouter from "./routes/apiRouter";

const app = express();

app.use(cors());
app.use("/", rootRouter);
app.use("/api", apiRouter);

app.listen(4000, () => console.log("Server Connnected✅"));
