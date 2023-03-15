import express from "express";
import rootRouter from "./router/rootRouter";

const app = express();

app.use("/", rootRouter);

app.listen(4000, () => console.log("Server Connnected✅"));
