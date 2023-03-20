import { HeaderBar } from "../styled";

function Header() {
  return (
    <HeaderBar>
      <h1>Palette</h1>
      <input type="text" placeholder="Search Color" />
    </HeaderBar>
  );
}

export default Header;
