import { Colors, ColorBoard } from "../styled";
import { fetchDefaultColor } from "../api";
import { useQuery } from "react-query";

function Main() {
  const { isLoading, data } = useQuery("defaultColor", fetchDefaultColor);

  return (
    <Colors>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        data.map((color) => (
          <ColorBoard backgroud={color.colorCode} key={color._id}>
            {color.colorName}
          </ColorBoard>
        ))
      )}
    </Colors>
  );
}

export default Main;
