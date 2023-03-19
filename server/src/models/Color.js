import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  colorName: String,
  colorCode: String,
});

const Color = mongoose.model("Color", colorSchema);

export default Color;
