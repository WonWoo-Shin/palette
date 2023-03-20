import styled from "styled-components";

export const HeaderBar = styled.header`
  height: 50px;
  border-bottom: 2px solid #e4e4e4;
  display: flex;
  align-items: center;
  font-family: "Edu NSW ACT Foundation", cursive;
`;

export const Colors = styled.main`
  display: flex;
`;

export const ColorBoard = styled.div`
  width: 100px;
  height: 300px;
  background-color: ${(props) => props.backgroud};
`;
