import { Colors, ColorBoard, ColorInfo } from "../styled";
import { fetchDefaultColor } from "../api";
import { useQuery } from "react-query";

function Main() {
  const { isLoading, data } = useQuery("defaultColor", fetchDefaultColor);

  const copyCode = (code, id) => {
    window.navigator.clipboard.writeText(code).then(() => {
      const clicked = document.getElementById(id);
      clicked.innerText = "Copied";
      setTimeout(() => {
        clicked.innerText = code;
      }, 1000);
    });
  };

  return (
    <Colors>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        data.map((color) => (
          <ColorBoard
            backgroud={color.colorCode}
            key={color._id}
            onClick={() => copyCode(color.colorCode, color._id)}
          >
            <ColorInfo>
              <span>{color.colorName}</span>
              <span id={color._id}>{color.colorCode}</span>
            </ColorInfo>
          </ColorBoard>
        ))
      )}
    </Colors>
  );
}

export default Main;
