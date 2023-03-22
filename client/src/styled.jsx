import styled from "styled-components";

export const HeaderBar = styled.header`
  height: 50px;
  border-bottom: 2px solid #e4e4e4;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: "Edu NSW ACT Foundation", cursive;
`;

export const Wrap = styled.main`
  display: flex;
`;

export const LeftMenu = styled.div`
  width: 150px;
  height: calc(100vh - 50px);
  background-color: whitesmoke;
`;

export const Colors = styled.div`
  display: flex;
`;

export const ColorBoard = styled.div`
  width: 100px;
  height: 300px;
  background-color: ${(props) => props.backgroud};
`;
