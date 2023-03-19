import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [colors, setColors] = useState(null);

  const fetchDefaultColor = async () => {
    const fetchColors = await axios.get(
      "http://localhost:4000/api/defaultColor"
    );
    setColors(fetchColors.data);
  };

  useEffect(() => {
    fetchDefaultColor();
  }, []);

  return colors === null ? (
    <div>Loading...</div>
  ) : (
    <div>{colors[0].colorName}</div>
  );
}

export default App;
