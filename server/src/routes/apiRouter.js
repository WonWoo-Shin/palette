import express from "express";
import { getDefaultColor, postDefaultColor } from "../controller/apiController";

const apiRouter = express.Router();

apiRouter.route("/defaultColor").get(getDefaultColor).post(postDefaultColor);

export default apiRouter;
