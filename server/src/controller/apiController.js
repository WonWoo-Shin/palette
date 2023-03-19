import Color from "../models/Color";

export const getDefaultColor = async (req, res) => {
  const defaultColor = await Color.find({});
  return res.send(defaultColor);
};
