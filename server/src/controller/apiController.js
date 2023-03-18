export const getDefaultColor = (req, res) =>
  res.send([
    { colorName: "tomato", colorCode: "#FF6347" },
    { colorName: "teal", colorCode: "#008080" },
  ]);
