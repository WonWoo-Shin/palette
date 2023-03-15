import express from "express";
import { home } from "../controller/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
