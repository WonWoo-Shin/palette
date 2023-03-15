import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Color = styled.div`
  width: 200px;
  height: 300px;
  background-color: white;
  border: 1px solid black;
`;

function Home() {
  return (
    <Main>
      <Color></Color>
      <Color></Color>
      <Color></Color>
    </Main>
  );
}

export default Home;
