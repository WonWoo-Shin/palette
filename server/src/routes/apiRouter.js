import express from "express";
import { getDefaultColor } from "../controller/apiController";

const apiRouter = express.Router();

apiRouter.get("/defaultColor", getDefaultColor);

export default apiRouter;
