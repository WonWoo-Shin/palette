import "./App.css";
import { Wrap } from "./styled";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Header />
      <Wrap>
        <Menu />
        <Main />
      </Wrap>
    </>
  );
}

export default App;
