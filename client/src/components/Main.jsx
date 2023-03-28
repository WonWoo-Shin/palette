import { Colors, ColorBoard } from "../styled";
import { fetchDefaultColor } from "../api";
import { useQuery } from "react-query";

function Main() {
  const { isLoading, data } = useQuery("defaultColor", fetchDefaultColor);

  const copyCode = (code, id) => {
    const color = document.getElementById(id);
    console.log(`Click ${code}, ${color.innerText}`);
    window.navigator.clipboard.writeText(code);
  };

  return (
    <Colors>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        data.map((color) => (
          <ColorBoard
            id={color._id}
            backgroud={color.colorCode}
            key={color._id}
            onClick={() => copyCode(color.colorCode, color._id)}
          >
            {color.colorName}
          </ColorBoard>
        ))
      )}
    </Colors>
  );
}

export default Main;
