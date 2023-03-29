import styled from "styled-components";

export const Wrap = styled.main`
  height: 100vh;
  display: grid;
  grid-template: 50px 1fr / 150px 1fr;
`;

export const HeaderBar = styled.header`
  border-bottom: 2px solid #e4e4e4;
  display: flex;
  align-items: center;
  grid-column: span 2;
  font-size: 20px;
  font-family: "Edu NSW ACT Foundation", cursive;
`;

export const LeftMenu = styled.div`
  border-right: 2px solid #e4e4e4; ;
`;

export const Colors = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-around;
`;

export const ColorBoard = styled.div`
  width: 150px;
  height: 200px;
  background-color: ${(props) => props.backgroud};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  div {
    width: 100%;
    height: 40%;
    padding: 10px;
    background-color: #efeff1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
      font-size: 18px;
      font-weight: 600;
      color: #222222;
    }
  }
`;
