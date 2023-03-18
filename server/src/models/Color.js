import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  ColorName: String,
  ColorCode: String,
});

const colorModel = mongoose.model("Color", colorSchema);

export default colorModel;
