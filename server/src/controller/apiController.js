import Color from "../models/Color";

export const getDefaultColor = async (req, res) => {
  const defaultColor = await Color.find({});
  return res.send(defaultColor);
};

export const postDefaultColor = async (req, res) => {
  const { name, code } = req.body;
  const defaultColor = await Color.find({});
  const newColor = new Color({
    colorName: "Thistle",
    colorCode: "#D8BFD8",
  });
  Color.create(newColor);
  return res.send(defaultColor);
};
