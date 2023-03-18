import { useEffect, useState } from "react";
import { fetchDefaultColor } from "./api";

function App() {
  const [myData, setMyData] = useState("");
  console.log(fetchDefaultColor());

  useEffect(() => {
    fetchDefaultColor();
  }, []);

  return <div></div>;
}

export default App;
